// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,a=e.__defineGetter__,i=e.__defineSetter__,u=e.__lookupGetter__,f=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,y,l,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((y="value"in n)&&(u.call(r,t)||f.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),l="get"in n,p="set"in n,y&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&a&&a.call(r,t,n.get),p&&i&&i.call(r,t,n.set),r};var c=t;function y(r){return r!=r}var l="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var p=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var b,A="function"==typeof Symbol?Symbol.toStringTag:"";b=l&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,o,a;if(null==r)return p.call(r);n=r[A],a=A,t=null!=(o=r)&&v.call(o,a);try{r[A]=void 0}catch(t){return p.call(r)}return e=p.call(r),t?r[A]=n:delete r[A],e}:function(r){return p.call(r)};var _=b,w="function"==typeof Uint32Array;var m="function"==typeof Uint32Array?Uint32Array:null;var d,U="function"==typeof Uint32Array?Uint32Array:void 0;d=function(){var r,t,n;if("function"!=typeof m)return!1;try{t=new m(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(w&&n instanceof Uint32Array||"[object Uint32Array]"===_(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?U:function(){throw new Error("not implemented")};var s=d,N="function"==typeof Float64Array;var j="function"==typeof Float64Array?Float64Array:null;var h,g="function"==typeof Float64Array?Float64Array:void 0;h=function(){var r,t,n;if("function"!=typeof j)return!1;try{t=new j([1,3.14,-3.14,NaN]),n=t,r=(N&&n instanceof Float64Array||"[object Float64Array]"===_(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?g:function(){throw new Error("not implemented")};var S=h,E="function"==typeof Uint8Array;var F="function"==typeof Uint8Array?Uint8Array:null;var I,O="function"==typeof Uint8Array?Uint8Array:void 0;I=function(){var r,t,n;if("function"!=typeof F)return!1;try{t=new F(t=[1,3.14,-3.14,256,257]),n=t,r=(E&&n instanceof Uint8Array||"[object Uint8Array]"===_(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?O:function(){throw new Error("not implemented")};var T=I,P="function"==typeof Uint16Array;var V="function"==typeof Uint16Array?Uint16Array:null;var G,k="function"==typeof Uint16Array?Uint16Array:void 0;G=function(){var r,t,n;if("function"!=typeof V)return!1;try{t=new V(t=[1,3.14,-3.14,65536,65537]),n=t,r=(P&&n instanceof Uint16Array||"[object Uint16Array]"===_(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?k:function(){throw new Error("not implemented")};var x,Y={uint16:G,uint8:T};(x=new Y.uint16(1))[0]=4660;var C=52===new Y.uint8(x.buffer)[0],q=!0===C?1:0,z=new S(1),B=new s(z.buffer);function D(r){return z[0]=r,B[q]}var H=!0===C?1:0,J=new S(1),K=new s(J.buffer);function L(r,t){return J[0]=r,K[H]=t>>>0,J[0]}var M=Number.POSITIVE_INFINITY,Q=Number.NEGATIVE_INFINITY;var R=.6931471803691238,W=1.9082149292705877e-10;function X(r){var t,n,e,o,a,i,u,f,c,l,p,v;if(r===M||y(r))return r;if(r===Q)return-1;if(0===r)return r;if(r<0?(n=!0,u=-r):(n=!1,u=r),u>=38.816242111356935){if(n)return-1;if(u>=709.782712893384)return M}if(a=0|D(u),u>.34657359027997264)u<1.0397207708399179?n?(e=r+R,o=-W,v=-1):(e=r-R,o=W,v=1):(v=n?1.4426950408889634*r-.5:1.4426950408889634*r+.5,e=r-(l=v|=0)*R,o=l*W),c=e-(r=e-o)-o;else{if(a<1016070144)return r;v=0}return i=1+(f=r*(t=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(f),p=f*((i-(l=3-i*t))/(6-r*l)),0===v?r-(r*p-f):(p=r*(p-c)-c,p-=f,-1===v?.5*(r-p)-.5:1===v?r<-.25?-2*(p-(r+.5)):1+2*(r-p):v<=-2||v>56?(u=L(u=1-(p-r),e=D(u)+(v<<20)|0))-1:(l=1,v<20?u=(l=L(l,e=1072693248-(2097152>>v)|0))-(p-r):(u=r-(p+(l=L(l,e=1023-v<<20|0))),u+=1),L(u,e=D(u)+(v<<20)|0)))}var Z=.6931471803691238,$=1.9082149292705877e-10;function rr(r){var t,n,e,o,a,i,u,f,c,l;if(r<-1||y(r))return NaN;if(-1===r)return Q;if(r===M)return r;if(0===r)return r;if(l=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,o=r,n=1)}return 0!==l&&(e<9007199254740992?(a=(l=((n=D(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),a/=c):(l=((n=D(c=r))>>20)-1023,a=0),(n&=1048575)<434334?c=L(c,1072693248|n):(l+=1,c=L(c,1071644672|n),n=1048576-n>>2),o=c-1),t=.5*o*o,0===n?0===o?l*Z+(a+=l*$):l*Z-((f=t*(1-.6666666666666666*o))-(l*$+a)-o):(f=(u=(i=o/(2+o))*i)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===l?o-(t-i*(t+f)):l*Z-(t-(i*(t+f)+(l*$+a))-o))}var tr=-.6931471805599453;function nr(r,t,n){var e;return y(r)||y(t)||y(n)||n<=0?NaN:(e=(r-t)/n,r<t?tr+e:tr+rr(-X(-e)))}function er(r,t){return y(r)||y(t)||t<=0?(n=NaN,function(){return n}):function(n){var e;if(y(n))return NaN;if(e=(n-r)/t,n<r)return tr+e;return tr+rr(-X(-e))};var n}c(nr,"factory",{configurable:!1,enumerable:!1,writable:!1,value:er});export{nr as default,er as factory};
//# sourceMappingURL=mod.js.map
