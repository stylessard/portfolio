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

                <div className={IndexStyles.text}>

                    <div className={IndexStyles.logo}>
                        <img src={Logo} alt='logo' />
                    </div>

                    <div className={IndexStyles.resume}>
                        <Block title='Bio'>
                            Ty Lessard is a developer and designer based just outside Boston, MA. He's big into the user experience and finding new and different ways to engage.
                        </Block>

                        <Block title='Projects'>
                            {projectsArr.map( (item, pos) => {
                                return <a 
                                    key={pos}
                                    href={`/projects/${item.node.slug}`}
                                    onMouseOver={() => console.log(item)}
                                    onMouseEnter={() => setPreview(item.node.image.childImageSharp.fluid)}
                                    onMouseLeave={() => setPreview(null)}>{item.node.title}</a>
                            })}
                        </Block>

                        {/* <Block title='Projects'>
                            <React.Fragment>
                                <a 
                                    href='/projects/sheps-fund'
                                    onMouseEnter={() => setCounter(1)}
                                    onMouseLeave={() => setCounter(null)}>Shep's Fund</a>
                                <a 
                                    href='/projects/fin-goods'
                                    onMouseEnter={() => setCounter(1)}
                                    onMouseLeave={() => setCounter(null)}>FIN Goods</a>
                                <a 
                                    href='/projects/separated'
                                    onMouseEnter={() => setCounter(2)}
                                    onMouseLeave={() => setCounter(null)}>Separated</a>
                                <a 
                                    href='/projects/boxseats'
                                    onMouseEnter={() => setCounter(2)}
                                    onMouseLeave={() => setCounter(null)}>Boxseats</a>
                                <a 
                                    href='/projects/seaside-rileys'
                                    onMouseEnter={() => setCounter(3)}
                                    onMouseLeave={() => setCounter(null)}>Seaside Riley's</a>
                                <a 
                                    href='/projects/kim-park'
                                    onMouseEnter={() => setCounter(4)}
                                    onMouseLeave={() => setCounter(null)}>Kim Park</a>
                                <a 
                                    href='/projects/sneaky-jesus'
                                    onMouseEnter={() => setCounter(4)}
                                    onMouseLeave={() => setCounter(null)}>Sneaky Jesus</a>
                            </React.Fragment>
                        </Block> */}

                        {/* <Block title='Social'>
                            <React.Fragment>
                                <a href='https://www.twitter.com/StormNotDavis'>@stormnotdavis</a>
                                <a href='https://www.twitter.com/StormNotDavis'>instagram/stormlessard</a>
                            </React.Fragment>
                        </Block> */}

                        <Block title='Contact'>
                            <React.Fragment>
                                <Link to='/form'>Inquiry form</Link>
                                <a href="mailto:stormlessard@gmail.com">stormlessard@gmail.com</a>
                            </React.Fragment>
                        </Block>
                    </div>

                </div>

                <div className={IndexStyles.image}>
                    <AnimatePresence exitBeforeEnter>
                        {preview && 
                            <motion.div 
                                className={IndexStyles.preview}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}>
                                    {/* <div className={IndexStyles.previewHeader}>Preview</div> */}
                                    <img 
                                        src={Browser} 
                                        alt='browser address bar'
                                        className={IndexStyles.address} />
                                    <Img 
                                        fluid={preview} 
                                        alt=''
                                        className={IndexStyles.browser} />
                            </motion.div>
                        }
                    </AnimatePresence>
                </div>

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