# color-switch

[![npm][npm-image]][npm-url]

用于切换站内主题色，切换样式包含：color、border-color、background-color

只需要在进入页面时调用一次，之后会监听 Dom 及 StyleSheet 的更新，动态修改。

### Installation
```bash
  $ npm install color-switch --save
```

### Usage

```js
  import colorSwitch from 'color-switch'

  const fromColorList = [
    ['000', 'rgb(255, 255, 255)'],  // [hex (black), rgb (white)] to #50A5FC (blue)
    ['#007eff']                     // [hex (blue)] to rgb(255, 86, 12) (red)
  ]
  const toColorList = ['#50A5FC', 'rgb(255, 86, 12)'] // [hex (blue), rgb (red)]

  colorSwitch(fromColorList, toColorList)
```

[npm-image]:https://img.shields.io/badge/npm-v1.0.0-green.svg
[npm-url]:https://www.npmjs.com/package/color-switcher
