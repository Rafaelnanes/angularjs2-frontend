export class ProductType {

    private static values: ProductType[] = [new ProductType("Utility", 0), new ProductType("CAR", 1), new ProductType("Cloth", 1)];
    constructor(public description: string, public value: number) {

    }

    public static getValues(): ProductType[] {
        return this.values;
    }

    public static getTypeByName(description: string): ProductType {
        let finalValue: ProductType = null;
        for (let productType of this.values) {
            if (productType.description == description) {
                finalValue = productType;
            }
        }
        return finalValue;
    }

    public static getTypeByValue(value: number): ProductType {
        let finalValue: ProductType = null;
        for (let productType of this.values) {
            if (productType.value == value) {
                finalValue = productType;
            }
        }
        return finalValue;
    }
} 