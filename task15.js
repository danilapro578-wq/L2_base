function howManyTimes(time1,time2){
  
  let start = Date.parse(time1.replace(' ', 'T')+ 'Z');
  
  let end = Date.parse(time2.replace(' ', 'T') + 'Z');
  
  let dayMs = 24 * 60 * 60 * 1000;
  
  let fullDay = Math.floor((end - start) / dayMs);
  
  let strikes = fullDay * 180;
  
  start = start + fullDay * dayMs;
  
  
  for (let t = start; t<end; t+=1000)
    {
      let date = new Date(t);
      
      let hour = date.getUTCHours() % 12;
      
      if(hour === 0)
        {
          hour = 12;
        }
      
      let minute = date.getUTCMinutes();
      
      let second = date.getUTCSeconds();
      
      if(minute === 0 && second < hour)
        {
          strikes++;
        }
      else if (minute === 30 && second === 0)
        {
          strikes++;
        }
    }
  
  return strikes;
  //coding here...
  
  
}
