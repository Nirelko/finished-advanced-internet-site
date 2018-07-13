import mongoose from 'mongoose';
import { createSeedModel } from 'mongoose-plugin-seed';
import seed from './review.seed';
import mongoosePaginate from 'mongoose-paginate';

const { Schema } = mongoose;

export const categories = ['Electronics', 'Technology', 'Programming', 'Cars', 'Home'];

const ReviewSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: categories,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

ReviewSchema.plugin(mongoosePaginate);

export default createSeedModel('Review', ReviewSchema, seed);