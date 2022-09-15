export enum ErrorTypes {
  ErrorNotFound = 'ErrorNotFound',
  InvalidMongoId = 'InvalidMongoId',
}
  
  type ErrorResponseObject = {
    error: string;
    httpStatus: number
  };
  
export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObject
};
  
export const errorCatalog: ErrorCatalog = {
  ErrorNotFound: {
    error: 'Object not found',
    httpStatus: 404,
  },
  InvalidMongoId: {
    error: 'Id must have 24 hexadecimal characters',
    httpStatus: 400,
  },
};
