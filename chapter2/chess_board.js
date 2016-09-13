var size = 8;
var pattern1 = "";
var pattern2 = "";
for(var i = 0; i < size; i++)
{
  if(i%2 ==0)
  {
    pattern1+=" ";
    pattern2+="#";
  }
  else
  {
    pattern1+="#";
    pattern2+=" ";
  }
}
for(var i = 0; i < size; i++)
{
  if(i%2==0)
  {
    console.log(pattern1);
  }
  else
  {
    console.log(pattern2);
  }
}
