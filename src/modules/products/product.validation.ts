import { z } from 'zod';

const zodValidationProduct = z.object({
  email: z
    .string({
      required_error: 'Email is required',
      invalid_type_error: 'Email must be a string',
    })
    .email({
      message: 'Email must be a email',
    }),
  productId: z.string({
    required_error: 'ProductId is required',
    invalid_type_error: 'ProductId must be a string',
  }),
  price: z
    .number({
      required_error: 'Price is required',
      invalid_type_error: 'Price must be a number',
    })
    .positive({ message: 'Price must be a positive number' }),
  quantity: z
    .number({
      required_error: 'Quantity is required',
      invalid_type_error: 'Quantity must be a number',
    })
    .positive({ message: 'Price must be a positive number' }),
});

export default zodValidationProduct;
