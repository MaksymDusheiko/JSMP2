function forEach(arr: any[], action) {
    for (let i = 0; i < arr.length; i++) {
        action(arr[i], i, arr)
    }
}

function map(arr: any[], action): [] {
    let result: [] = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(action(arr[i], i, arr))
    }
    return result
}

function filter(arr: any[], action): [] {
    let result: [] = [];
    for (let i = 0; i < arr.length; i++) {
        action(arr[i], i, arr) && result.push(arr[i])
    }
    return result
}

function some(arr: any[], action): boolean {
    for (let i = 0; i < arr.length; i++) {
        if (action(arr[i], i, arr)) {
            return true;
        }
    }
    return false
}

function every(arr: any[], action): boolean {
    for (let i = 0; i < arr.length; i++) {
        if (!action(arr[i], i, arr)) {
            return false;
        }
    }
    return false
}

function reduce(arr: any[], action, firstElement?) {
    let sum = firstElement || arr[0],
        i = firstElement ? 0 : 1;

    for (i; i < arr.length; i++) {
        let current = arr[i];
        sum = action(sum, current, i, arr)
    }
    return sum
}

function reduceRight(arr: any[], action, lastElement?) {
    let sum = lastElement || arr[arr.length - 1],
        i = lastElement ? arr.length - 1 : arr.length - 2;
    for (i; i >= 0; i--) {
        let current = arr[i];
        sum = action(sum, current, i, arr)
    }
    return sum
}


let testArr = [1, 2, 3, 4, 5, 6, 7];

console.log(filter(testArr, (i) => i < 4)) //[1,2,3]
console.log(every(testArr, (i) => i < 10)) //true
console.log(every(testArr, (i) => i > 10)) //false
console.log(reduceRight(testArr, (sum, curr) => {  //[ 7, 6, 5, 4, 3, 2, 1 ]
    sum.push(curr);
    return sum
}, []));

console.log(reduce(testArr, (sum, curr) => { //[ 1, 2, 3, 4, 5, 6, 7 ]
    sum.push(curr);
    return sum
}, []));

console.log(testArr.reduce((sum, curr, index, arr) => {
    sum.push(curr);
    return sum;
}, []));
