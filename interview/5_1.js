
//const a = [2, 3, 10, 2, 4, 8, 1];
//const a = [10,8,7,6,5];
//const a = [1,2,3,4,5,6];
const a = [7,9,-5,5,6,3,2];

const getMin = (idx)=>{
    let min = Number.MAX_VALUE;
    for(let i=0; i<idx; i++) if(min > a[i]) min = a[i];
    return min;
};

const copy = a.slice();
copy.sort((a,b)=>{
    return b-a;
});
if(JSON.stringify(a) === JSON.stringify(copy)) return -1;
else{
    let max = 0;
    for(let i=0; i <a.length; i++){
        const ai = a[i];
        if(max > ai) continue;
        else{
            let min = getMin(i), temp = ai - min;
            if(temp > max) max = temp;
        
        }
    }

    console.log(max);
};