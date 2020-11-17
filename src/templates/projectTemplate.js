import React from 'react'
import TemplateStyles from './projectTemplate.module.css'
import { graphql, Link } from 'gatsby'
import { motion } from 'framer-motion'

import Layout from '../layout/layout'
import Block from '../components/block'
import Arrow from '../images/back-arrow.svg'
import Browser from '../images/top-bar.svg'

const Template = ({ data }) => {

    const project = data.projectsJson

    console.log(project)

    return (
        <Layout pageTitle={project.title}>
            <div className={TemplateStyles.container}>

                <div className={TemplateStyles.text}>

                    <Link to='/' className={TemplateStyles.back}>
                        <img src={Arrow} alt='back arrow' />
                    </Link>

                    <div className={TemplateStyles.projectDetails}>
                        <Block title='Website'>
                            <a href={project.url}>
                                Visit 
                                <span className={TemplateStyles.webAddress}>
                                    {project.title}
                                </span>
                            </a>
                        </Block>

                        <Block title='About'>
                            <p>{project.description}</p>
                        </Block>

                        <Block title='Tools'>
                            {project.tools.map( (tool, index) => <div key={index}>{tool}</div>)}
                        </Block>

                        <Block title='Extra'>
                            <p>{project.extra}</p>
                        </Block>
                    </div>

                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: .75, duration: .65 }} 
                    className={TemplateStyles.image}>
                        <img 
                            src={Browser} 
                            alt='browser address bar'
                            className={TemplateStyles.address} />
                        <video muted autoPlay>
                            <source src={project.video.publicURL} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                </motion.div>

            </div>
        </Layout>
    )
}

export default Template

export const query = graphql`
    query ($slug: String!) {
        projectsJson(slug: { eq: $slug }) {
            title
            url
            description
            tools
            extra
            video {
                publicURL
            }
        }
    }
`