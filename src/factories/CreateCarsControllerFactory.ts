import CarsController from '../controllers/Cars';
import CarsModel from '../models/Cars';
import CarsService from '../services/Cars';

export default class CreateCarsControllerFactory {
  static make() {
    const carsRepository = new CarsModel();
    const carsService = new CarsService(carsRepository);
    const carsController = new CarsController(carsService);

    return carsController;
  }
}