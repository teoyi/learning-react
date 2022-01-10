import * as React from 'react'
// import { Link, useStaticQuery, graphql } from 'gatsby'
import { Parallax } from '@react-spring/parallax'
import { bg } from './layout.module.css'

const Layout = ({ children }) => {
    return (
        <div>
            <title>Home Page</title>
            <main>
                <Parallax pages={2} style={{ top: '0', left: '0', backgroundColor: '#e8e8e8' }}>
                    {children}
                </Parallax>
            </main>
        </div>
    )
}

export default Layout