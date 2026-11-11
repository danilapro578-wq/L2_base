function isCircleSorted( arr ){
  let drops = 0;
  
  for(let i=0; i<arr.length; i++)
    {
      if (arr[i] > arr[(i+1) % arr.length]) 
        {
          drops++;
        }
    }
  
  if( drops <=1 )
    {
      return true
    }
  else
    {
      return false
    }
  // ...
}