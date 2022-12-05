// Write a function to count the number of occurence of elements in an array.

function countElements(arr) {
  let elementMap = {} //use charMap to store element and it's count

  for (let curr of elements) {
    if (!elementMap[curr]) {
      elementMap[curr] = 1
    } else {
      elementMap[curr]++
    }
  }
  return elementMap
}

const elements = [3, 43, 2, 56, 3, 8, 9, 3, 8, 9]
console.log(countElements(elements))
