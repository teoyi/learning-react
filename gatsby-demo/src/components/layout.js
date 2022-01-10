import * as React from 'react'
// We want to use graphql query as well so we add it to the imports along with link 
import { Link, useStaticQuery, graphql } from 'gatsby'
// import styles (note we are importing classes specifically)
import { 
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
} from './layout.module.css'
// notice that the class names differ from what is stated in .module.css
// this is because gatsby allows for the conversion between kebab case and camel cass


const Layout = ({ pageTitle, children }) => {
    // Note that destructuring is applied to the props
    // this meant that instead of using 'props' to input information when called
    // this uses specific variables that can be defined when called 
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
      }
    `)
    
    
    return (
        <div className={container}> {/* Note we are not using class but className this is specific to jsx*/}
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <header className={siteTitle}>{data.site.siteMetadata.title}</header>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to='/' className={navLinkText}>
                            Home
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to='/about' className={navLinkText}>
                            About
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to='/blog' className={navLinkText}>
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout