import React, { useState } from 'react'
import IndexStyles from './index.module.css'
import Img from 'gatsby-image'
import { Link, graphql } from 'gatsby'
import { motion, AnimatePresence } from 'framer-motion'

import Layout from '../layout/layout'
import Logo from '../images/stormlessard-logo.svg'
import Block from '../components/block'
import Browser from '../images/top-bar.svg'

const IndexPage = ({ data }) => {

    const [ preview, setPreview ] = useState(null)
    const projectsArr = data.allProjectsJson.edges

    console.log(projectsArr)

    return (
        <Layout pageTitle='Home'>
            <div className={IndexStyles.container}>

                    <div className={IndexStyles.logo}>
                        <img src={Logo} alt='logo' />
                    </div>

                    <div className={IndexStyles.content}>

                        <div className={IndexStyles.about}>
                            <p>Ty Lessard is a developer and designer from Providence, RI. He enjoys finding different ways to approach the user experience. 
                            <span className={IndexStyles.learn}>Learn more</span>.
                            </p>
                        </div>

                        <div className={IndexStyles.projects}>
                                {projectsArr.map( (item, pos) => {
                                    return (
                                        <div className={IndexStyles.projectItem}>
                                            <Link 
                                                key={pos} 
                                                className={IndexStyles.projectImage}
                                                to={`/projects/${item.node.slug}`}>
                                                <Img 
                                                    fluid={item.node.image.childImageSharp.fluid}
                                                    alt={item.node.title}
                                                    style={{ boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }} />
                                            </Link>
                                            <div 
                                                className={IndexStyles.projectTitle}>{item.node.title}</div>
                                        </div>
                                    )
                                } )}
                        </div>

                    </div>
                        {/* <Block title='Projects'>
                            {projectsArr.map( (item, pos) => {
                                return <a 
                                    key={pos}
                                    href={`/projects/${item.node.slug}`}
                                    onMouseOver={() => console.log(item)}
                                    // onMouseEnter={() => setPreview(item.node.image.childImageSharp.fluid)}
                                    onMouseEnter={() => setPreview(item.node.image.publicURL)}
                                    onMouseLeave={() => setPreview(null)}>{item.node.title}</a>
                            })}
                        </Block> */}

                        {/* <Block title='Social'>
                            <React.Fragment>
                                <a href='https://www.twitter.com/StormNotDavis'>@stormnotdavis</a>
                                <a href='https://www.twitter.com/StormNotDavis'>instagram/stormlessard</a>
                            </React.Fragment>
                        </Block> */}

                        {/* <Block title='Contact'>
                            <React.Fragment>
                                <Link to='/form'>Inquiry form</Link>
                            </React.Fragment>
                        </Block> */}

                {/* <div className={IndexStyles.image}>
                    <AnimatePresence exitBeforeEnter>
                        {preview && 
                            <motion.div 
                                className={IndexStyles.preview}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}>
                                    <img 
                                        src={Browser} 
                                        alt='browser address bar'
                                        className={IndexStyles.address} />
                                    <img 
                                        src={preview}
                                        alt=''
                                        className={IndexStyles.browser} />
                            </motion.div>
                        }
                    </AnimatePresence>
                </div> */}

            </div>
        </Layout>
    )
}

export default IndexPage

export const query = graphql`
    query {
        allProjectsJson {
            edges {
                node {
                    title
                    slug
                    image {
                        childImageSharp {
                            fluid(maxWidth: 900) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    }
`