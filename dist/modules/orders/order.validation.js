"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const zodValidationOrder = zod_1.z.object({
    email: zod_1.z.string().email(),
    productId: zod_1.z.string(),
    price: zod_1.z.number().gte(10, { message: 'Order Price value minimum 10' }),
    quantity: zod_1.z.number().gte(1, { message: 'Order Quantity value minimum 1' }),
});
exports.default = zodValidationOrder;
