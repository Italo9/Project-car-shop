import { IMotorcycle } from '../../../interfaces/IMotorcycle';

const motorcycleMock:IMotorcycle = {
        model: "Honda CG Titan 125",
        year: 1963,
        color: "red",
        buyValue: 3500,
        category: "Street",
        engineCapacity: 125,
    
};

const motorcycleMockWithId:IMotorcycle & { _id:string } = {
    _id: "6324765b6634499c3f6e6a10",
    model: "Honda CG Titan 125",
    year: 1963,
    color: "red",
    buyValue: 3500,
    category: "Street",
    engineCapacity: 125,
};


export {
	motorcycleMock,
	motorcycleMockWithId,
};
