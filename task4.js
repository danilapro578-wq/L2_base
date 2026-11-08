function createPhoneNumber(numbers){
  
  let code = numbers.slice(0,3).join('');  // взять первые 3 цифры 
  
  let centralPart = numbers.slice(3,6).join('');    // взять следующие 3 цифры 
  
  let lastPart =numbers.slice (6,10).join('');   // взять следующие 4 цифры
  
  return `(${code}) ${centralPart}-${lastPart}`;
  
}
