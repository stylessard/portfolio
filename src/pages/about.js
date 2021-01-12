import React from "react"
import AboutStyles from './about.module.css'
import { Link } from 'gatsby'

import SEO from "../components/seo"
import Layout from '../layout/layout'
import Logo from '../images/stormlessard-logo.svg'

// designer and developer
// get down to the bones
// this has a bunch of benefits
// background in branding
// the result is a nice balance and understanding of branding and building.

const AboutPage = () => {
    return (
        <Layout>
            <div className={AboutStyles.container}>
                <SEO title="About" />

                <Link to='/' className={AboutStyles.logo}>
                    <img src={Logo} alt='logo' />
                </Link>

                <div className={AboutStyles.content}>
                    <p>Ty Lessard is a designer and developer from Providence, RI. His disdain for fluff is strong and knows no bounds. He believes a website with no fluff means a website with a clearer message, which means a website with a clear navagational path, which means a website that accomplishes goals and converts.</p>
                    <p>Ty is relatively new to the development scene. Branding has always been a passion of his, so when he transitioned into a more behind the scenes role, the move made a lot of sense. A nice blend of branding and building.</p>
                    <p>In his spare time, Ty enjoys playing sportz and amassing books most of which he'll never read. He's a big time thrill seeker often betting upwards of $5 every weekend on sporting events. He lost his shirt when Jordan Spieth hit 4 in the water at Augusta.</p>
                </div>
            </div>
        </Layout>
    )
}

export default AboutPage