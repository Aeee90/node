const Product = class {};

const ConreteProduct = class extends Product {};

const Creator = class {
    FactoryMethod(){}
    AnOperation(){}
};

const ConcreteCreator = class extends Creator{
    FaxtoryMethod(){}
};


if('Example'){
    const Product = class {
        static MINE = 0;
        static YOURS = 1;
    },
    const MyProduct = class extends Product{},
    const YourProduct = class extends Product{};

    const Creator = class {
        create(id){}
    },

    const ProductCreator = class extends Creator{
        create(id){
            switch (id) {
                case Product.MINE: return new MyProduct();
                case Product.YOURS: return new YourProduct();
                default: return super.create(id);
            };
            
            //super에서도 create를 하게 되면, Product의 id를 받는 create 메소드가 구현되어야한다. create추상층이 되어지지 않을 뿐더라
            // Product에 종속적은 클래스가 되어버린다.
            // 이런 예를 생각해보자. Product를 반환하는 것이 아닌 Product_new라는 새로운 추상층을 가지는  creator를 만들게 되면, creator가 두개가 있는 거나 마찬가지가 된다.
            // 이런 단점이 있는데, 단순히 국소화를 위해서 사용하는 것인가..
            return super.create(id);
        }
    };
}

