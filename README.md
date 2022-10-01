<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Median

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Weibull][weibull-distribution] distribution [median][median].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [median][median] for a [Weibull][weibull-distribution] random variable is

<!-- <equation class="equation" label="eq:weibull_median" align="center" raw="\operatorname{Median}\left( X \right) = \lambda(\ln(2))^{1/k}" alt="Median for a Weibull distribution."> -->

<div class="equation" align="center" data-raw-text="\operatorname{Median}\left( X \right) = \lambda(\ln(2))^{1/k}" data-equation="eq:weibull_median">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/weibull/median/docs/img/equation_weibull_median.svg" alt="Median for a Weibull distribution.">
    <br>
</div>

<!-- </equation> -->

where `lambda > 0` is the [shape parameter][shape] and `k > 0` is the [scale parameter][scale].

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import median from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-weibull-median@esm/index.mjs';
```

#### median( k, lambda )

Returns the [median][median] of a [Weibull][weibull-distribution] distribution with parameters `k` (shape parameter) and `lambda` (scale parameter).

```javascript
var v = median( 1.0, 1.0 );
// returns ~0.693

v = median( 4.0, 12.0 );
// returns ~10.949

v = median( 8.0, 2.0 );
// returns ~1.91
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = median( NaN, 2.0 );
// returns NaN

v = median( 2.0, NaN );
// returns NaN
```

If provided `k <= 0`, the function returns `NaN`.

```javascript
var v = median( 0.0, 1.0 );
// returns NaN

v = median( -1.0, 1.0 );
// returns NaN
```

If provided `lambda <= 0`, the function returns `NaN`.

```javascript
var v = median( 1.0, 0.0 );
// returns NaN

v = median( 1.0, -1.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import EPS from 'https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-eps@esm/index.mjs';
import median from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-weibull-median@esm/index.mjs';

var lambda;
var k;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    k = ( randu()*10.0 ) + EPS;
    lambda = ( randu()*10.0 ) + EPS;
    v = median( k, lambda );
    console.log( 'k: %d, λ: %d, Median(X;k,λ): %d', k.toFixed( 4 ), lambda.toFixed( 4 ), v.toFixed( 4 ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-weibull-median.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-weibull-median

[test-image]: https://github.com/stdlib-js/stats-base-dists-weibull-median/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-weibull-median/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-weibull-median/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-weibull-median?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-weibull-median.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-weibull-median/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-weibull-median/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-weibull-median/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-weibull-median/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-weibull-median/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-weibull-median/main/LICENSE

[weibull-distribution]: https://en.wikipedia.org/wiki/Weibull_distribution

[median]: https://en.wikipedia.org/wiki/Median

[shape]: https://en.wikipedia.org/wiki/Shape_parameter

[scale]: https://en.wikipedia.org/wiki/Scale_parameter

</section>

<!-- /.links -->
