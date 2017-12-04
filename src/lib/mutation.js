import { equals, forEach } from 'ramda'
import { elForEach } from './'

export default (
  (rootEl, subtree, callback) => {
    const { WebKitMutationObserver } = window

    if (WebKitMutationObserver) {
      const attrModified = mutation => {
        const { attributeName = '', target, addedNodes } = mutation
        if (equals('style', attributeName)) {
          callback(target)
        }
        if (addedNodes && addedNodes.length > 0) {
          elForEach(el => callback(el), addedNodes)
        }
      }
      (new WebKitMutationObserver(mutations => forEach(attrModified, mutations)))
      .observe(rootEl, { attributes: true, childList: true, subtree })
    } else {
      console.log('no support WebKitMutationObserver')
    }
  }
)
