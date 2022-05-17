Array.prototype.uniq = function() {
    const result = [];
    this.forEach((ele) => {
        if (!result.includes(ele)) {
            result.push(ele);
        }
    })
    return result;
}

//console.log(([1,2,2,3,3,3].uniq()));

Array.prototype.twoSum = function() {
    const pairs = [];

    for(let i = 0; i < this.length; i++) {
        for(let j = (i+1); j < this.length; j++) {
            if (this[i] + this[j] === 0) {
                pairs.push([i,j]);
            }
        }
    }
    return pairs;
}

//console.log([-2,-1,0,1,2].twoSum());

Array.prototype.transpose = function () {
    
}

console.log([[1,2,3],[1,2,3],[1,2,3]].transpose());