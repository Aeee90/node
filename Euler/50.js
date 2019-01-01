const Problem = `41은 소수이면서 다음과 같은 6개의 연속된 소수의 합으로도 나타낼 수 있습니다.

41 = 2 + 3 + 5 + 7 + 11 + 13
이것은 100 이하에서는 가장 길게 연속된 소수의 합으로 이루어진 소수입니다.

1000 이하에서는 953이 연속된 소수 21개의 합으로 가장 깁니다.

1백만 이하에서는 어떤 소수가 가장 길게 연속되는 소수의 합으로 표현될 수 있습니까?`;

//소수가 가장 길게 연속되는 소수의 합 => 작은 소수들로 구성될 수록 => 2부터 구해온 소수들을 합이 100만이 되기전 까지 loop를 돌리면 될것 같다.

const getPrimes = (limit)=>{
    const primes = [2];

    for(let i=3; i<=limit; i+=2){
        let isPrime = true;
        for(let j of primes){
            if(j > Math.sqrt(i)) break;

            if(i % j === 0){ isPrime = false; break; }
        }

        if(isPrime) primes.push(i);
    }

    return primes;
}

//21개
const solve = (limit, primes=[])=>{
    let len = 0, cur = 0, result = 0;
    while(cur <= limit) cur += primes[len++];

    main: while(len-- >= 21){
        let stx = 0, check = false;
        do{
            cur = primes.slice(stx, stx + len).reduce((a,v)=> a+v, 0);
            if(cur > limit) break;
            if(primes.includes(cur)){
                result = result < cur? cur : result;
                check = true;
            } 
        }while(++stx);

        if(check) break;
    }

    return result;
}
const primes = getPrimes(1000000);
console.log(solve(1000000, primes));

    

