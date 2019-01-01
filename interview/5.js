const a = [2, 3, 10, 2, 4, 8, 1];
//const a = [10,8,7,6,5];

const getMin = (idx)=>{
    let min = Number.MAX_VALUE;
    for(let i=0; i<idx; i++) if(min > a[i]) min = a[i];
    return min;
};

let max = 0, isAllSamll = true;

for(let j in a){
    const aj = a[j], min = getMin(j);
    
    if(aj < min){
        let temp = aj - min;
        if(temp > max) max = temp;
    }
    
}

console.log(max);