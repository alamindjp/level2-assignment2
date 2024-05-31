"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
// const variantSchema = new Schema<TVariants>({
//   type: { type: String, required: [true, 'Type is required'] },
//   value: { type: String, required: [true, 'Value is required'] },
// });
// const inventorySchema = new Schema<TInventory>({
//   quantity: { type: Number, required: [true, 'Quantity is required'] },
//   inStock: { type: Boolean, required: [true, 'inStock is required'] },
// });
const productSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    productId: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
});
exports.Product = (0, mongoose_1.model)('Product', productSchema);
