import { isValidObjectId, Model, UpdateQuery } from 'mongoose';
import { ErrorTypes } from '../errors/catalog';
import { IModel } from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
  protected _model:Model<T>;

  constructor(model:Model<T>) {
    this._model = model;
  }

  public async create(obj:T):Promise<T> {
    return this._model.create({ ...obj });
  }

  public async read(): Promise<T[]> {
    return this._model.find({});
  }

  public async readOne(generecString:string):Promise<T | null> {
    if (!isValidObjectId(generecString)) throw Error(ErrorTypes.InvalidMongoId);

    return this._model.findOne({ _id: generecString });
  }

  public async update(generecString:string, obj:Partial<T>):Promise<T | null> {
    if (!isValidObjectId(generecString)) throw Error(ErrorTypes.InvalidMongoId);
    
    return this._model.findByIdAndUpdate(
      { _id: generecString },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
  }

  public async delete(generecString: string): Promise<T | null> {
    return this._model.findByIdAndDelete(generecString);
  }
}

export default MongoModel;
