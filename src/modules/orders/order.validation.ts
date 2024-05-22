import { z } from 'zod';

const zodValidationOrder = z.object({
  email: z.string().email(),
  productId: z.string(),
  price: z.number().gte(10, { message: 'Order Price value minimum 10' }),
  quantity: z.number().gt(1, { message: 'Order Quantity value minimum 1' }),
});

export default zodValidationOrder;
