function bingo(ticket, win){
  let miniWins = 0;
  
  for (let i = 0; i<ticket.length; i++)
    {
      let str = ticket[i][0];
      
      let num = ticket[i][1];
      
      for (let j = 0; j<str.length; j++)
        {
          if(str.charCodeAt(j) === num)
            {
              miniWins++;
              break;
            }
        }
    }
  
  if (miniWins >= win)
    {
      return "Winner!";
    }
  else
    {
      return "Loser!";
    }

}