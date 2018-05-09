function isTriangle(a,b,c)
{
   if(a <= 0 || b <= 0 || c <= 0)
     return false;
   else if(a + b <= c) 
     return false;
   else if(b + c <= a)
     return false;
   else if(c + a <= b)
     return false;
   else
     return true;
}