// Your code here.
function deepEqual(x, y)
{
    if(Object.keys(x).length!=Object.keys(y).length)
    {
        //console.log("mismatched length");
        return false;
    }
    else
    {
        for(var i in x)
        {
            if(typeof x[i] == "object" && x[i] != null && typeof y[i] == "object" && y[i] != null)
            {
                if(!deepEqual(x[i], y[i]))
                {
                    return false;
                }
            }
            else
            {
                //console.log(x[i] + " " + y[i]);
                if(x[i] !== y[i])
                {
                    //console.log("mismatched non-object");
                    return false;
                }
            }
        }

    }
    return true;
}


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
