
// You should implement your task here.

module.exports = function towelSort(matrix) {
  return !matrix ? [] : !matrix.length ? [] : matrix.map((e,i)=> (i%2)?e.reverse():e).join(',').split(',');
}