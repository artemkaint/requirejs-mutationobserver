define([
  'MutationObserver',
  './lib/jquery.mutationobserver'
], function(MutationObserver, JQueryMutationObserver){
  if(window.MutationObserver) {
    return window.MutationObserver;
  } else if(window.MutationEvent) {
    return MutationObserver;
  } else {
    return JQueryMutationObserver;
  }
});