# color-switch

[![npm][npm-image]][npm-url]

用于切换站内主题色

更改样式包含：color、border-color、background-color

支持SVG

方法只需要在进入页面时调用一次，调用后会监听 DOM Tree 及 StyleTag 的更新，动态修改内部相关的色值

如果是SSR，建议在Client端调用（因为Server端不支持...略略略）

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

[npm-image]:https://img.shields.io/badge/npm-v1.0.1-green.svg
[npm-url]:https://www.npmjs.com/package/color-switcher
