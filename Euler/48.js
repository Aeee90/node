

const solution = (n, boundary = 10**10)=>{
    return Array.from({length: n}, (v, k) => k+1).reduce((a,v)=>{
        return ((a, n)=>{
            let temp = 1;
            for(let i=0; i<n; i++){
                temp = temp * n;
                if(temp > boundary) temp = temp%boundary;
            }
            temp = a+temp;
            if(temp > boundary) temp = temp%boundary;
            return temp;
        })(a, v);
    }, 0);
}

console.log(solution(1000, 10**10));