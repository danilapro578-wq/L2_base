function createPhoneNumber(numbers){
  
  let code = numbers.slice(0,3).join(''); 
  
  let centralPart = numbers.slice(3,6).join('');   
  
  let lastPart =numbers.slice (6,10).join('');   
  
  return `(${code}) ${centralPart}-${lastPart}`;
  
}
