function ipv4Parser(ip, mask){
  let ipParts = ip.split('.').map(Number);
  
  let subnetParts = mask.split('.').map(Number);
  
  let networkParts = [];
  
  let hostParts = [];
  
  for (let i=0; i<4; i++)
    { // побитовое (И) для сети
      let net = ipParts[i] & subnetParts[i];
      networkParts.push(net);
      
      let host = ipParts[i] ^ net; // Исходная часть - сеть
      hostParts.push(host); 
    }
  
  return [networkParts.join('.'), hostParts.join('.')];
  //your code here
}