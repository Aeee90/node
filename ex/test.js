// const votes = ['Victor', 'Veronica', 'Ryan', 'Dave', 'Maria'
// , 'Maria', 'Farah', 'Farah', 'Ryan', 'Veronica'];

// const countVotes = votes.reduce((a,v) =>{
//     a[v] = a[v]? a[v]+1 : 1;
//     return a;
// }, {});

// let max = 0, winner = ""; 
// for(let name in countVotes){
//     let voteCount = countVotes[name];
//     if(voteCount > max){
//         max = voteCount;
//         winner = name;
//     }else if(voteCount == max){
//         if(name > winner) winner = name; 
//     }
// }

// console.log(winner);

// const binaryToInteger = (bi)=>{
//     let int = 0;
//     for(let i in bi){
//         int += parseInt(bi[i]) * Math.pow(2,7-i);
//     }
//     return int;
// }

// const PURECOLORS = {
//     BLACK: [0,0,0],
//     WHITE: [255,255,255],
//     RED: [255, 0, 0],
//     GREEN: [0, 255, 0],
//     BLUE: [0, 0, 255]
// };

// return pixels.map(pixel =>{
//     return [binaryToInteger(pixel.substring(0,8)), binaryToInteger(pixel.substring(8,16)), binaryToInteger(pixel.substring(16,24))];
// }).map(rgb =>{
//     let min = Number.MAX_VALUE, colorDistance= {};
//     let ambiguous = 0;
//     for(let name in PURECOLORS){
//         const pureValue = PURECOLORS[name];
//         let d = 0;
//         for(let i in pureValue){
//             d += Math.pow(Math.abs(pureValue[i]-rgb[i]), 2)
//         }
//         d = Math.sqrt(d);

//         if(d < min) min = d;

//         colorDistance[name] = d;
//     }

//     let color = [];
//     for(let name in colorDistance){
//         if(colorDistance[name] === min)
//             color.push(name);
//     }

//     return color.length>1? 'Ambiguous' : color.pop();
// });

// console.log(an);


// function a (str){
//     const getGCM = (a, b)=>{
//         if(a <b)
//             ([b, a] = [a, b]);
         
//         if(b == 0)
//             return a;
//         return getGCM(b, a%b);
//     }
    
//     const getLCM = (a, b)=>{
//         return a * b / getGCM(a, b);
//     }
    
//     return str.map(str=>{
//         let [ab, cd] = str.split('+');
//         const [a, b] = ab.split('/').map(v=>parseInt(v))
//         , [c, d] = cd.split('/').map(v=>parseInt(v));
    
//         const lcm = getLCM(b, d);
//         const denominator = lcm, numerator = lcm/b*a+lcm/d*c;
//         const gcm = getGCM(denominator, numerator);
//         return `${numerator/gcm}/${denominator/gcm}`;
//     });
// }


// function verifyItems(origItems, origPrices, items, prices) {
//     const origs = {};
//     for(let i in origItems)
//         origs[origItems[i]] = origPrices;

//     let count = 0;
//     for(let i in items)
//         if(origs[items[i]] !== prices[i]) count++;

//     return count;
// }

const https = require('http');
const substr = 'spiderman';

const dataParse = (res)=>{
    let data = '';
    let result;
    res.on('data', (chunk) => {
        data += chunk;
    });
    
    res.on('end', () => {
        console.log("cc");
        data = JSON.parse(data);
        result = {total_pages : data.total_pages, page: data.page, data: data.data};
    });

    console.log("dd");

    return result;
};

const options = {
    uri: 'http://news.nate.com/recent?cate=pol&mid=n0201&type=c&date=20170702',
    port: 80,
    method: 'GET'
};
https.get(options, dataParse);

console.log("cc");


//const pro = new Promise(res => https.get(res=> https.get(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}`, res)));
//pro.then(dataParse);

// const httpRequest = function*(substr){
//     const datas = [];
//     let {total_pages, page, data} = yield new Promise(res => https.get(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}`, res));
//     datas = [...datas, ...data];
//     while(totalPages >= ++page){
//         ({page, data} = yield new Promise(res => https.get(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}&page=${page}`, res)));
//         datas = [...datas, ...data];
//     }

//     return datas;
// };

// const executor = (gener, ...args)=>{
//     const iter = gener(...args);
//     const next =({value, done})=>{
//         if(!done){
//             value.then(res=>{
//                 let b = dataParse(res);
//                 console.log("ccc");
//                 console.log(b);
//                 next(iter.next(dataParse(res)));
//             })    
//         }else return value;
//     };
//     next(iter.next());
// };

//return executor(httpRequest, substr);

// const a = [10,8,7,6,5];
// const b = a.slice();

// b.sort((a,b)=>b-a);

// let same = true;
// for(let i in a){
//     if(a[i] !== b[i]){
//         same = false;
//         break;
//     } 
// }

// if(same) return -1;

// const getMax = (stx)=>{
//     let maxI = a.length, maxV = -1;
//     for(let i=stx+1; i<a.length; i++){
//         let cur = a[i];
//         if(maxV < cur){
//             maxV = cur;
//             maxI = i;
//         }
//     }

//     return maxI;
// }

// const maxIndex = [];
// let maxI = -1;
// while(maxI < a.length){
//     maxI = getMax(maxI);
//     if(maxI < a.length)
//         maxIndex.push(maxI);
// }

// let result = -1;
// while(maxIndex.length){
//     let cur = 0, maxI = maxIndex.pop();
//     const maxV = a[maxI];
//     let min = Number.MAX_VALUE;
//     for(let i=cur; i<maxI; i++){
//         if(a[i] < min) min = a[i];
//     }

//     if(result < maxV - min){
//         console.log(result);
//         result = maxV -min;
//     }
// }

// console.log(result);


