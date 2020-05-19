function compose(...funcs) {
  return (...args)=>funcs.reduce((sum, next)=> next(sum),args)
}

const matrix = [1,2,3];

function fn1(matrix) {
  return  matrix+'function1'
}

function fn2(matrix) {
  return matrix+`function2`
}

function fn3(matrix) {
  return matrix+`function3`
}

 let res1 = fn3(fn2(fn1(matrix)))

const superOpetration = compose(fn1, fn2, fn3);
const superOpetration2 = compose(fn2, fn2, fn2);
const superPuper = compose(superOpetration, superOpetration2);
const superPuperDuper = compose(superPuper, fn2, superPuper, fn3, superOpetration2);

const res2 = superPuperDuper(matrix);
console.log(res2)
