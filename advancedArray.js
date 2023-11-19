const colors = ['red' , 'blue', 'green']

const index = colors.indexOf('red')
console.log(index);
const lastindex = colors.lastIndexOf('green')
console.log(lastindex);
colors.forEach(function(currentvalue, index, array){
    console.log(currentvalue);
})

const isContainRed = colors.includes('red' )
console.log(isContainRed);
const ages = [15 , 16, 17 , 18]
const areadult = ages.every(function(element){
    return element >= 18
})
console.log(areadult);

const indexadult = ages.findIndex(function(element){
    return element >= 18
})
console.log(indexadult);
const numbers = [4, 2, 9, 8];
const hasOdd = numbers.some(number => number % 2 !== 0)
console.log(hasOdd)