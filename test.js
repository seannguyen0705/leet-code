function test (){
    let val = 12
    return function (input){
        if(input){
            val = input
            return val
        }
        return val
    }
}



const foo = test()

const bar= test()


console.log(foo(1))
console.log(bar(0))