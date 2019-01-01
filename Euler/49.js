const getPrimeArray = (num) =>{
    const primes = [2];
    for(let i=3; i<num; i+= 2){
        let isPrime = true;
        for(let j of primes){
            if(j > Math.sqrt(i)) break;
            if(i%j === 0){
                isPrime = false;
                break;
            }
        }

        if(isPrime) primes.push(i);
    };

    return primes;
};

const isPermutation = (first, second, thrid)=>{
    const se = second.toString().split(''), th = thrid.toString().split('');
    
    for(let v of first.toString()){
        if(se.includes(v)) se.splice(se.indexOf(v),1);
        if(th.includes(v)) th.splice(th.indexOf(v),1);
    }
    
    if(!se.length && !th.length) return true;
    else false;
}

const getPermutation_3330 = (primes)=>{
    const len = primes.length;
    const permu = [];
    for(let i=0; i<len/2; i++){
        const first =primes[i],second = first + 3330, thrid = first + 6660;
        if(primes.includes(second) && primes.includes(thrid)){ 
            if(isPermutation(first, second, thrid)) permu.push(`${first}${second}${thrid}`);
        } 
    }

    return permu;
};

console.log(getPermutation_3330(getPrimeArray(10000).filter(v=> v/1000 >= 1)));


