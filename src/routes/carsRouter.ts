import { Router, Request, Response } from 'express';
import CreateCarsControllerFactory from '../factories/CreateCarsControllerFactory';

const route = Router();

const carsController = CreateCarsControllerFactory.make();

route.post('/cars', (req: Request, res: Response) =>
  carsController.create(req, res));
route.get('/cars', (req: Request, res: Response) =>
  carsController.read(req, res));
route.get('/cars/:id', (req: Request, res: Response) =>
  carsController.readOne(req, res));
route.put('/cars/:id', (req: Request, res: Response) =>
  carsController.update(req, res));
route.delete('/cars/:id', (req: Request, res: Response) =>
  carsController.delete(req, res));

export default route;
