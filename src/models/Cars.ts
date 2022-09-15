import { number, string } from 'joi';
import { model as mongooseCreateModel, Schema } from 'mongoose';
import { boolean } from 'zod';
import { ICar } from '../interfaces/ICar';
import MongoModel from './MongoModel';

const frameMongooseSchema = new Schema<ICar>({
  model: string,
  year: number,
  color: string,
  status: boolean,
  buyValue: number, 
  doorsQty: number,
  seatsQty: number,
});

class Car extends MongoModel<ICar> {
  constructor(model = mongooseCreateModel('Frame', frameMongooseSchema)) {
    super(model);
  }
}

export default Car;