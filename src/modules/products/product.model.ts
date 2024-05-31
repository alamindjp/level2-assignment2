import { Schema, model } from 'mongoose';
import { TProduct } from './product.interface';

// const variantSchema = new Schema<TVariants>({
//   type: { type: String, required: [true, 'Type is required'] },
//   value: { type: String, required: [true, 'Value is required'] },
// });

// const inventorySchema = new Schema<TInventory>({
//   quantity: { type: Number, required: [true, 'Quantity is required'] },
//   inStock: { type: Boolean, required: [true, 'inStock is required'] },
// });
const productSchema = new Schema<TProduct>({
  email: { type: String, required: true },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

export const Product = model<TProduct>('Product', productSchema);
