if('Tree'){
    //Tree의 구성
    //1. Terminal Node => degree가 0인 Node
    //2. Branch Node => Terminal Node가 아닌 Node
    //3. Apex => 상향식 트리에서의 root Node
    //4. parent => 현 Node 보다 위에 있는 Node
    //5. child => 현 Node 보다 아래에 있는 Node
    //이진 트리와 트리는 개별적인 개념이다. => 이진트리에서는 유향트리가 존재하지 않기 때문이다.
    //forest => 트리의 순서있는 집합
}

if('Binary Tree Drive'){
    //전위운행 root 방문  => 왼쪽 하위트리 운행  => 오른쪽 하위트리 운행
    //중위 운행 왼쪽 하위트리 운행 => root 방문 => 오른쪽 하위트리 운행
    //후위운행 왼쪽 하위트리 운행 => 오른쪽 하위 트리 운행  => root 방문
    //=> 즉 root를 언제 방문하느냐가 중요한 기준점

    const Model = class{
        constructor(value, left, right){
            Object.assign(this, {value, left, right, visited:false});
        }
    };

    const example = new Model(1, new Model(2, undefined, new Model(4)), new Model(3, new Model(5, new Model(6), new Model(7)), new Model(8)));

    //PreOrder
    const preOrder = root=>{
        let cur = root, stack = [];
        do{
            console.log(cur.value);
            if(cur.left){
                if(cur.right){
                    stack.push(cur.right);
                }
                cur = cur.left;
            }else{
                if(cur.right){
                    cur = cur.right;
                }else{
                    cur = stack.pop();  
                }
            }
        }while(stack.length >0 || cur);
    };

    //중위운행
    const inOrder = root=>{
        const stack = [];
        let cur = root;

        do{
            cur.visited = true;
            if(cur.left && !cur.left.visited){
                stack.push(cur);
                cur = cur.left;
                cur.visited = true;
            }else{
                if(cur.visited) console.log(cur.value);
                
                if(cur.right){
                    cur = cur.right;
                }else{
                    cur = stack.pop();  
                }
            }
        }while(stack.length >0 || cur);
    };

    //후위운행
    const postOrder = root=>{
        const stack = [];
        let cur = root;

        do{
            if(cur.left && !cur.visited){
                stack.push(cur);
                if(cur.right) stack.push(cur.right);
                cur.visited = true;
                cur = cur.left;
            }else if(cur.right && !cur.visited){
                stack.push(cur);
                cur.visited = true;
                cur = cur.right;
            }else{
                console.log(cur.value);
                cur = stack.pop();
            }
        }while(stack.length >0 || cur);
    };

    postOrder(example);

    //하다가 말음.. 나중에 추가
}

if('List'){
    //List: 0 또는 그 이상의 원자들 또는 리스트들의 유한한 순차열
}


