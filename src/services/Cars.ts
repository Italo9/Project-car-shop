import IService from '../interfaces/IService';
import IFrame, { FrameZodSchema } from '../interfaces/Frame';
import IModel from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

class CarsService implements IService<IFrame> {
  private _frame: IModel<IFrame>;

  constructor(model: IModel<IFrame>) {
    this._frame = model;
  }

  public async create(obj: IFrame): Promise<IFrame> {
    const parsed = FrameZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this._frame.create(obj);
  }
}

export default CarsService;
