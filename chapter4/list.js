// Your code here.
function arrayToList(array)
{
    var listSoFar = {
        value:array[array.length - 1],
        rest:null
    }
    for(var i = array.length - 2; i >=0; i--)
    {
        var currentList =
        {
            value:array[i],
            rest:listSoFar
        }
        listSoFar = currentList;
    }
    return listSoFar;
}
function listToArray(list)
{
    result = [];
    for(var node = list; node; node = node.rest)
    {
        result.push(node.value);
    }
    return result;
}
function prepend(element, list)
{
    var head =
    {
        value:element,
        rest:list
    }
    return head;
}
function nth(list, index)
{
    if(index == 0)
    {
        return list!=null?list.value:undefined
    }
    else
    {
        return nth(list.rest, index - 1);
    }

}
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
