const products = [];

for(let i = 0; i< 25; i++){
    products.push({title: "[What happened] How to create", img: `product_${i+1}.png`, price: 2523231200, vote_score: Math.round(Math.random()*200)})
}

export default products;