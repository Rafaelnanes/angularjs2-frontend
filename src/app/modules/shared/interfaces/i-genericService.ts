export interface IGenericService<T> {
    save(t): void;
    update(t): void;
    remove(t): void;
    getAll(): T[];
    getById(): T;
}