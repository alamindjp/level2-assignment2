import { Request, Response } from 'express';
import { orderServices } from './order.services';

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const result = await orderServices.createOrder(orderData);
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};
const getAllOrder = async (req: Request, res: Response) => {
  try {
    const result = await orderServices.getAllOrder();
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Order not found',
      error: err,
    });
  }
};

export const orderControllers = {
  createOrder,
  getAllOrder,
};
