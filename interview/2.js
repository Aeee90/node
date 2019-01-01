const expressions = ['<>>>', '<>>>>', '<<<><><>'],
maxReplacements = [2,2,2];

const v = expressions.map((v,i)=>{
    let temp = v, check = true;
    while(temp.length > 1 && check){
        temp = temp.replace('<>', '');
        check = temp.includes('<>');
    }
    
    if(temp.includes('<')) return 0;

    return temp.length <= maxReplacements[i]? 1 : 0;
});

console.log(v);