function longest(arr, n) {
  let sorted = arr.slice().sort((a,b) => 
                                {
    if(b.length !== a.length)
      {
        return b.length - a.length;
      }
    
    return arr.indexOf(a) - arr.indexOf(b);
  });
  
  return sorted[n-1];
//code me
}
