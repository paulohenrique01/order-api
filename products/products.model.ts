import * as mongoose from 'mongoose'

export interface Product extends mongoose.Document {
  description: string
  price: Number    
}

const productSchema = new mongoose.Schema({  
    description: {
      type: String,
      required: true,
      maxlength: 100
    },
    price: {
      type: Number,
      required: true    
    }     
  })
  
  
  export const Product = mongoose.model<Product>('Product', productSchema)