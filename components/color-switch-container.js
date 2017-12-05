import { Component } from 'react'
import colorSwitch from '../color-switch'
import defaultColor, { colorSwitchList } from '../lib/color'

let currentIndex = -1

class ColorSwitchContainer extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(target, colors, idx) {
    if (currentIndex >= 0) return

    // start
    colorSwitch(defaultColor.map(color => [color]), colors)
    // end

    this.afterClick(target)
    currentIndex = idx
  }
  afterClick(target) {
    target.parentNode.parentNode.querySelectorAll('li').forEach(o => {
      o.style.filter = 'grayscale(1)'
      o.style.opacity = '.5'
    })
    target.parentNode.style.filter = ''
    target.parentNode.style.opacity = '1'
    target.parentNode.className += ' active'

  }
  presetNode(target, idx) {
    if (target === null || currentIndex < 0) return

    if (currentIndex === idx) {
      target.className += ' active'
    } else {
      target.style.filter = 'grayscale(1)'
      target.style.opacity = '.5'
    }
  }
  render() {
    return (
      <ul>
        {
          colorSwitchList.map((colors, idx) => (
            <li key={ colors.join('') } ref={ node => this.presetNode(node, idx) } onClick={ ({ target }) => this.handleClick(target, colors, idx) } >
              {
                colors.map(color => (
                  <span className='color' key={ color } style={{ backgroundColor: color }}></span>
                ))
              }
            </li>
          ))
        }
        <style jsx>{`
          ul {
            margin: 0;
            padding: 0;
          }
          li {
            list-style: none;
            display: inline-block;
            margin-right: 10px;
            border: 1px solid #fff;
            height: 20px;
            cursor: pointer;
          }
          li.active {
            border-color: #2b2b2b;
            box-shadow: 0px 0px 10px 1px rgba(0,0,0,.5)
          }
          li:hover {
            border-color: #2b2b2b;
            box-shadow: 0px 0px 10px 1px rgba(0,0,0,.5)
          }
          .color {
            display: inline-block;
            width: 20px;
            height: 20px;
          }
        `}</style>
      </ul>
    )
  }
}

export default ColorSwitchContainer
