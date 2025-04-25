// 2665. Counter II





/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let current = init;
    return {
        increment: ()=> ++ current,
        decrement: ()=> -- current,
        reset: ()=> current=init
    }
};



 const counter =  createCounter(5)
 console.log(counter.increment()); // 6
 console.log(counter.reset()); // 5
 console.log(counter.decrement()); // 4



 