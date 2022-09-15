import { Request, Response } from 'express';
// import IService from '../interfaces/IService';
// import IFrame from '../interfaces/Frame';

export default class CarsController {
  constructor(private _service: IService<IFrame>) { }

  public async create(
    // Unimos o tipo do _request_ com um objeto que tem chave `body` com o valor de um IFrame
    // assim conseguimos extrair as propriedades da armação para passá-las para o _service_
    req: Request & { body: IFrame },
    // Usamos o IFrame como parâmetro genérico do Request
    // para declarar que vamos responder a requisição com um objeto do tipo IFrame
    res: Response<IFrame>,
  ) {
    const { material, color } = req.body;
    const frame = { material, color };
    const results = await this._service.create(frame);
    return res.status(201).json(results);
  }
}
