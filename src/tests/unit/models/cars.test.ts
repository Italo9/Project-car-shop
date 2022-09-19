import { expect } from 'chai';
import sinon from 'sinon';
import CarsModel from '../../../models/Cars';
import { Model } from 'mongoose';
import {
	carMock,
	carMockWithId,
} from '../mocks/carMock';
import { ErrorTypes } from '../../../errors/catalog';

describe('Car Model', () => {
	const carModel = new CarsModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(carMockWithId);
		sinon.stub(Model, 'find').resolves([carMockWithId]);
		sinon.stub(Model, 'findOne').resolves(carMockWithId);
		sinon.stub(Model, 'findByIdAndUpdate').resolves(carMockWithId);
		sinon.stub(Model, 'findByIdAndDelete').resolves(carMockWithId);
	});

	after(() => {
		sinon.restore();
	})

	describe('creating a car', () => {
		it('successfully created', async () => {
			const newCar = await carModel.create(carMock);
			expect(newCar).to.be.deep.equal(carMockWithId);
		});
	});

	describe('searching a car', () => {
		it('successfully found', async () => {
			const carFound = await carModel.readOne('62cf1fc6498565d94eba52cd');
			expect(carFound).to.be.deep.equal(carMockWithId);
		});

		it('_id not found', async () => {
			try {
				await carModel.readOne('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq(ErrorTypes.InvalidMongoId);
			}
		});
	});

	describe('taking all the cars', () => {
		it('successfully found', async () => {
			const cars = await carModel.read();
			expect(cars).to.be.deep.equal([carMockWithId]);
		});
	});
	
	describe('changing a car', () => {
		it('successfully changed', async () => {
			const carChanged = await carModel.update('62cf1fc6498565d94eba52cd', carMockWithId);
			expect(carChanged).to.be.deep.equal(carMockWithId);
		});
	
		it('_id not found to change', async () => {
			try {
				await carModel.update('123ERRADO', carMockWithId);
			} catch (error:any) {
				expect(error.message).to.be.eq(ErrorTypes.InvalidMongoId);
			}
		});
		it('', async () => {
			try {
				await carModel.update('123ERRADO', carMockWithId);
			} catch (error:any) {
				expect(error.message).to.be.eq(ErrorTypes.InvalidMongoId);
			}
		});
	});

	describe('Delete a car', () => {
		it('successfully changed', async () => {
			const carChanged = await carModel.delete('62cf1fc6498565d94eba52cd');
			expect(carChanged).to.be.deep.equal(carMockWithId);
		});
	
		it('_id not found to change', async () => {
			try {
				await carModel.delete('123ERRADO');
			} catch (error:any) {
				expect(error.message).to.be.eq(ErrorTypes.InvalidMongoId);
			}
		});
	});
	
});
