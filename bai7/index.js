//2631. Group By

Array.prototype.groupBy = function(fn) {
    const result = {}

    this.map(item =>{
        const key = fn(item)
        if(!result[key]){
            result[key] = [item]
        }else {
            result[key].push(item)
        }
    })
    return result
};


 const res= [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}

 console.log(res)
 