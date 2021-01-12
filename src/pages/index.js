import React, { useEffect, useRef, useState } from 'react'
import IndexStyles from './index.module.css'
import { Link, graphql } from 'gatsby'
import { motion, AnimatePresence } from 'framer-motion'

import Layout from '../layout/layout'
import Logo from '../images/stormlessard-logo.svg'

const IndexPage = ({ data }) => {

    const projectsArr = data.allProjectsJson.edges
    const projectsRef = useRef([])
    const [ isPlaying, setIsPlaying ] = useState(null)
    const [ timeArr, setTimeArr ] = useState([0, 0, 0, 0, 0, 0])

    useEffect(() => {
        projectsRef.current = projectsRef.current.slice(0, projectsArr.length);
        console.log(timeArr)
     }, [projectsArr]);

     const seekTo = (val, pos) => {
         const vidLength = projectsRef.current[pos].duration
         const seekedAmount = vidLength * (val / 100)
         projectsRef.current[pos].currentTime = seekedAmount

         const newArr = timeArr
         newArr[pos] = val
         setTimeArr([...newArr])
     }

     const updateVidTime = (pos) => {
         const currTime = projectsRef.current[pos].currentTime
         const vidLength = projectsRef.current[pos].duration
         const newTime = currTime * (100 / vidLength)

         const newArr = timeArr
         newArr[pos] = newTime
         setTimeArr([...newArr])
     }

    return (
        <Layout pageTitle='Home'>
            <div className={IndexStyles.container}>

                    <div className={IndexStyles.logo}>
                        <img src={Logo} alt='logo' />
                    </div>

                    <div className={IndexStyles.content}>

                        <div className={IndexStyles.about}>
                            <p>Ty Lessard is a developer and designer from Providence, RI. He enjoys finding different ways to approach the user experience. 
                            <span className={IndexStyles.learn}>
                                <Link to='/about'>Learn more</Link>
                            </span>.
                            </p>
                        </div>

                        <div className={IndexStyles.projects}>
                                {projectsArr.map( (item, pos) => {
                                    return (
                                        <div 
                                            className={IndexStyles.projectItem}
                                            key={pos}>
                                            <Link  
                                                to={`/projects/${item.node.slug}`}>
                                                <motion.video 
                                                    muted 
                                                    ref={el => projectsRef.current[pos] = el}
                                                    className={IndexStyles.video}
                                                    onMouseEnter={() => setIsPlaying(pos)}
                                                    onMouseLeave={() => setIsPlaying(null)}
                                                    onHoverStart={() => projectsRef.current[pos].play()}
                                                    onHoverEnd={() => projectsRef.current[pos].pause()}
                                                    onTimeUpdate={() => updateVidTime(pos)}>
                                                    <source src={item.node.video.publicURL} type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </motion.video>
                                            </Link>
                                            <div className={IndexStyles.controls}>
                                                <span>
                                                    {isPlaying === pos 
                                                        ? 'playing' 
                                                        : 'paused'}
                                                </span>
                                                <input 
                                                    className={IndexStyles.slider}
                                                    type='range'
                                                    min='0'
                                                    max='100'
                                                    onChange={e => {
                                                        const val = e.target.value
                                                        seekTo(val, pos)
                                                    }}
                                                    value={timeArr[pos]}
                                                    step='1' />
                                            </div>
                                        </div>
                                    )
                                } )}
                        </div>

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
                    video {
                        publicURL
                    }
                }
            }
        }
    }
`