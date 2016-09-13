// Your code here.
function isEven(i)
{
    if(i < 0)
    {
        i*=-1;
    }
    if(i%2 == 0)
    {
        return true;
    }
    else if(i%2 == 1)
    {
        return false;
    }
    else
    {
        return isEven(i-2);
    }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
