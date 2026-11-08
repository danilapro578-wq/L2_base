function whatCentury(year)
{
  let numberYear = parseInt(year, 10);   // Перевод года в число и вычисление века
  
  let century = Math.ceil(numberYear / 100);
  
  // Опредлеление суффукса
  let sufix = "th";
  
  let lastDigit = century % 10;
  
  let lastTwoDigits = century % 100;
  
  if(lastTwoDigits < 11 || lastTwoDigits > 13)     // Исключения (11,12,13 т.к. у них всегда th)
    {
      if (lastDigit === 1 )
        {
          sufix = "st";
        }
      else if (lastDigit === 2)
        {
          sufix = "nd";
        }
      else if (lastDigit === 3) 
        {
          sufix ="rd";
        }
        
    }
  return century + sufix;
  // code must go here
}