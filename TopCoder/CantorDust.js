const CantorDust = time=>{
    //1 흑 0 백
    let fractal = [[{1:1}]];

    for(let i=1; i<=time; i++){
        let temp = fractal.reduce((a,v)=>{
            a.push([...v, {0: fractal.length}, ...v]);
            return a;
        },[]);
        
        let whiteCol = [{0: fractal.length*3}];
        fractal = [...temp, whiteCol, whiteCol, whiteCol, ...temp];
    }

    return fractal;
}

const getPattern = pattern=>{
    return pattern.map(v=>{
        return v.split('').reduce((a,v)=>{
            v = v === "."? 0 : 1;
            let temp = a.length > 0? a.pop() : {};
            temp[v] = temp[v]? temp[v] + 1 : 1;
            a.push(temp);
            return a;
        },[]);
    });
}

const checkup = (curRow, curCol, dust, pattern)=>{
    for(let row in pattern){
        for(let col in pattern[row]){
            if(col === pattern.length){
                if(dust[curRow+row][curCol+col] <= pattern[row][col]) count++;
                else return false;
            }else{
                if(dust[curRow+row][curCol+cur] !== pattern[row][col]) return false;
            }
        }
    }
    return count;
};


const solve = (dust, pattern)=>{
    let count = 0;
    for(let i=0; i<dust.length - pattern.length; i++){
        for(let j=0; j<dust[i].length; j++){
            if(dust[i][j] === pattern[0][0]){
                if(checkup(i, j, dust, pattern)) count++;
            }
        }
    }
};

console.log(CantorDust(2));
console.log(getPattern([".X", ".."]));