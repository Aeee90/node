const example = [503,87,512,61,908,170,897,275,653,426,154,509,612,677,765,703];

if('직접 삽입정렬'){
    const insertion = (arr)=>{
        arr = [...arr];
        for(let i=1; i<arr.length; i++){
            let j = i, value = arr[i];
            while(j>0 && value < arr[j-1]){
                arr[j] = arr[j-1];
                j--;
            }
            arr[j] = value;
        }
        return arr;
    }
}

if('ShellSort'){
    const shell = (arr)=>{
        arr = [...arr];
        //const h = [8,4,2,1];    //증분
        const h = [2,1];
        for(let v of h){
            console.log(arr);
            for(let i=0; i<v; i++){
                let j=i;
                while(j + v < arr.length){
                    if(arr[j] > arr[j+v]){
                        [arr[j+v], arr[j]] = [arr[j], arr[j+v]];
                    }
                    j += v;
                }
            }
        }

        return arr;
    };

    //수학도 어렵고.. 쓰지말자. 증분을 찾는 방법이 너무 어렵다.
}

