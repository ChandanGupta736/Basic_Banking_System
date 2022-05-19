exports.currdate=function(){
  let date = new Date();
  return date.toLocaleDateString('en-GB');
}
exports.currtime=function(){
  let date = new Date();
  return date.toLocaleTimeString('en-US');
}
