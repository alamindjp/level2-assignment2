import { orderServices } from './order.services';
import { Request, Response } from 'express';
import zodValidationOrder from './order.validation';
import mongoose from 'mongoose';

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const validOrderData = zodValidationOrder.parse(orderData);
    const result = await orderServices.createOrder(validOrderData);
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};
const getAllOrder = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    if (email) {
      const result = await orderServices.getAllOrder(email as string);
      return res.status(400).json({
        success: true,
        message: `Orders fetched successfully for user email: ${email}!`,
        data: result,
      });
    } else {
      const result = await orderServices.getAllOrder(email as string);
      return res.status(400).json({
        success: true,
        message: `Orders fetched successfully!`,
        data: result,
      });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Orders not found',
      error: err.massage,
    });
  }
};

const getSingleOrder = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;
    if (mongoose.Types.ObjectId.isValid(orderId)) {
      const result = await orderServices.getSingleOrder(orderId);
      res.status(200).json({
        success: true,
        message: 'Order fetched successfully!',
        data: result,
      });
    } else {
      res.status(400).json({
        success: false,
        massage: 'Invalid order ID',
      });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
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
  getSingleOrder,
};
