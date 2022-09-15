import { IService } from '../interfaces/IService';
import { ICar, CarZodSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

class CarsService implements IService<ICar> {
  private _car: IModel<ICar>;

  constructor(model: IModel<ICar>) {
    this._car = model;
  }

  public async create(obj: ICar): Promise<ICar> {
    const parsed = CarZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this._car.create(obj);
  }

  public async read(): Promise<ICar[]> {
    const cars = await this._car.read();
    return cars;
  }

  public async readOne(generecString: string): Promise<ICar> {
    const car = await this._car.readOne(generecString);
    if (!car) throw new Error(ErrorTypes.ErrorNotFound);
    return car;
  }

  public async update(generecString: string, obj: ICar): Promise<ICar | null> {
    const parsed = CarZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    await this.readOne(generecString);
    return this._car.update(generecString, obj);
  }

  public async delete(generecString: string): Promise< ICar | null> {
    return this.delete(generecString);
  }
}

export default CarsService;
