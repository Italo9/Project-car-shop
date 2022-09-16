import MotorcyclesController from '../controllers/Motorcycles';
import MotorcyclesModel from '../models/Motorcycles';
import MotorcyclesService from '../services/Motorcycles';

export default class CreateMotorcyclesControllerFactory {
  static make() {
    const motorcyclesRepository = new MotorcyclesModel();
    const motorcyclesService = new MotorcyclesService(motorcyclesRepository);
    const motorcyclesController = new MotorcyclesController(motorcyclesService);
    return motorcyclesController;
  }
}