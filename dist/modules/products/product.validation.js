"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const zodValidationProduct = zod_1.z.object({
    name: zod_1.z
        .string({
        required_error: 'Name is required',
        invalid_type_error: 'Name must be a string',
    })
        .min(5, { message: 'Name must be 5 character' }),
    description: zod_1.z
        .string({
        required_error: 'Description is required',
        invalid_type_error: 'Description must be a string',
    })
        .min(50, { message: 'description must be 50 character' }),
    price: zod_1.z
        .number({
        required_error: 'Price is required',
        invalid_type_error: 'Price must be a number',
    })
        .gt(0, { message: 'Price must be more than 0' }),
    category: zod_1.z
        .string({
        required_error: 'Category is required',
        invalid_type_error: 'Category must be a string',
    })
        .min(4, { message: 'Category must be 4 character' }),
    tags: zod_1.z
        .array(zod_1.z
        .string({
        required_error: 'Tags is required',
        invalid_type_error: 'Tags must be a array of string',
    })
        .min(3, { message: 'Tag must be 3 character' }))
        .min(3, { message: 'Minimum tags length 3' }),
    variants: zod_1.z
        .array(zod_1.z.object({
        type: zod_1.z.string({
            required_error: 'Variants type is required',
            invalid_type_error: 'Variants type must be a string',
        }),
        value: zod_1.z.string({
            required_error: 'Variants value is required',
            invalid_type_error: 'Variants value must be a string',
        }),
    }, {
        required_error: 'Variants is required',
        invalid_type_error: 'Variants must be a array of objects',
    }), {
        required_error: 'Variants is required',
        invalid_type_error: 'Variants must be a array',
    })
        .min(2, { message: 'Minimum Variants length 2' }),
    inventory: zod_1.z.object({
        quantity: zod_1.z.number({
            required_error: 'Quantity is required',
            invalid_type_error: 'Quantity must be a number',
        }),
        inStock: zod_1.z.boolean({
            required_error: 'inStock is required',
            invalid_type_error: 'inStock must be a boolean',
        }),
    }, {
        required_error: 'Inventory is required',
        invalid_type_error: 'Inventory must be a array',
    }),
});
exports.default = zodValidationProduct;
