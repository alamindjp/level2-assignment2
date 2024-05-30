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
exports.productControllers = void 0;
const product_service_1 = require("./product.service");
const mongoose_1 = __importDefault(require("mongoose"));
const product_validation_1 = __importDefault(require("./product.validation"));
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        const zodValidationData = product_validation_1.default.parse(productData);
        const result = yield product_service_1.productServices.createProduct(zodValidationData);
        res.status(200).json({
            success: true,
            message: 'Product created successfully!',
            data: result,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Products don't created successful!",
            error: err,
        });
    }
});
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.searchTerm;
        if (searchTerm) {
            const result = yield product_service_1.productServices.getAllProducts(searchTerm);
            if (Array.isArray(result) && result.length > 0) {
                res.status(200).json({
                    success: true,
                    message: `Products matching search term '${searchTerm}' fetched successfully!`,
                    data: result,
                });
            }
            else {
                res.status(400).json({
                    success: false,
                    message: `Products matching search term '${searchTerm}' not found`,
                    data: result,
                });
            }
        }
        else {
            const result = yield product_service_1.productServices.getAllProducts(searchTerm);
            res.status(200).json({
                success: true,
                message: 'Products fetched successfully!',
                data: result,
            });
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: err,
        });
    }
});
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        if (mongoose_1.default.Types.ObjectId.isValid(productId)) {
            const result = yield product_service_1.productServices.getSingleProduct(productId);
            res.status(200).json({
                success: true,
                message: 'Product fetched successfully!',
                data: result,
            });
        }
        else {
            return res.status(400).json({
                success: false,
                massage: 'Invalid product ID',
            });
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: err,
        });
    }
});
const updateSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const updatedData = req.body;
        if (mongoose_1.default.Types.ObjectId.isValid(productId)) {
            yield product_service_1.productServices.updateSingleProduct(productId, updatedData);
            res.status(200).json({
                success: true,
                message: 'Product updated successfully!',
                data: updatedData,
            });
        }
        else {
            return res.status(400).json({
                success: false,
                message: 'Invalid product ID',
            });
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: err,
        });
    }
});
const deleteSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        if (mongoose_1.default.Types.ObjectId.isValid(productId)) {
            const result = yield product_service_1.productServices.deleteSingleProduct(productId);
            res.status(200).json({
                success: true,
                message: 'Product deleted successfully!',
                result: result,
                data: null,
            });
        }
        else {
            return res.status(400).json({
                success: false,
                massage: 'Invalid product ID',
            });
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: err.massage,
        });
    }
});
exports.productControllers = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    deleteSingleProduct,
    updateSingleProduct,
};
