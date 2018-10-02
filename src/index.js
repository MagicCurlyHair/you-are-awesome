// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {return propertyName};
const createNotEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype, propertyName, {
        enumerable: false,
        get(){
            return prop;
        },
        set(value){
            prop = value;
        }});
    return propertyName;
}
const createProtoMagicObject = () => {
    class Magic{
        constructor(){
            this.magic = 'magic';
        }
    }
    Object.setPrototypeOf(Magic, Magic.prototype);
    return Magic;
};

let incrementorCounter = 0;
const incrementor = () => {
    incrementorCounter++;
    return incrementor;
};
incrementor.toString = () => {return incrementorCounter}

let asyncCounter = 0;
const asyncIncrementor = () => {
    asyncCounter++;
    return Promise.resolve(asyncCounter);
};
const createIncrementer = () => {
    class Incrementor{
        constructor(){
            this.counter = 0;
        }
        next(){
            this.counter++;
            return this;
        }
        get value(){
            return this.counter;
        }

        [Symbol.iterator]() {return this}
    }
    return new Incrementor();
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    let promise = new Promise(resolve => setTimeout(() => {resolve(param)}, 1000));
    return promise;
};

const getDeepPropertiesCount = (obj) => {
    let keysCount = 0;
    const propertiesCounter = (obj) => {
        let keys = Object.keys(obj);
        keys.forEach((key) => {
            keysCount++;
            if (typeof obj[key] === 'object'){
                propertiesCounter(obj[key]);
            }
        })
    }
    propertiesCounter(obj);
    return keysCount;
};
const createSerializedObject = () => {
    return new Number(42);
};
const toBuffer = () => {};
const sortByProto = (arr) => {
    let iterationTimes = arr.length;
    let iterationCount = 0
    while (iterationCount < iterationTimes){
        for (let i = 0, len = arr.length - 1; i < len; i++){
            let element1 = arr[i];
            let element2 = arr[i + 1];
            let match = false;
            while(element1){
                if (element1.__proto__ == element2){
                    match = true;
                }
                element1 = element1.__proto__;
            }
            if (!match){
                element1 = arr[i];
                arr[i] = element2;
                arr[i + 1] = element1;
            }
        }
        iterationCount++;
    }
    return arr;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;

