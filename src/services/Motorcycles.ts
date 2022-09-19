import { IService } from '../interfaces/IService';
import { IMotorcycle, MotorcycleZodSchema } from '../interfaces/IMotorcycle';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

class MotorcyclesService implements IService<IMotorcycle> {
  private _motorcycles: IModel<IMotorcycle>;

  constructor(model: IModel<IMotorcycle>) {
    this._motorcycles = model;
  }

  public async create(obj: IMotorcycle): Promise<IMotorcycle> {
    const parsed = MotorcycleZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this._motorcycles.create(obj);
  }

  public async read(): Promise<IMotorcycle[]> {
    const motorcycles = await this._motorcycles.read();
    return motorcycles;
  }

  public async readOne(generecString: string): Promise<IMotorcycle> {
    const motorcycle = await this._motorcycles.readOne(generecString);
    if (!motorcycle) throw new Error(ErrorTypes.ErrorNotFound);
    return motorcycle;
  }

  public async update(generecString: string, obj: IMotorcycle): Promise<IMotorcycle | null> {
    const parsed = MotorcycleZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    const motorcycle = await this._motorcycles.readOne(generecString);
    if (!motorcycle) throw new Error(ErrorTypes.ErrorNotFound);
    await this._motorcycles.readOne(generecString);
    return this._motorcycles.update(generecString, obj);
  }

  public async delete(generecString: string): Promise< IMotorcycle | null> {
    const motorcycle = await this._motorcycles.readOne(generecString);
    if (!motorcycle) throw new Error(ErrorTypes.ErrorNotFound);
   
    return this._motorcycles.delete(generecString);
  }
}

export default MotorcyclesService;
