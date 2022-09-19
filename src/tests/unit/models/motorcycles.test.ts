import { expect } from 'chai';
import sinon from 'sinon';
import MotorcyclesModel from '../../../models/Motorcycles';
import { Model } from 'mongoose';
import {
	 motorcycleMock,
     motorcycleMockWithId,
} from '../mocks/motorcyclesMock';
import { ErrorTypes } from '../../../errors/catalog';

describe('Motorcycle Model', () => {
	const motorcycleModel = new MotorcyclesModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(motorcycleMockWithId);
		sinon.stub(Model, 'find').resolves([motorcycleMockWithId]);
		sinon.stub(Model, 'findOne').resolves(motorcycleMockWithId);
		sinon.stub(Model, 'findByIdAndUpdate').resolves(motorcycleMockWithId);
		sinon.stub(Model, 'findByIdAndDelete').resolves(motorcycleMockWithId);
	});

	after(() => {
		sinon.restore();
	})

	describe('creating a Motorcycle', () => {
		it('successfully created', async () => {
			const newMotorcycle = await motorcycleModel.create(motorcycleMock);
			expect(newMotorcycle).to.be.deep.equal(motorcycleMockWithId);
		});
	});


	describe('searching a Motorcycle', () => {
		it('successfully found', async () => {
			const motorcycleFound = await motorcycleModel.readOne('62cf1fc6498565d94eba52cd');
			expect(motorcycleFound).to.be.deep.equal(motorcycleMockWithId);
		});

		it('_id not found', async () => {
			try {
				await motorcycleModel.readOne('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq(ErrorTypes.InvalidMongoId);
			}
		});
	});

	describe('taking all the Motorcycle', () => {
		it('successfully found', async () => {
			const cars = await motorcycleModel.read();
			expect(cars).to.be.deep.equal([motorcycleMockWithId]);
		});
	});
	
	describe('changing a Motorcycle', () => {
		it('successfully changed', async () => {
			const carChanged = await motorcycleModel.update('62cf1fc6498565d94eba52cd', motorcycleMockWithId);
			expect(carChanged).to.be.deep.equal(motorcycleMockWithId);
		});
	
		it('_id not found to change', async () => {
			try {
				await motorcycleModel.update('123ERRADO', motorcycleMockWithId);
			} catch (error:any) {
				expect(error.message).to.be.eq(ErrorTypes.InvalidMongoId);
			}
		});
	});

	describe('Delete a Motorcycle', () => {
		it('successfully changed', async () => {
			const carChanged = await motorcycleModel.delete('62cf1fc6498565d94eba52cd');
			expect(carChanged).to.be.deep.equal(motorcycleMockWithId);
		});
	
		it('_id not found to change', async () => {
			try {
				await motorcycleModel.delete('123ERRADO');
			} catch (error:any) {
				expect(error.message).to.be.eq(ErrorTypes.InvalidMongoId);
			}
		});
	});

});
