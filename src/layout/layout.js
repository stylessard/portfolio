import React from 'react'
import LayoutStyles from './layout.module.css'
import { motion } from 'framer-motion'

import SEO from '../components/seo'

const Layout = ({ pageTitle, children }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .65 }} 
            className={LayoutStyles.container}>
            <SEO title={pageTitle} />
            <main>
                {children}
            </main>
        </motion.div>
    )
}

export default Layout