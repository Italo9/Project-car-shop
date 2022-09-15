import { ICar } from '../../../interfaces/ICar';

const carMock:ICar = {
        model: "Ferrari Maranello",
        year: 1963,
        color: "red",
        buyValue: 3500000,
        doorsQty: 2,
        seatsQty: 2,
    
};

const carMockWithId:ICar & { _id:string } = {
    _id: "632332a4f16fdd1e4ad6b315",
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    doorsQty: 2,
    seatsQty: 2
};

// const carMockForChange:ICar = {
// 	material: 'Ouro com adamantium',
// 	color: 'ouro brilhante',
// };

// const carMockForChangeWithId:ICar & { _id:string } = {
// 	_id: '62cf1fc6498565d94eba52cd',
// 	material: 'Ouro com adamantium',
// 	color: 'ouro brilhante',
// };

export {
	carMock,
	carMockWithId,
	// carMockForChange,
	// carMockForChangeWithId,
};
