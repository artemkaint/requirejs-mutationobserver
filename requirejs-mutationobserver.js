define([
  'WeakMap',
  'MutationObserver',
  './lib/jquery.mutationobserver'
], function(WeakMap, MutationObserver, JQueryMutationObserver){
  if(window.MutationObserver) {
    return window.MutationObserver;
  } else if(window.MutationEvent) {
    return MutationObserver;
  } else {
    return JQueryMutationObserver;
  }
});