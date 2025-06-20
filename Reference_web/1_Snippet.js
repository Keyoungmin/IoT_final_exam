setTimeout(() => {
    console.log('setTimeout');
}, 0);
setImmediate(() => {
  console.log('setImmediate');
});

/*
Timer phase에 진입할 때 타이머를 찾을수도 있고, 못찾을 수도 있음 
-> 따라서 실행 결과가 일정하지 않다

setTimeout
setImmediate

setImmediate
setTimeout
*/


fs.readFile('my-file-path.txt', () => {
  setTimeout(() => {
    console.log('setTimeout');
  }, 0);
  setImmediate(() => {
    console.log('setImmediate');
  });
});