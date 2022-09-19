import { expect } from 'chai';
import * as sinon from 'sinon';
import { NextFunction, Request, Response } from 'express';
import { motorcycleMock, motorcycleMockWithId } from '../mocks/motorcyclesMock';
import MotorcyclesController from '../../../controllers/Motorcycles';
import MotorcyclesService from '../../../services/Motorcycles';
import MotorcyclesModel from '../../../models/Motorcycles';


describe('Mothorcycle Controller', () => {
  const mothorcycleModel = new MotorcyclesModel()
  const mothorcycleService = new MotorcyclesService(mothorcycleModel);
  const mothorcycleController = new MotorcyclesController(mothorcycleService);
  const req = {} as Request;
  const res = {} as Response;

  before(() => {
    sinon.stub(mothorcycleService, 'create').resolves(motorcycleMock);
    sinon.stub(mothorcycleService, 'read').resolves([motorcycleMock]);
    sinon.stub(mothorcycleService, 'readOne').resolves(motorcycleMock);
    sinon.stub(mothorcycleService, 'update').resolves(motorcycleMock);
    sinon.stub(mothorcycleService, 'delete').resolves(motorcycleMock);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    res.end = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore()
  })

  describe('Create Mothorcycle', () => {
    it('Success', async () => {
      req.body = motorcycleMock;
      await mothorcycleController.create(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motorcycleMock)).to.be.true;
    });
  });

  describe('Read Mothorcycle', () => {
    it('Success', async () => {
      req.params = { id: motorcycleMockWithId._id };
      await mothorcycleController.read(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith([motorcycleMock])).to.be.true;
    });
  });

  describe('ReadOne Mothorcycle', () => {
    it('Success', async () => {
      req.params = { id: motorcycleMockWithId._id };
      await mothorcycleController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motorcycleMock)).to.be.true;
    });
  });

  describe('Update Mothorcycle', () => {
    it('Success', async () => {
      req.params = { id: motorcycleMockWithId._id };
      req.body = motorcycleMock;
      await mothorcycleController.update(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motorcycleMock)).to.be.true;
    });
  });

  describe('Delete Mothorcycle', () => {
    it('Success', async () => {
      req.params = { id: motorcycleMockWithId._id };
      await mothorcycleController.delete(req, res);

      expect((res.status as sinon.SinonStub).calledWith(204)).to.be.true;
    });
  });

});