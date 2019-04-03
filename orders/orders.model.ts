import * as mongoose from 'mongoose'

export interface Order extends mongoose.Document {
  date: Date,
  value: number
  
}

const reviewSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  comments: {
    type: String,
    required: true,
    maxlength: 500
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true
  }
})


export const Review = mongoose.model<Review>('Review', reviewSchema)
