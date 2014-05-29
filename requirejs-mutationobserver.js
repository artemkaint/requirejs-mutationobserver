(function (root, factory) {
  if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory(require('WeakMap', 'MutationObserver', './lib/jquery.mutationobserver'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['WeakMap', 'MutationObserver', './lib/jquery.mutationobserver'], factory);
  } else {
    // Global Variables
    root.returnExportsGlobal = factory(root.WeakMap, root.MutationObserver, root.JQueryMutationobserver);
  }
}(this, function (WeakMap, MutationObserver, JQueryMutationobserver) {
  if(window.MutationObserver) {
    return window.MutationObserver;
  } else if(window.MutationEvent) {
    return MutationObserver;
  } else {
    return JQueryMutationobserver;
  }
}));
