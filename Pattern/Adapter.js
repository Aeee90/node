const Target = class {
    request(){}
};

const Adapdee = class {
    specificReqeust(){}
};

const Adapder = class extends Target {
    request(){return new Adepdee();};
};
