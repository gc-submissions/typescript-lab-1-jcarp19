export interface Products {
    name: string;
    price: number;
};

let products: Products[] = [
    {name:"car", price:10},
    {name:"motorcycle", price:20},
    {name:"boat", price:30}
];

export let calcAverageProductPrice = (arrOfProducts: Products[]): number => {
    // sum the prices of the array items and the devide by the array.length to get the average.
    let sum: number = 0;
    for (let i = 0; i < arrOfProducts.length; i++) {
        sum += arrOfProducts[i].price
    };
    
    if (arrOfProducts.length == 0) {
        return sum;
    } else {
        return sum / arrOfProducts.length;
    };
};