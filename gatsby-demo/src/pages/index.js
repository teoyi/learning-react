// Step 1: Import React 
import * as React from 'react'
//import { Link } from 'gatsby' // Treat link as a <a> tag in HTML, just better
import Layout from '../components/layout'
// import new plugins 
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define components 
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      {/*note that children refers to whatever is inbetween the component tag*/}
      <p>I'm making this by following the Gatsby Tutorial.</p>
      {/*Note that alt and src are variables needed to input an image */}
      <StaticImage 
        alt="some cat man"
        src="../images/2.jpg"
      />
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage