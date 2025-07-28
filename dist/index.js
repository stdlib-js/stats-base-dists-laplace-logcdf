"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=o(function(O,c){
var n=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-special-expm1/dist'),g=require('@stdlib/math-base-special-log1p/dist'),v=require('@stdlib/constants-float64-ln-half/dist');function y(e,r,t){var i;return n(e)||n(r)||n(t)||t<=0?NaN:(i=(e-r)/t,e<r?v+i:v+g(-l(-i)))}c.exports=y
});var N=o(function(R,q){
var L=require('@stdlib/utils-constant-function/dist'),u=require('@stdlib/math-base-assert-is-nan/dist'),d=require('@stdlib/math-base-special-expm1/dist'),F=require('@stdlib/math-base-special-log1p/dist'),s=require('@stdlib/constants-float64-ln-half/dist');function z(e,r){if(u(e)||u(r)||r<=0)return L(NaN);return t;function t(i){var a;return u(i)?NaN:(a=(i-e)/r,i<e?s+a:s+F(-d(-a)))}}q.exports=z
});var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=f(),H=N();A(p,"factory",H);module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
