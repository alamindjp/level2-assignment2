"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const product_routes_1 = require("./modules/products/product.routes");
const order_routes_1 = require("./modules/orders/order.routes");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/products', product_routes_1.ProductRoutes);
app.use('/api/orders', order_routes_1.OrderRoutes);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found',
    });
});
exports.default = app;
