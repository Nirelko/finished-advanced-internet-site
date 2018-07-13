import mongoose from 'mongoose';
import { createSeedModel } from 'mongoose-plugin-seed';
import mongoosePaginate from 'mongoose-paginate';

import seed from './review.seed';
import categories from '../../../common/consts/categories';

const { Schema } = mongoose;

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