
const name = 'sang min';
const age = 30;

const user = {
    name: name,
    age: age,
    location: 'Seoul'
}

// console.log(user)

const product = {
    label: 'red rock',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const { label: productLabel, price, rating = 5 } = product;

// console.log(productLabel);
// console.log(price);
// console.log(rating);

const transaction = (type,{label,stock=0}={})=>{
    console.log(type,label,stock)
}

transaction('order',product);