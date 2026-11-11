function primeFactors(n){
  let result = "";
  
  for (let p = 2; p*p<=n; p++)
    {
      let count = 0;
      
      while (n % p === 0)
        {
          n /= p;
          
          count ++;
        }
      
      if (count > 0)
        {
          let text = `(${p}`;
          
          if (count > 1)
            {
              text += `**${count}`;
            } 
          
          text = text + ")";
          
          result = result + text;
        }
      
      
    }
  
  if (n>1)
    {
      result = result + `(${n})`;
    }
  
  return result;
    //your code here
}