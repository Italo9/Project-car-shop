export interface IModel<T> {
  create(obj:T):Promise<T>,
  read(): Promise<T[]>,
  readOne(generecString:string):Promise<T | null>,
  update(generecString:string, obj:T):Promise<T | null>,
  delete(generecString: string): Promise<T | null>
}
