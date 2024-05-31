"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
// const variantSchema = new Schema({
//   type: { type: String, required: true },
//   value: { type: String, required: true },
// });
// const inventorySchema = new Schema({
//   quantity: { type: Number, required: true },
//   inStock: { type: Boolean, required: true },
// });
const productSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    productId: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
});
exports.Product = (0, mongoose_1.model)('Product', productSchema);
