import express from 'express';
import { orderControllers } from './order.controller';

const router = express.Router();

router.post('/', orderControllers.createOrder);
router.get('/', orderControllers.getAllOrder);
router.get('/:orderId', orderControllers.getSingleOrder);

export const OrderRoutes = router;
