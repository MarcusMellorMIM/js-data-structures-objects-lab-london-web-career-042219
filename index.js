// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue( driver, key, value) {
    let newObj = {}
    newObj[key]=value;
    return Object.assign( {}, driver, newObj);
};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    let newObj = {}
    newObj[key]=value;
    return Object.assign(driver,newObj);
};

function deleteFromDriverByKey(driver, key ) {
    let newObj = Object.assign({}, driver)
    delete newObj[key];
    return newObj;
};

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
};