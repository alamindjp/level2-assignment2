"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
// const zodValidationProduct = z.object({
//   name: z.string({
//     required_error: 'Email is required',
//     invalid_type_error: 'Email must be a string',
//   }),
//   description: z.string({
//     required_error: 'Description is required',
//     invalid_type_error: 'Description must be a string',
//   }),
//   price: z
//     .number({
//       required_error: 'Price is required',
//       invalid_type_error: 'Price must be a number',
//     })
//     .positive({ message: 'Price must be a positive number' }),
//   category: z.string({
//     required_error: 'Category is required',
//     invalid_type_error: 'Category must be a string',
//   }),
//   tags: z.string().array().nonempty({
//     message: "Tags Can't be empty!",
//   }),
//   variants: z
//     .object({
//       type: z.string({
//         required_error: 'Type is required',
//         invalid_type_error: 'Type must be a string',
//       }),
//       value: z.string({
//         required_error: 'Value is required',
//         invalid_type_error: 'Value must be a string',
//       }),
//     })
//     .array()
//     .nonempty({
//       message: "Variants Can't be empty!",
//     }),
//   inventory: z.object({
//     quantity: z.number({
//       required_error: 'Quantity is required',
//       invalid_type_error: 'Quantity must be a number',
//     }),
//     inStock: z.boolean({
//       required_error: 'inStock is required',
//       invalid_type_error: 'inStock must be a boolean',
//     }),
//   }),
// });
// const zodVariantSchema = z.object({
//   type: z.string({ message: "Type type can't be empty" }),
//   value: z.string({ message: "Type value can't be empty" }),
// });
const zodInventorySchema = zod_1.z.object({
    quantity: zod_1.z
        .number()
        .int()
        .nonnegative({ message: 'Quantity must be a non-negative integer' }),
    inStock: zod_1.z.boolean({ message: 'InStock must be a boolean' }),
});
const zodValidationProduct = zod_1.z.object({
    inventory: zodInventorySchema,
});
exports.default = zodValidationProduct;
