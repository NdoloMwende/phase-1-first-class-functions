function receivesAFunction(callback){
  return callback();
}
function returnsANamedFunction(){
  function namedFunction() {
    console.log("I'm named!");
  }
   return namedFunction;
}
function returnsAnAnonymousFunction(){
  return function(){
  }
}
function returnsAnArrowFunction(){
  return () =>  console.log("I'm anonymous!");
}