import 'rxjs/add/operator/toPromise';

export interface IGenericService<T> {
    save(t): Promise<T[]>;
    update(t): Promise<T[]>;
    remove(t): void;
    getAll(): Promise<T[]>;
    getById(id: number): Promise<T>;
}