import express, { Request, Response } from 'express';
import { ProductRoutes } from './modules/products/product.routes';
const app = express();

app.use(express.json());

app.use('/api/products', ProductRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
