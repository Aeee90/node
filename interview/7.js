const operations = ['push 4','pop', 'push 3', 'push 5', 'push 2', 'inc 3 1'];


operations.reduce((stack,oper)=>{
    let [cmd, v1, v2] = oper.split(' ');
    switch(cmd){
        case('push'):
            if(v1) v1 = parseInt(v1);
            stack.push(v1);
            break;
        case('pop'):
            stack.pop();
            break;
        case('inc'):
            if(v1) v1 = parseInt(v1);
            if(v2) v2 = parseInt(v2);
            for(i=0; i<v1; i++) {stack[i] = stack[i] + v2};
            break;
        default: break;
    }
    console.log(stack.length <= 0? 'EMPTY' : stack[stack.length - 1]);

    return stack;
}, []);