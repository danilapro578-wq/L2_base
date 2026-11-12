function cache(func) {
  
  let memo ={};
  
  function wrapper(...args)
  {
    let key = JSON.stringify(args);
    
    let isSaved = key in memo;
    
    if (isSaved)
      {
        return memo[key];
      }
    
    let result = func(...args);
    
    memo[key] = result;
    
    return result;
  }
  
  return wrapper;
  // do your magic here
}