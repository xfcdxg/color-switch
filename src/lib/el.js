import { compose, toUpper, toLower, join, lte, equals, not, indexOf, replace, forEach, prop, addIndex } from 'ramda'
import { elForEach, attr, el, els, nostep, transHex2Rgb } from './'

let localFromColorList = []
let localToColorList = []

const getTo = (color, to) => {
  addIndex(forEach)((fromColor, idx) => {
    color = compose(nostep, toUpper)(color)
    if (compose(lte(0), indexOf(color), nostep, toUpper, join(''), transHex2Rgb)(fromColor)) {
      to = localToColorList[idx]
    }
  }, localFromColorList)

  return to
}
const diffAttr = attrName => el => {
  const to = compose(getTo, toUpper)(attr(el, attrName))
  if (to) {
    attr(el, attrName, to)
  }
}
const diffStyle = styleName => el => {
  const to = compose(getTo, toUpper, prop(styleName), getComputedStyle)(el)

  if (to) {
    el.style[styleName] = to
  }

  return el
}

const processEl = el => {
  if (compose(equals('PATH'), toUpper, prop('tagName'))(el)) {
    diffAttr('fill')(el)
  } else {
    compose(
      diffStyle('backgroundColor'),
      diffStyle('color'),
      diffStyle('borderColor')
    )(el)
  }
}

export default (
  (fromColorList, toColorList, target) => {
    // if not HTMLElement
    if (compose(not, equals(1), prop('nodeType'))(target)) return

    localFromColorList = fromColorList
    localToColorList = toColorList

    // self
    processEl(target)
    // children
    elForEach(el => processEl(el), els('*', target))
  }
)
