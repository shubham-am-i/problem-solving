// Remove null, undefined, 0, NAN, and '' from array

const filterArray = (arr) => {
  return arr.filter((value) => value)
}

console.log(filterArray([0, '', 7, 'string', undefined, false, null]))
