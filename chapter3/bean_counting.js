// Your code here.
function countBs(word)
{
    return countChar(word, "B");
}
function countChar(word, character)
{
    var count = 0;
    for(var i = 0; i < word.length; i++)
    {
        if(word.charAt(i) == character)
        {
            count++;
        }
    }
    return count;
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
