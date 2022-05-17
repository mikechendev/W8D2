Array.prototype.myEach = function(callback) {
    for (let i=0; i<this.length; i++) {
        callback(this[i]);
    }
}

Array.prototype.myMap = function(callback) {
    let result = [];
    this.myEach(ele => result.push(callback(ele)));
    return result;
}

Array.prototype.myReduce = function(callback, initialValue) {
    let arr = this;
    if (!initialValue) {
        initialValue = this[0];
        arr = this.slice(1);
    }
    let result = initialValue;
    arr.myEach(ele => result = callback(result, ele));
    return result;
}

// without initialValue
//console.log([1, 2, 3].myReduce(function(acc, el) {
//  return acc + el;
//})); // => 6

// with initialValue
//console.log([1, 2, 3].myReduce(function(acc, el) {
//  return acc + el;
//}, 25)); // => 31