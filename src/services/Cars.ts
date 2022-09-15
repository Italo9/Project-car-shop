import { IService } from '../interfaces/IService';
import { ICar, CarZodSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
// import { ErrorTypes } from '../errors/catalog';

class CarsService implements IService<ICar> {
  private _frame: IModel<ICar>;

  constructor(model: IModel<ICar>) {
    this._frame = model;
  }

  public async create(obj: ICar): Promise<ICar> {
    const parsed = CarZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this._frame.create(obj);
  }
}

export default CarsService;
