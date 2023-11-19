let user =  {
    fname: "ghadah",
    lname: "aljuhani",
}

let printFull = function(age) {
    console.log("HI, " + this.fname+" "+ this.lname+ " .your age is:"+age);
}
printFull.call(user, "22"); //call fun
printFull.apply(user, [22]); //apply fun
let newfun = printFull.bind(user); // bind fun
newfun("22");
