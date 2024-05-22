import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrder = async (payload: TOrder) => {
  const result = await Order.create(payload);
  return result;
};
const getAllOrder = async (email: string) => {
  if (email) {
    const result = await Order.findOne({ email: email });
    return result;
  }
  const result = await Order.find();
  return result;
};

const getSingleOrder = async (id: string) => {
  const result = await Order.findById(id);
  return result;
};

export const orderServices = {
  createOrder,
  getAllOrder,
  getSingleOrder,
};
