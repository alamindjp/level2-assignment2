import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProduct = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProducts = async (searchTerm: string) => {
  if (searchTerm) {
    const result = await Product.find({
      $or: [
        { name: { $regex: searchTerm, $options: 'i' } },
        { description: { $regex: searchTerm, $options: 'i' } },
        { category: { $regex: searchTerm, $options: 'i' } },
      ],
    });
    return result;
  } else {
    const result = await Product.find();
    return result;
  }
};
const getSingleProduct = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};
const updateSingleProduct = async (id: string, updatedData: TProduct) => {
  const result = await Product.updateOne({ _id: id }, updatedData);
  return result;
};
const updateProductInventory = async (id: string, updatedData: TProduct) => {
  const result = await Product.updateOne({ _id: id }, updatedData);
  return result;
};
const updateField = async (id: string, updatedData: number) => {
  if (updatedData === 0) {
    const result = await Product.updateOne(
      { _id: id },
      { $set: { inventory: { quantity: updatedData, inStock: false } } },
    );
    return result;
  } else {
    const result = await Product.updateOne(
      { _id: id },
      { $set: { inventory: { quantity: updatedData, inStock: true } } },
    );
    return result;
  }
};
const deleteSingleProduct = async (id: string) => {
  const result = await Product.deleteOne({ _id: id });
  return result;
};

export const productServices = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  deleteSingleProduct,
  updateSingleProduct,
  updateField,
  updateProductInventory,
};
