import React from "react"
import NotFoundStyles from './404.module.css'
import { Link } from 'gatsby'

import SEO from "../components/seo"

const NotFoundPage = () => (
  <div className={NotFoundStyles.container}>
    <SEO title="404: Not found" />
    <h1>Nothing is here, but feel free to keep on <span><Link to='/'>perusing</Link></span>.</h1>
  </div>
)

export default NotFoundPage
