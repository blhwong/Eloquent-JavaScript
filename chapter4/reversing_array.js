// Your code here.
function reverseArray(array)
{
    result = [];
    var size = array.length;
    for(var i = 0; i < size; i++)
    {
        result.push(array.pop());
    }
    return result;
}
function reverseArrayInPlace(array)
{
    for(var i = 0; i < Math.floor(array.length/2); i++)
    {
        var temp = array[array.length - 1 - i];
        array[array.length - 1 - i] = array[i];
        array[i] = temp;
    }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
