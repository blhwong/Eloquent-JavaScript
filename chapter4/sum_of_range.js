// Your code here.
function range(start, end, step)
{
    result = [];
    if(step == undefined)
    {
        step = 1;
    }
    if(step < 0)
    {
        for(var i = start; i >= end; i+=step)
        {
            result.push(i);;
        }
    }
    else
    {
        for(var i = start; i <= end; i+=step)
        {
            result.push(i);
        }
    }
    return result;
}
function sum(array)
{
    result = 0;
    for(var i = 0; i < array.length; i++)
    {
        result+=array[i];
    }
    return result;
}
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
