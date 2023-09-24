// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-expm1@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log1p@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ln-half@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.0-esm/index.mjs";function m(t,i,m){var d;return s(t)||s(i)||s(m)||m<=0?NaN:(d=(t-i)/m,t<i?r+d:r+n(-e(-d)))}function d(t,m){return s(t)||s(m)||m<=0?i(NaN):function(i){var d;if(s(i))return NaN;if(d=(i-t)/m,i<t)return r+d;return r+n(-e(-d))}}t(m,"factory",d);export{m as default,d as factory};
//# sourceMappingURL=index.mjs.map
