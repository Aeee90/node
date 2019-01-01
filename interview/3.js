const votes = ['Alex', 'Michael', 'Harry', 'Dave', 'Michael', 'Victor', 'Harry', 'Alex', 'Mary', 'Mary'];

let max = 0;
const names = votes.reduce((a, v)=>{
    if(v in a){
        const temp = a[v] + 1;
        a[v] = temp;
        if(max < temp)  max = temp;
    }else a[v] = 1;

    return a;
}, {});

const winners = [];

for(name in names){
    const count = names[name];
    if(count >= max) winners.push(name);
}

console.log(winners.sort().pop());