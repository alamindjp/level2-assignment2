"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderControllers = void 0;
const order_services_1 = require("./order.services");
const order_validation_1 = __importDefault(require("./order.validation"));
const mongoose_1 = __importDefault(require("mongoose"));
const product_service_1 = require("../products/product.service");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body;
        const { productId } = req.body;
        const { quantity } = req.body;
        const getOrderingProduct = yield product_service_1.productServices.getSingleProduct(productId);
        const inStock = getOrderingProduct === null || getOrderingProduct === void 0 ? void 0 : getOrderingProduct.inventory.inStock;
        const stockQuantity = getOrderingProduct === null || getOrderingProduct === void 0 ? void 0 : getOrderingProduct.inventory.quantity;
        if (mongoose_1.default.Types.ObjectId.isValid(productId)) {
            if (inStock) {
                if (stockQuantity >= quantity) {
                    const validOrderData = order_validation_1.default.parse(orderData);
                    const result = yield order_services_1.orderServices.createOrder(validOrderData);
                    const updateProductQuantity = stockQuantity - quantity;
                    yield product_service_1.productServices.updateField(productId, updateProductQuantity);
                    res.status(200).json({
                        success: true,
                        message: 'Order created successfully!',
                        data: result,
                    });
                }
                else {
                    res.status(200).json({
                        success: false,
                        message: 'Insufficient quantity available in inventory',
                        data: null,
                    });
                }
            }
            else {
                res.status(500).json({
                    success: false,
                    message: 'Ordering products is stock out',
                    data: null,
                });
            }
        }
        else {
            yield product_service_1.productServices.getSingleProduct(productId);
            res.status(500).json({
                success: false,
                message: 'Product not found!',
                data: null,
            });
        }
        // const orderData = req.body;
        // const validOrderData = zodValidationOrder.parse(orderData);
        // const result = await orderServices.createOrder(validOrderData);
        // res.status(200).json({
        //   success: true,
        //   message: 'Order created successfully!',
        //   data: result,
        // });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: err.massage,
        });
    }
});
const getAllOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.query;
        // console.log(req.query);
        if (req.query) {
            const result = yield order_services_1.orderServices.getAllOrder(email);
            return res.status(400).json({
                success: true,
                message: `Orders fetched successfully for user email: ${email}!`,
                data: result,
            });
        }
        else {
            const result = yield order_services_1.orderServices.getAllOrder(email);
            return res.status(400).json({
                success: true,
                message: `Orders fetched successfully!`,
                data: result,
            });
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'Orders not found',
            error: err.massage,
        });
    }
});
const getSingleOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { orderId } = req.params;
        if (mongoose_1.default.Types.ObjectId.isValid(orderId)) {
            const result = yield order_services_1.orderServices.getSingleOrder(orderId);
            res.status(200).json({
                success: true,
                message: 'Order fetched successfully!',
                data: result,
            });
        }
        else {
            res.status(400).json({
                success: false,
                massage: 'Invalid order ID',
            });
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'Order not found',
            error: err,
        });
    }
});
exports.orderControllers = {
    createOrder,
    getAllOrder,
    getSingleOrder,
};
