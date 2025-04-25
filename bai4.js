// 2634. Filter Elements from Array

var filter = function(arr, fn) {
    const result = [];

    arr.forEach((item, index)=>{
        if(fn(item, index)){
            result.push(item);
        }
    })
    return result;
};
