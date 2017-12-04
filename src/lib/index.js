import { or, replace, map, compose, lte, gte, indexOf, join } from 'ramda'
import hexRgb from 'hex-rgb'

export const transHex2Rgb = colorList => (
  map(color => {
    if (or(compose(lte(0), indexOf('#'))(color), compose(gte(0), indexOf('rgb'))(color))) {
      return `rgb(${ compose(join(', '), hexRgb)(color) })`
    }
    return color
  }, colorList)
)
// get/set attribute
export const attr = (el, n, v) => {
  if (v) {
    el.setAttribute(n, v)
  } else {
    return el.getAttribute(n) || ''
  }
}

// element collection forEach
export const elForEach = (cb, els) => {
  for (let i = 0; i < els.length; i++) {
    const el = els[i]
    cb(el)
  }
}

const elBy = (method, selector, container) => container[method](selector)

export const el  = (selector, container) => elBy('querySelector', selector, container)

export const els = (selector, container) => elBy('querySelectorAll', selector, container)

export const nostep = str => replace(/ /g, '', str)
