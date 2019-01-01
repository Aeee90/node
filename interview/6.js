//const a = [1,3,46,1,3,9], k = 47;
const a = [6,12,3,9,3,5,1], k = 12;

let count = 0;
if(k%2 == 0){
    let temp = k/2, c = 0;
    for(let v of a) if(temp == v) c++;

    if(c >= 2) count += 1;
}

const isInclude = (arr, value)=>{
    for(let v of arr) if(v === value) return true;

    return false;
}

const notOver = Array.from(new Set(a));
const checkOver = [];
count += notOver.reduce((a,num)=>{

    if(isInclude(checkOver, num));
    else{
        if(num == k/2) return a;

        let temp = k - num;
        if(isInclude(notOver, temp)) {
            checkOver.push(...[temp, num]);
            a++;
        }        
    }
    return a;
}, 0);

console.log(count);

