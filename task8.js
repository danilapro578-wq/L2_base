function expandedForm(num) {
  let str = num.toString();  
  
  let result = []; 
  
  for(let i=0; i<str.length; i++)
    {
      if (str[i] !== '0') 
        {
          let zeros = str.length - 1 -i;
          
          let part = str[i] + '0'.repeat(zeros);
          
          result.push(part);
        }
    }
  
  return result.join(' + ');  
  // Your code here
}
