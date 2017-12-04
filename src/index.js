import { equals } from 'ramda'
import { elForEach, els } from './lib'
import processStyleSheet from './lib/style'
import processEls from './lib/el'
import setMutationObserver from './lib/mutation'

export default (
  (fromColorList = [], toColorList = []) => {
    const handleProcess = (target, type = 'element') => (
      (equals('element', type) ? processEls : processStyleSheet)(fromColorList, toColorList, target)
    )
    // 改变当前节点中的色值
    elForEach(target => handleProcess(target), els('*', document.body))
    // 改变样式表里的色值
    elForEach(styleSheet => handleProcess(styleSheet, 'style'), els('style', document.head))

    // 监听 Body
    setMutationObserver(document.body, true, target => handleProcess(target))
    // 监听 Head
    setMutationObserver(document.head, false, target => handleProcess(target, 'style'))
  }
)
