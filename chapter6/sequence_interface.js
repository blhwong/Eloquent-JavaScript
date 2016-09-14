// Your code here.
function ArraySeq(array)
{
 	this.array = array;
  	this.pos = -1;
  
}
ArraySeq.prototype.current = function()
{
 	return this.array[this.pos]; 
}
ArraySeq.prototype.next = function()
{
	if(this.pos >= this.array.length - 1)
    {
      	return false;
    }
  	this.pos++;
  	return true;
  
}

function RangeSeq(start, end)
{
  	this.start = start - 1;
  	this.end = end;
}
RangeSeq.prototype.next = function()
{
  	if(this.start >= this.end)
    {
     	return false 
    }
  	this.start++;
  	return true;
}
RangeSeq.prototype.current = function()
{
  	return this.start;
}

function logFive(seq)
{
  	for(var i = 0; i < 5; i++)
    {
     	if(!seq.next())
        {
         	break; 
        }
      	console.log(seq.current());
    }
  
}
logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104