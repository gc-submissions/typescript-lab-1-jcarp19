import {Products} from "../src/products";

export interface InventoryItem {
    product: Products;
    quantity: number;
};

//Declare an array called inventory which is an array of type InventoryItem.
let inventory: InventoryItem[] = [
    {product:{name:"motor", price:10}, quantity:10},
    {product:{name:"sensor", price:12.50}, quantity:4},
    {product:{name:"LED", price:1}, quantity:20},
];

export const calcInventoryValue = (arrOfInventory: InventoryItem[]): number => {
    // return a number, the total value of all the products in the inventory array provided as an argument. If the array argument is empty, return 0.
    let total:number = 0;
    for (let item of arrOfInventory) {
        total += item.product.price * item.quantity;
    }
    return total;
};
let inventotyValue: number = calcInventoryValue(inventory);
console.log(inventotyValue);
