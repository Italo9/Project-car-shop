import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import CarModel from '../../../models/Cars';
import CarService from '../../../services/Cars';
import { carMock, carMockWithId } from '../mocks/carMock';

describe('Car Service', () => {
	const carModel = new CarModel();
	const carService = new CarService(carModel);

	before(() => {
		sinon.stub(carModel, 'create').resolves(carMockWithId);
		sinon.stub(carModel, 'read').resolves([carMockWithId]);
		sinon.stub(carModel, 'readOne')
			.onCall(0).resolves(carMockWithId)
			.onCall(1).resolves(null)
			.onCall(2).resolves(null)
			.onCall(3).resolves(carMockWithId)
			.onCall(4).resolves(null)
			.onCall(5).resolves(carMockWithId)
			.onCall(6).resolves(carMockWithId)
			.onCall(7).resolves(null)
		sinon.stub(carModel, 'update').resolves(carMockWithId)
		sinon.stub(carModel, 'delete').resolves(null)
	});

	after(() => {
		sinon.restore()
	});

	describe('Create Car', () => {
		it('Success', async () => {
			const carCreated = await carService.create(carMock);

			expect(carCreated).to.be.deep.equal(carMockWithId);
		});

		it('Failure', async () => {
			try {
				await carService.create({} as any);
			} catch (error) {
				expect(error).to.be.instanceOf(ZodError);
			}
		});
	});

	describe('Read Car', () => {
		it('Success', async () => {
			const carsCreated = await carService.read();

			expect(carsCreated).to.be.deep.equal([carMockWithId]);
		});

		it('Failure', async () => {
			try {
				await carService.read();
			} catch (error: any) {
				expect(error.message).to.be.deep.equal(ErrorTypes.ErrorNotFound);
			}
		});
	});

	describe('ReadOne Car', () => {
		it('Success', async () => {
			const carCreated = await carService.readOne(carMockWithId._id);

			expect(carCreated).to.be.deep.equal(carMockWithId);
		});

		it('Failure', async () => {
			try {
				await carService.readOne('62cf1fc6498565d94eba52cderro');
			} catch (error: any) {
				expect(error.message).to.be.deep.equal(ErrorTypes.ErrorNotFound);
			}
		});

		it('Failure readOne Model', async () => {
			try {
				await carService.readOne(carMockWithId._id);
			} catch (error: any) {
				expect(error.message).to.be.deep.equal(ErrorTypes.ErrorNotFound);
			}
		});
	});

	describe('Update Car', () => {
		it('Success', async () => {
			const cars = await carService.update('62cf1fc6498565d94eba52cd', carMock);
			expect(cars).to.be.deep.equal(carMockWithId);
		});
		
		it('Failure safeParse', async () => {
			try {
				await carService.update('62cf1fc6498565d94eba52cderro', {} as any);
			} catch (error: any) {
				expect(error).instanceOf(ZodError);
			}
		});

		it('Failure', async () => {
			try {
				await carService.update('62cf1fc6498565d94eba52cderro', carMock);
			} catch (error: any) {
				expect(error.message).to.be.deep.equal(ErrorTypes.ErrorNotFound);
			}
		});

	});

	describe('Delete Car', async () => {

		it('Success', async () => {
			const car = await carService.delete(carMockWithId._id);
			expect(car).to.be.null;
		});

		it('Failure', async () => {
			try {
				await carService.delete('62cf1fc6498565d94eba52cderro41541541854854');
			} catch (error: any) {
				expect(error.message).to.be.deep.equal(ErrorTypes.ErrorNotFound);
			}
		});

	});

});