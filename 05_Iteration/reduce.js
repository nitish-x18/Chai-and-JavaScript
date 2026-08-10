let Mynum = [1,2,3];

// let TotalNum = Mynum.reduce( (acc ,curr) => acc + curr, 0);

let TotalNum = Mynum.reduce( (acc, curr) => {
    console.log(`acc: ${acc} and current value: ${curr}`);
    return acc + curr
}, 0);

// console.log(TotalNum);

let shoppingCart = [
    {
        itemName: "Shirt",
        price: 799
    },
    {
        itemName: "T-Shirt",
        price: 599
    },
    {
        itemName: "Hoddie",
        price: 1299
    },
    {
        itemName: "Shoe",
        price: 1199
    },
]

let PriceToPay = shoppingCart.reduce( (acc, item) => {
    return acc + item.price;
},0);

console.log(PriceToPay);