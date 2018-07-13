import mongoose from 'mongoose';
import { createSeedModel } from 'mongoose-plugin-seed';
import seed from './map.seed';
import mongoosePaginate from 'mongoose-paginate';

const { Schema } = mongoose;

const MapSchema = new Schema({
  latitude: {
    type: Number,
    required: true
  },
  longtitude: {
    type: Number,
    required: true
  }
});

MapSchema.plugin(mongoosePaginate);

export default createSeedModel('Map', MapSchema, seed);