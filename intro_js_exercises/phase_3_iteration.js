Array.prototype.bubbleSort = function () {
    let arr = this;
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (i = 0; i < arr.length - 1; i++) {
            for (j = (i+1); j < arr.length; j++) {
                if (arr[i] < arr[j]) {
                    continue;
                } else {
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                    sorted = false;
                }
            }
        }
    }
    return arr;
}

//console.log([4,5,2,1,7,6].bubbleSort());

String.prototype.subStrings = function () {
    let result = [];
    for (i=0; i < this.length; i++) {
        for(j = i + 1; j < this.length + 1; j++) {
            result.push(this.slice(i, j));
        }
    }
    return result;
}

//console.log('string'.subStrings());