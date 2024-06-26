import { z } from 'zod';

const zodValidationProduct = z.object({
  name: z.string({
    required_error: 'Email is required',
    invalid_type_error: 'Email must be a string',
  }),
  description: z.string({
    required_error: 'Description is required',
    invalid_type_error: 'Description must be a string',
  }),
  price: z
    .number({
      required_error: 'Price is required',
      invalid_type_error: 'Price must be a number',
    })
    .positive({ message: 'Price must be a positive number' }),
  category: z.string({
    required_error: 'Category is required',
    invalid_type_error: 'Category must be a string',
  }),
  tags: z.string().array().nonempty({
    message: "Tags Can't be empty!",
  }),
  variants: z
    .object({
      type: z.string({
        required_error: 'Type is required',
        invalid_type_error: 'Type must be a string',
      }),
      value: z.string({
        required_error: 'Value is required',
        invalid_type_error: 'Value must be a string',
      }),
    })
    .array()
    .nonempty({
      message: "Variants Can't be empty!",
    }),
  inventory: z.object({
    quantity: z.number({
      required_error: 'Quantity is required',
      invalid_type_error: 'Quantity must be a number',
    }),
    inStock: z.boolean({
      required_error: 'inStock is required',
      invalid_type_error: 'inStock must be a boolean',
    }),
  }),
});

export default zodValidationProduct;
