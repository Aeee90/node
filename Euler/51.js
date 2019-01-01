`
두 자리 숫자 *3의 첫번째 자리를 여러가지로 바꿨을 때 가능한 아홉 가지의 결과 중에서 13, 23, 43, 53, 73, 83의 여섯 개는 소수입니다.
56**3 의 3번째와 4번째 자리를 동일한 숫자로 바꿔서 만들어지는 10개의 다섯자리 숫자 중에서는 아래에서 보듯이 7개가 소수가 되며, 
이것은 이런 식으로 7개의 소수가 만들어지는 첫번째 경우입니다. 
이 소수 집단의 첫번째 수인 56003은 이런 성질을 갖는 가장 작은 소수입니다.
56003, 56113, 56333, 56443, 56663, 56773, 56993
위의 예처럼 원래의 일부를 동일한 숫자로 치환했을 때 8개의 소수 집단이 만들어지는 경우를 찾고, 그 집단에 속한 가장 작은 소수를 구하세요.
치환하는 자리는 인접하지 않아도 되고, 가장 앞부분을 치환하는 경우 거기에 0은 올 수 없습니다.

풀어야할 조건
- IS_PRIME? => getPrirmes 메소드를 통해 일단 소수를 구해놓자.
- 같은 자릿수에 0*X(1*X)~9*X를 교체 했을 때 8개의 소수가 나는가.
`
const error = (text)=> console.error(text);

const PrimesFactory = class {
    constructor(){
        Object.assign(this, {primes: [2], limit : 2});    
    }

    makePrimesArr(limit){
        if(this.limit >= limit){error(`${limit} 보다 큰 숫자여야합니다.`); return;}  
        
        const primes = this.primes;
        for(let i= ++this.limit%2 == 0? this.limit+1: this.limit; i<=limit; i+=2){
            let isPrime = true;
            for(let j of primes){
                if(j > Math.sqrt(i)) break;
    
                if(i % j === 0){ isPrime = false; break; }
            }
    
            if(isPrime) primes.push(i);
        }

        this.limit = limit;
    
        return this;
    }

    isPrime(num){
        return primes.includes(num);
    }
}

const primes = new PrimesFactory();
console.log(primes.makePrimesArr(100).primes);
console.log(primes.makePrimesArr(200).primes);
console.log(primes.makePrimesArr(300).primes);
console.log(primes.makePrimesArr(400).primes);
