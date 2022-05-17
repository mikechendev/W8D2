const range = (start, end) => {
    if (start === end) return [start];
    if (start > end) return [];
    let rc = range(start, end - 1);
    rc.push(end);
    return rc;
}

//console.log(range(1,5));

const sumRec = (arr) => {
    if (arr.length === 0) return 0;
    return sumRec(arr.slice(1)) + arr[0];
}

//console.log(sumRec([1,2,3,4,5]));

const exponent = (base, exp) => {
    if (exp === 0) return 1;
    if (exp === 1) return base;
    return exponent(base, exp-1) * base;
}

//console.log(exponent(10, 2));

const fibonacci = (n) => {
    if (n === 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0,1];
    let prev = fibonacci(n-1)
    prev.push((prev[prev.length-1] + prev[prev.length-2]));
    return prev;
}

//console.log(fibonacci(5));

const deepDup = (arr) => {
    if (!Array.isArray(arr)) return arr;
    return arr.map((el) => {
        return deepDup(el);
    });
}

//console.log(deepDup([1,2,3,4]));

const bsearch = (arr, target) => {
    if (arr.length === 0) return -1;
    let mid = Math.floor(arr.length/2);
    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] > target) {
        return bsearch(arr.slice(0,mid), target);
    } else if (arr[mid] < target) {
        return bsearch(arr.slice(mid+1), target) + (mid + 1);
    } else {
        return -1;
    }
}

const mergeSort = (arr) => {
    if (arr.length < 2) return arr;
    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid+1);
    return merge(mergeSort(left), mergeSort(right));
}

const merge = (arr) => {
    
}