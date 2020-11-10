import React from 'react'
import TemplateStyles from './projectTemplate.module.css'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../layout/layout'
import Block from '../components/block'
import Arrow from '../images/back-arrow.svg'
import Video from '../images/fin-video.mp4'

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
                            <a href={project.url}>{project.url}</a>
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

                <div className={TemplateStyles.image}>
                    {/* {project.image.map( (img, index) => {
                        return <Img 
                                    fluid={img.childImageSharp.fluid} 
                                    alt={`${project.title} website layout`}
                                    key={index} /> 
                    })} */}
                    {/* <Img 
                        fluid={project.image.childImageSharp.fluid} 
                        alt={`${project.title} website layout`} /> */}
                    <video muted autoPlay>
                        <source src={Video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

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
        }
    }
`