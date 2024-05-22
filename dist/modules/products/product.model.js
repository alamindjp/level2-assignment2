"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const variantsSchema = new mongoose_1.Schema({
    type: { type: String, require: true },
    value: { type: String, require: true },
});
const productSchema = new mongoose_1.Schema({
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
exports.Product = (0, mongoose_1.model)('Product', productSchema);
