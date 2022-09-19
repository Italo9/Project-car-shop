import { Request, Response } from 'express';
import { IService } from '../interfaces/IService';
import { IMotorcycle } from '../interfaces/IMotorcycle';

export default class MotorcyclesController {
  constructor(private _service: IService<IMotorcycle>) { }

  public async create(
    req: Request & { body: IMotorcycle },
    res: Response<IMotorcycle>,
  ) {
    const { model, year, color, buyValue, category, engineCapacity } = req.body;
    const motorcycles = { model, year, color, buyValue, category, engineCapacity };
    const results = await this._service.create(motorcycles);
    return res.status(201).json(results);
  }

  public async read(
    req: Request,
    res: Response<IMotorcycle[]>,
  ) {
    const result = await this._service.read();
    return res.status(200).json(result);
  }

  public async readOne(
    req: Request,
    res: Response<IMotorcycle>,
  ) {
    const result = await this._service.readOne(req.params.id);
    return res.status(200).json(result as IMotorcycle);
  }

  public async update(
    req: Request,
    res: Response<IMotorcycle | null>,
  ) {
    const result = await this._service.update(req.params.id, req.body);
    return res.status(200).json(result);
  }

  public async delete(
    req: Request,
    res: Response<IMotorcycle | null>,
  ) {
    await this._service.delete(req.params.id);
    return res.status(204).end();
  }
}
