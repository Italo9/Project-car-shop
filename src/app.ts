import 'express-async-errors';
import express from 'express';
import carsRouter from './routes/carsRouter';
import errorHandler from './middlewares/error';

const app = express();
app.use(express.json());
app.use(carsRouter);
app.use(errorHandler);

export default app;
