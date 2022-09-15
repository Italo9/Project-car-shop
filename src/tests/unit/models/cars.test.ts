import { expect } from 'chai';
import sinon from 'sinon';
import CarsModel from '../../../models/Cars';
import { Model } from 'mongoose';
import {
	carMock,
	carMockWithId,
	// carMockForChange,
	// carMockForChangeWithId,
} from '../mocks/carMock';
import { ErrorTypes } from '../../../errors/catalog';

describe('Car Model', () => {
	const carModel = new CarsModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(carMockWithId);
		// sinon.stub(Model, 'findOne').resolves(carMockWithId);
		// sinon.stub(Model, 'findByIdAndUpdate').resolves(carMockForChangeWithId);
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

	// describe('searching a car', () => {
	// 	it('successfully found', async () => {
	// 		const carFound = await carModel.readOne('62cf1fc6498565d94eba52cd');
	// 		expect(carFound).to.be.deep.equal(carMockWithId);
	// 	});

	// 	it('_id not found', async () => {
	// 		try {
	// 			await carModel.readOne('123ERRADO');
	// 		} catch (error: any) {
	// 			expect(error.message).to.be.eq(ErrorTypes.InvalidMongoId);
	// 		}
	// 	});
	// });
	
	// describe('changing a car', () => {
	// 	it('successfully changed', async () => {
	// 		const carChanged = await carModel.update('62cf1fc6498565d94eba52cd', carMockForChange);
	// 		expect(carChanged).to.be.deep.equal(carMockForChangeWithId);
	// 	});
	
		// it('_id not found to change', async () => {
		// 	try {
		// 		await carModel.update('123ERRADO', carMockForChange);
		// 	} catch (error:any) {
		// 		expect(error.message).to.be.eq(ErrorTypes.InvalidMongoId);
		// 	}
		// });
	// });
	
});
