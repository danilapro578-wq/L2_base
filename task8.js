function expandedForm(num) {
  let str = num.toString();  // число в строку
  
  let result = []; // разбиение на массив символов
  
  for(let i=0; i<str.length; i++)
    {
      if (str[i] !== '0')    // вычисление разряда
        {
          let zeros = str.length - 1 -i;
          
          let part = str[i] + '0'.repeat(zeros);
          
          result.push(part);
        }
    }
  
  return result.join(' + ');   // сборка черезе +
  // Your code here
}