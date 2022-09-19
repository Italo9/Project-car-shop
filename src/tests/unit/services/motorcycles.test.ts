import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import MotorcycleModel from '../../../models/Motorcycles';
import MotorcycleService from '../../../services/Motorcycles';
import { motorcycleMock, motorcycleMockWithId, } from '../mocks/motorcyclesMock';

describe('Motorcycle Service', () => {
	const motorcycleModel = new MotorcycleModel();
	const motorcycleService = new MotorcycleService(motorcycleModel);

	before(() => {
		sinon.stub(motorcycleModel, 'create').resolves(motorcycleMockWithId);
		sinon.stub(motorcycleModel, 'read').resolves([motorcycleMockWithId]);
		sinon.stub(motorcycleModel, 'readOne')
			.onCall(0).resolves(motorcycleMockWithId)
			.onCall(1).resolves(null)
			.onCall(2).resolves(null)
			.onCall(3).resolves(motorcycleMockWithId)
			.onCall(4).resolves(null)
			.onCall(5).resolves(null)
			.onCall(6).resolves(motorcycleMockWithId)
			.onCall(7).resolves(null)
		sinon.stub(motorcycleModel, 'update').resolves(motorcycleMockWithId)
		sinon.stub(motorcycleModel, 'delete').resolves(null)
		
	});

	after(() => {
		sinon.restore()
	});

	describe('Create Motorcycle', () => {
		it('Success', async () => {
			const motorcycleCreated = await motorcycleService.create(motorcycleMock);
			expect(motorcycleCreated).to.be.deep.equal(motorcycleMockWithId);
		});

		it('Failure', async () => {
			try {
				await motorcycleService.create({} as any);
			} catch (error) {
				expect(error).to.be.instanceOf(ZodError);
			}
		});
	});


	describe('Read Motorcycle', () => {
		it('Success', async () => {
			const motorcyclesCreated = await motorcycleService.read();

			expect(motorcyclesCreated).to.be.deep.equal([motorcycleMockWithId]);
		});

		it('Failure', async () => {
			try {
				await motorcycleService.read();
			} catch (error: any) {
				expect(error.message).to.be.deep.equal(ErrorTypes.ErrorNotFound);
			}
		});
	});


	describe('ReadOne Motorcycle', () => {
		it('Success', async () => {
			const motorcycleCreated = await motorcycleService.readOne(motorcycleMockWithId._id);

			expect(motorcycleCreated).to.be.deep.equal(motorcycleMockWithId);
		});

		it('Failure', async () => {
			try {
				await motorcycleService.readOne('62cf1fc6498565d94eba52cderro');
			} catch (error: any) {
				expect(error.message).to.be.deep.equal(ErrorTypes.ErrorNotFound);
			}
		});

		it('Failure readOne Model', async () => {
			try {
				await motorcycleService.readOne(motorcycleMockWithId._id);
			} catch (error: any) {
				expect(error.message).to.be.deep.equal(ErrorTypes.ErrorNotFound);
			}
		});
	});

	describe('Update Motorcycle', () => {
		it('Success', async () => {
			const motorcycle = await motorcycleService.update('62cf1fc6498565d94eba52cd', motorcycleMock);
			expect(motorcycle).to.be.deep.equal(motorcycleMockWithId);
		});

		it('Failure safeParse', async () => {
			try {
				await motorcycleService.update('62cf1fc6498565d94eba52cderro', {} as any);
			} catch (error: any) {
				expect(error).instanceOf(ZodError);
			}
		});
		it('Failure', async () => {
			try {
				await motorcycleService.update('62cf1fc6498565d94eba52cderro', motorcycleMockWithId);
			} catch (error: any) {
				expect(error.message).to.be.deep.equal(ErrorTypes.ErrorNotFound);
			}
		});

	});

	describe('Delete Motorcycle', async () => {
		it('Success', async () => {
			const motorcycle = await motorcycleService.delete(motorcycleMockWithId._id);
			expect(motorcycle).to.be.null;
		});
		
		it('Failure', async () => {
			try {
				await motorcycleService.delete('62cf1fc6498565d94eba52cderro41541541854854errou');
			} catch (error: any) {
				expect(error.message).to.be.deep.equal(ErrorTypes.ErrorNotFound);
			}
		});


	});
});