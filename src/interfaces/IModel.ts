export interface IModel<T> {
  interface IService<T> {
    create(obj: T): Promise<T>,
    readOne(_id: string): Promise<T>,
    update(id: string, body: T): Promise<T | null>
  }
  
  export default IService;
  
}
