import React, { useState } from 'react'
import IndexStyles from './index.module.css'
import { motion, AnimatePresence } from 'framer-motion'

import Layout from '../layout/layout'
import Logo from '../images/stormlessard-logo.svg'
import Block from '../components/block'
import Test from '../images/separated-still.png'
import Browser from '../images/browser-top.svg'

const IndexPage = () => {

    const [ counter, setCounter ] = useState(null)
    const [ isProfessional, setIsProfessional ] = useState(true)

    const sites = [
        { image: Test, alt: 'logo' },
        { image: Test, alt: 'logo' },
        { image: Test, alt: 'logo' },
        { image: Test, alt: 'logo' },
        { image: Test, alt: 'logo' }
    ]

    return (
        <Layout pageTitle='Home'>
            <div className={IndexStyles.container}>

                <div className={IndexStyles.logo}>
                    <img src={Logo} alt='logo' />
                </div>

                <div className={IndexStyles.resume}>
                    <Block title='Bio'>
                        {isProfessional
                            ? "Ty Lessard is a develper and a designer focused squarely on the user experience. He yada yada yada"
                            : "My name is Ty Lessard and I'm a developer and designer based out of Boston. My main focus is the user experience and how to make websites more enjoyable."
                        }
                    </Block>

                    <Block title='Projects'>
                        <React.Fragment>
                            <a 
                                href='/projects/shyt-lyst'
                                onMouseEnter={() => setCounter(1)}
                                onMouseLeave={() => setCounter(null)}>Shyt Lyst</a>
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
                                href='/projects/cadillac-lounge'
                                onMouseEnter={() => setCounter(3)}
                                onMouseLeave={() => setCounter(null)}>Cadillac Lounge</a>
                            <a 
                                href='/projects/kim-park'
                                onMouseEnter={() => setCounter(4)}
                                onMouseLeave={() => setCounter(null)}>Kim Park</a>
                            <a 
                                href='/projects/sneaky-jesus'
                                onMouseEnter={() => setCounter(4)}
                                onMouseLeave={() => setCounter(null)}>Sneaky Jesus</a>
                        </React.Fragment>
                    </Block>

                    {/* <Block title='Social'>
                        <React.Fragment>
                            <a href='https://www.twitter.com/StormNotDavis'>@stormnotdavis</a>
                            <a href='https://www.twitter.com/StormNotDavis'>instagram/stormlessard</a>
                        </React.Fragment>
                    </Block> */}

                    <Block title='Contact'>
                        <React.Fragment>
                            <a href="mailto:stormlessard@gmail.com">stormlessard@gmail.com</a>
                            <a href="mailto:stormlessard@gmail.com">@stormnotdavis</a>
                        </React.Fragment>
                    </Block>
                </div>

                <AnimatePresence exitBeforeEnter>
                    {counter && 
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
                                <img 
                                    src={sites[counter].image} 
                                    alt={sites[counter].alt}
                                    className={IndexStyles.browser} />
                        </motion.div>
                    }
                </AnimatePresence>

            </div>
        </Layout>
    )
}

export default IndexPage