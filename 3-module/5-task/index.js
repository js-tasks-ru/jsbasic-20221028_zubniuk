function getMinMax(str) {
  const num = str.split(' ')
  .filter(item => !isNaN(item))
  .map(item => +item);
return {max: Math.max(...num), min: Math.min(...num)};
}
