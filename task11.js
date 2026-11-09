function domainName(url) {
  let result = url;

  result = result.replace('http://', '');
  result = result.replace('https://', '');
  result = result.replace('www.', '');

  let parts = result.split('.');

  return parts[0];
}