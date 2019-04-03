import * as mongoose from 'mongoose'
import { Client } from '../clients/clients.model';

export interface Order extends mongoose.Document {
  number: Number
  date: Date
  client: mongoose.Types.ObjectId | Client,
  value: Number  
}

const orderSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: true
  }, 
  date: {
    type: Date,
    required: true
  }, 
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    required: true
  },
  value: {
    type: Number,
    required: true    
  }
  
})

export const Order = mongoose.model<Order>('Order', orderSchema)
