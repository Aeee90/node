const solve = function(a,b){
    const arr = Array.from(new Array(a), (v,i)=>i+1);

    return [...(arr.slice(b)), ...(arr.slice(0, b))]; 
}

console.log(solve(5,1));
