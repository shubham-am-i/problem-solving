// function to get max occured char in string

function maxChar(string) {
  // generate charMap = {}
  const stringMap = genCharMap(string)

  let maxCount = 0,
    maxChar = ''
  for (const char in stringMap) {
    if (stringMap[char] > maxCount) {
      maxCount = stringMap[char]
      maxChar = char
    }
  }

  return maxChar
}
const inputStr = 'mahabharat'
console.log(`Max Char in ` + inputStr + ` is ` + maxChar(inputStr))

function genCharMap(str) {
  let charMap = {}

  for (char of str) charMap[char] = charMap[char] + 1 || 1
  console.log(charMap)
  return charMap
}
