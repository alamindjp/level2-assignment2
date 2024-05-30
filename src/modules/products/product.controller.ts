/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { productServices } from './product.service';
import mongoose from 'mongoose';
import zodValidationProduct from './product.validation';

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const zodValidationData = zodValidationProduct.parse(productData);
    const result = await productServices.createProduct(zodValidationData);
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Product doesn't created successful",
      error: err,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm;
    if (searchTerm) {
      const result = await productServices.getAllProducts(searchTerm as string);
      if (Array.isArray(result) && result.length > 0) {
        res.status(200).json({
          success: true,
          message: `Products matching search term '${searchTerm}' fetched successfully!`,
          data: result,
        });
      } else {
        res.status(400).json({
          success: false,
          message: `Products matching search term '${searchTerm}' not found`,
          data: result,
        });
      }
    } else {
      const result = await productServices.getAllProducts(searchTerm as string);
      res.status(200).json({
        success: true,
        message: 'Products fetched successfully!',
        data: result,
      });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    if (mongoose.Types.ObjectId.isValid(productId)) {
      const result = await productServices.getSingleProduct(productId);
      res.status(200).json({
        success: true,
        message: 'Product fetched successfully!',
        data: result,
      });
    } else {
      return res.status(400).json({
        success: false,
        massage: 'Invalid product ID',
      });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};
const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updatedData = req.body;
    if (mongoose.Types.ObjectId.isValid(productId)) {
      await productServices.updateSingleProduct(productId, updatedData);
      res.status(200).json({
        success: true,
        message: 'Product updated successfully!',
        data: updatedData,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: 'Invalid product ID',
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

const deleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    if (mongoose.Types.ObjectId.isValid(productId)) {
      const result = await productServices.deleteSingleProduct(productId);
      res.status(200).json({
        success: true,
        message: 'Product deleted successfully!',
        result: result,
        data: null,
      });
    } else {
      return res.status(400).json({
        success: false,
        massage: 'Invalid product ID',
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err.massage,
    });
  }
};

export const productControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  deleteSingleProduct,
  updateSingleProduct,
};
