import ColorSwitchContainer from './color-switch-container'
import Title from './title'
import SubTitle from './sub-title'
import Nav from './nav'
import Head from './head'

export default (
  ({ children }) => (
    <div>
      <Head />
      <Title />
      <SubTitle title='Switch Color :' />
      <ColorSwitchContainer key='color-switch-container' />
      <SubTitle title='Switch Page :' />
      <Nav />
      <div>{ children }</div>
      <style jsx global>
        {`
          body {
            padding: 16px;
            margin: 0
          }
        `}
      </style>
    </div>
  )
)
