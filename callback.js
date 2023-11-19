function sum (first , seconed){
    return first + seconed
}

function sub (first , seconed){
    return first - seconed
}

function operastion(first , seconed , opCallback){
    return `[${opCallback(first , seconed)}]`
}
console.log(operastion(2,3,sum));

console.log(operastion(2,3, (first , seconed) => first + seconed));