import { Router, Request, Response } from 'express';
import CreateMotorcyclesControllerFactory from '../factories/CreateMotorcyclesControllerFactory';

const route = Router();

const motorcyclesController = CreateMotorcyclesControllerFactory.make();

const MOTORCYCLE_URL = '/motorcycles';
route.post(MOTORCYCLE_URL, (req: Request, res: Response) =>
  motorcyclesController.create(req, res));
route.get(MOTORCYCLE_URL, (req: Request, res: Response) =>
  motorcyclesController.read(req, res));
route.get(`${MOTORCYCLE_URL}/:id`, (req: Request, res: Response) =>
  motorcyclesController.readOne(req, res));
route.put(`${MOTORCYCLE_URL}/:id`, (req: Request, res: Response) =>
  motorcyclesController.update(req, res));
route.delete(`${MOTORCYCLE_URL}/:id`, (req: Request, res: Response) =>
  motorcyclesController.delete(req, res));

export default route;
