const checkPalindrome = (number)=>{
  let digits = number.toString().split('')
    if(digits.length<=1)
      return true
  if(digits.length%2)
    digits.splice((digits.length-1)/2,1)
  return digits.slice(0,digits.length/2).every((digit,i)=>digit===digits[digits.length-i-1])
}
const reverseNumber = (number)=>{
  if(number!==number && typeof number !=='number')
    return 0
  return parseInt(number.toString().split('').reverse().join(''))
}

const recursiveFlatArray = (array,result=[]) => {
  if(array.length==undefined)
      result.push(array)
  else
    result.concat(array.forEach(arr=>flattenAndSort(arr,result)))
  return result;
}
