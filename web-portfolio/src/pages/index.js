import * as React from "react"
import Layout from '../components/layout'
import radishGif from '../gifs/radish-spirited.gif'
import { ParallaxLayer } from '@react-spring/parallax'

// markup
const IndexPage = () => {
  return (
    <Layout>
      <ParallaxLayer
        offset={0}
        speed={2.5}
        factor={1}
        style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', color: 'grey' }}>
        <img src={radishGif} alt="radish god dancing" />
        <p>Hello there, i'm Luke</p>
      </ParallaxLayer>
    

      <ParallaxLayer offset={1} speed={0.5} style={{ }} />

      <ParallaxLayer
      offset={1}
      speed={0.5}
      style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'grey',
      }}>
      <p>Scroll up</p>
      </ParallaxLayer>
    </Layout>
  )
}

export default IndexPage
