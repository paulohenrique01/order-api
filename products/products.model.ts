import * as mongoose from 'mongoose'

export interface Product extends mongoose.Document {
  description: string    
}

const productSchema = new mongoose.Schema({  
    comments: {
      type: String,
      required: true,
      maxlength: 100
    }   
  })
  
  
  export const Product = mongoose.model<Product>('Product', productSchema)