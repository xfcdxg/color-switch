# color-switch

用于切换站内主题色

[![npm][npm-image]][npm-url]

### Demo

[Demo][demo-url]

### Example

[Example][example-url]

### Scope

DOMElement

  * color
  * border-color
  * background-color

StyleSheet

  * color
  * border-color
  * background-color

SVG

  * fill

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

### Attention

只需在进入页面时调用该方法，调用后会监听 DOM Tree 及 StyleTag 的变化，动态修改内部相关的色值

如果是 SSR，建议在 Client 端调用（因为 Server 端不支持...略略略）

[npm-image]:https://img.shields.io/badge/npm-v1.0.3-green.svg
[npm-url]:https://www.npmjs.com/package/color-switch
[demo-url]:https://xfcdxg.github.io/color-switch/
[example-url]:https://github.com/xfcdxg/color-switch-example.git
