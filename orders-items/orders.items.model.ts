import * as mongoose from 'mongoose'
import { Product } from '../products/products.model';
import { Order } from '../orders/orders.model';

export interface OrderItem extends mongoose.Document {
    product: mongoose.Types.ObjectId | Product
    order: mongoose.Types.ObjectId | Order
    quantity: number
    valueUnitary: Number
    valueTotal: Number
}

const orderItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    valueUnitary: {
        type: Number,
        required: true
    },
    valueTotal: {
        type: Number,
        required: true
    }
})

export const OrderItem = mongoose.model<OrderItem>('OrderItem', orderItemSchema)
