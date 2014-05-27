define([], function(){
  if(window.MutationObserver) {
    return window.MutationObserver;
  } else if(window.MutationEvent) {
    return require('MutationObserver');

  } else {
    return require('./lib/jquery.mutationobserver');
  }
});