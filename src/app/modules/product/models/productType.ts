export class ProductType {

    private static values: ProductType[] = [new ProductType("UTILITY"), new ProductType("CAR"), new ProductType("CLOTH")];

    constructor(public description: string) {
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
} 