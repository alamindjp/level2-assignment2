import { Schema, model } from 'mongoose';
import { TProduct, TVariants } from './product.interface';

const variantsSchema = new Schema<TVariants>({
  type: { type: String, require: true },
  value: { type: String, require: true },
});
const productSchema = new Schema<TProduct>({
  name: { type: String, require: true },
  description: { type: String, require: true },
  price: { type: Number, require: true },
  category: { type: String, require: true },
  tags: { type: [String], require: true },
  variants: [variantsSchema],
  inventory: {
    quantity: { type: Number, require: true },
    inStock: { type: String, require: true },
  },
});

export const Product = model<TProduct>('Product', productSchema);
