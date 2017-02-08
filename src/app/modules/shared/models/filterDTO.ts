export class FilterDTO<T>{

    constructor(private offset?: number, public currentPage?: number, public pageSize?: number, public entity?: T, public orderAsc?: boolean, public orderProperty?: string) { }

    public setOffset(value: number): void {
        this.offset = (value * this.pageSize) - this.pageSize;
    }

}