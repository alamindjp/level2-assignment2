import express, { Request, Response } from 'express';
import { ProductRoutes } from './modules/products/product.routes';
import { OrderRoutes } from './modules/orders/order.routes';
const app = express();

app.use(express.json());

app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});
export default app;
