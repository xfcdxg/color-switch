import Layout from '../components/layout'
import colorList from '../lib/color'
import colorSwitch from '../color-switch'

export default (
  () => (
    <Layout>
      <h1 style={{ color: colorList[0] }}>Im Color Switch</h1>
      <h2 style={{ color: colorList[1] }}>Im Color Switch</h2>
      <h3 style={{ color: colorList[2] }}>Im Color Switch</h3>
    </Layout>
  )
)
