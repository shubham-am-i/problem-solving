// Reverse a string using reduce

const reverse = (string) => {
  console.log(string.split('').reduce((result, char) => char + result))
}

reverse('shubham')
