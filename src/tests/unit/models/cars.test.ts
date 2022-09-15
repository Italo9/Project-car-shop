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
	
});
