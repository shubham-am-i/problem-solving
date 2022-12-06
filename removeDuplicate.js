const removeDuplicate = (arr) => {
  return arr.filter((val, index) => arr.indexOf(val) === index)
}

const uniqueElements = removeDuplicate([2, 3, 4, , 5, 6, 4, 3, 7, 8])
console.log(uniqueElements)

// indexOf will only return first index of elements
