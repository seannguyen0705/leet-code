//2625. Flatten Deeply Nested Array

var flat = function (arr, n) {
    const result = []

    const flatItem =(item,n) =>{


      
        if(Array.isArray(item)){
            if(n<=0){
                result.push(item)
            }else{
                item.forEach(item1=>flatItem(item1,n-1))
            }
        }else{
            result.push(item)
        }
    }
    arr.forEach(item =>{
        flatItem(item,n);
    })
    return result;
};

const  arr = [1,2,3,[4,5,6],[7,8,[9,10,11],12],[13,14,15]]
const n =0

flat(arr,n)