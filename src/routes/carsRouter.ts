import { Router, Request, Response } from 'express';
import CarsController from '../controllers/Cars';
import CarsModel from '../models/Cars';
import CarsService from '../services/Cars';

const route = Router();

const cars = new CarsModel();
const carsService = new CarsService(cars);
const carsController = new CarsController(carsService);

route.post('/cars', (req: Request, res: Response) =>
  carsController.create(req, res));
route.get('/cars', (req: Request, res: Response) =>
  carsController.read(req, res));
route.get('/cars/:id', (req: Request, res: Response) =>
  carsController.readOne(req, res));
route.put('/cars/:id', (req: Request, res: Response) =>
  carsController.update(req, res));

export default route;
