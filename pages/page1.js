import colorList from '../lib/color'
import Layout from '../components/layout'

export default (
  () => (
    <Layout>
      <h1 style={{ color: colorList[0] }}>Im Page1</h1>
      <h2 style={{ color: colorList[1] }}>Im Page1</h2>
      <h3 style={{ color: colorList[2] }}>Im Page1</h3>
    </Layout>
  )
)
