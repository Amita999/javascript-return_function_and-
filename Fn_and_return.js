function mulFive(num)
{
    return (num*5);
}
console.log("the returned valu of function by passing 5 is "+mulFive(5));
function mulFive1(num)
{
    //return (num*5);
}
console.log("the returned valu of function by passing 5 and not defining the return statement is "+mulFive1(5));//undefined
//Assignment of the return value to variable
var storingReturnedValue = 0;
function storedValue(num)
{
    return (num*5)/3;
}
console.log("The variable returns the value "+(storingReturnedValue = storedValue(5)) );