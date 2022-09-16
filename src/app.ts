import 'express-async-errors';
import express from 'express';
import carsRouter from './routes/carsRouter';
import errorHandler from './middlewares/error';
import motorcyclesRouter from './routes/motorcyclesRouter';

const app = express();
app.use(express.json());
app.use(carsRouter);
app.use(motorcyclesRouter);
app.use(errorHandler);

export default app;
