<p align="center">
  <h1 align="center">NTW</h1>
  <p align="center"><b>N</b>umber <b>T</b>o <b>W</b>ord</p>
</p>

[![NPM package][npm-img]][npm-url]
[![Build Size][build-size-img]][build-size-url]
[![NPM Downloads][npm-downloads-img]][npm-downloads-url]

A tiny utility function for converting numbers to their number words. Currently only support numbers to English words.

## Installation

```
npm i @mustafamilyas/ntw
#or
yarn add @mustafamilyas/ntw
```

## How To Use It

This library only converts when the provided argument is a `number`

```
import { ntw } from '@mustafamilyas/ntw'

ntw('some wrong arguments') // => ""
ntw(12353) // => "twelve thousand three hundred fifty three"
ntw(100000) // => "one hundred thousand"
ntw(672343602049) // => "six hundred seventy two billion three hundred forty three million six hundred two thousand forty nine"
```

## Feedback

No standard rule, you can ask me through this repository or if you prefer email then please send it to emailpribadiilyas@gmail.com

[npm-img]: https://img.shields.io/npm/v/@mustafamilyas/ntw
[npm-url]: https://npmjs.org/package/@mustafamilyas/ntw
[build-size-img]: https://img.shields.io/bundlephobia/minzip/@mustafamilyas/ntw
[build-size-url]: https://bundlephobia.com/result?p=@mustafamilyas/ntw
[npm-downloads-img]: https://img.shields.io/npm/dt/@mustafamilyas/ntw
[npm-downloads-url]: https://www.npmtrends.com/@mustafamilyas/ntw
