function genKey(){
  let id = 0;
  const map = new Map()

  return function (input){
    if(map.has(input)) return map.get(input)
    map.set(input, ++id);
    return id
  }
}

function memoize(fn){
  const keyFn = genKey()
  const cache = new Map()

  return function (...args){
    const numbers = args.map(keyFn)

    const key = numbers.join(',')
    if(cache.has(key)) return cache.get(key)
    const result = fn(...args)
  cache.set(key,result)
  return result
  }

}