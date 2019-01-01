const origItems = ["a", "b", "c", "d"],
origPrices = [16.89, 56.92, 20.89, 345.99],
items = ['a', 'd'],
prices = [18.99, 400.89];

const v = items.reduce((a, v, i)=>{
    if(origPrices[origItems.indexOf(v)] != prices[i]) a++;
    return a
}, 0);



console.log(v);