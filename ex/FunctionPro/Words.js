const NON_WORDS = ['the', 'and', 'of', 'to', 'a', 'i', 'it'];

const result = NON_WORDS.reduce((a, v)=>{
    a[v] = a[v]? a[v]+1 : 1;
    return a;
}, {});

console.log(result);

const indexOfAny = function*(str="", chars=[]){
    for(let idx in str){
        for(let matchChar of chars)
            if(str[idx] === chars) yield idx;
    }
    return -1;
}