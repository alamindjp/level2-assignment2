import { Schema, model } from 'mongoose';
import { TProduct } from './product.interface';

// const variantSchema = new Schema({
//   type: { type: String, required: true },
//   value: { type: String, required: true },
// });

// const inventorySchema = new Schema({
//   quantity: { type: Number, required: true },
//   inStock: { type: Boolean, required: true },
// });
const productSchema = new Schema<TProduct>({
  email: { type: String, required: true },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

export const Product = model<TProduct>('Product', productSchema);
