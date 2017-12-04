import { compose, not, join, equals, replace, forEach, prop, addIndex } from 'ramda'
import { transHex2Rgb } from './'

// update style sheet
export default (
  (fromColorList, toColorList, target) => {
    if (compose(not, equals('STYLE'), prop('tagName'))) return

    addIndex(forEach)((fromColor, i) => {
      const regExp = new RegExp(compose(toLower, join('|'), transHex2Rgb)(fromColor), 'g')
      target.innerHTML = replace(regExp, toColorList[i], target.innerHTML)
    }, fromColorList)
  }
)
