// Design a memoization function which adds 10 to provided value and  and take it from cache if it was already calculated.

const memoizeAdd = () => {
  let cache = {}

  return (value) => {
    if (value in cache) {
      console.log('fetching from cache')
      return cache[value]
    } else {
      console.log('calculating results')
      const result = value + 10
      cache[value] = result
      return result
    }
  }
}

const newAdd = memoizeAdd()
console.log(newAdd(9))
console.log(newAdd(9))

// Memoization is an optimization technique that can be used to reduce time-consuming calculations by saving previous input to something called cache and returning the result from it next time for same input.
