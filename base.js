
function getRandomArr(num) {
    let arr = new Array(num);
    for(var i = 0; i < arr.length; i++) {
        arr[i] = parseInt(Math.random() *10, 10)
    }
    return arr;
}
// 选择排序 
function selectedSort(arr) {
    if(arr == null || arr.length < 2) return;
    let len = arr.length
    for(var cur = 0; cur < len; cur++ ) {
        let minIndex = cur;
        for(var i = cur + 1; i < len; i++) {
            minIndex = arr[i] < arr[minIndex] ? [i] : minIndex
        }
        swap(arr, cur, minIndex)
    }
    return arr
}

function swap(arr , i, j) {
    if (i == j) return;
    arr[i] = arr[i] ^ arr[j];
    arr[j] = arr[i] ^ arr[j];
    arr[i] = arr[i] ^ arr[j];
}

//
// let arr = getRandomArr(10); 
// console.log(arr)
// console.log(selectedSort(arr))


function bubbleSort(arr) {
    if(arr == null || arr.length < 2) return;
    let len = arr.length;
    for(var cur = len - 1; cur >= 0; cur--) {
        // 1 - 2 1- 3 1- n-1;  n -1位置最大
        // 1- 2  1- 3 1- N -2; 排完后n-2位置最大;
        for(var i = 0; i <= cur; i++) {
            if(arr[i] > arr[i+1]) swap(arr, i, i+1)
        }

    }
    return arr
}

// let arr = getRandomArr(10); 
// console.log(arr)
// console.log(bubbleSort(arr))

function insetedSort(arr) {
    if (arr == null || arr.length < 2) return;
    let len = arr.length;
    for(var cur = 0; cur < len; cur++) {
        // 0 ,
        // 1
        // 2 
        for(var i = cur + 1; i >= 0; i--) {
            if(arr[i] < arr[i - 1]) {
                swap(arr, i, i -1);
            }
        }
    }
    return arr
}
// let arr = getRandomArr(15); 
// console.log(arr)
// console.log(insetedSort(arr))


function quickedSort(arr) {
    if (arr == null) return
    if (arr.length < 2) return arr;
    let len = arr.length;
    // 首先需要一个baseValue
    let baseValue = arr[0];
    let leftlessBaseArr = []; //一个左数组 存放小于baseValue;
    let rightmoreBaseArr = []; //一个有数组 存放大于baseValue;
    for(var i = 1; i < len; i++) {
        // 小于basevalu 给左数组 否则给有数组
        arr[i] <= baseValue ? 
        leftlessBaseArr.push(arr[i]) 
        : rightmoreBaseArr.push(arr[i])
    }
    const lessArr = quickedSort(leftlessBaseArr);
    const moreArr = quickedSort(rightmoreBaseArr);
    return [...lessArr, baseValue, ...moreArr]
    
}
let arr = getRandomArr(15); 
console.log(arr)
console.log(quickedSort(arr))
