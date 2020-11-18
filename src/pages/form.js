import React from 'react'
import FormStyles from './form.module.css'
import { Link } from 'gatsby'

import Layout from '../layout/layout'
import Arrow from '../images/back-arrow.svg'

const FormInput = ({ label, type, id }) => {
    return (
        <div className={FormStyles.formInput}>
            <label htmlFor={id}>{label}</label>
            <input id={id} name={id} type={type} required />
        </div>
    )
}

const FormTextarea = ({ label, rows, id }) => {
    return (
        <div className={FormStyles.formTextarea}>
            <label htmlFor={id}>{label}</label>
            <textarea id={id} name={id} rows={rows} required />
        </div>
    )
}

const FormPage = () => {

    return (
        <Layout pageTitle='Form'>
            <div className={FormStyles.container}>

                <Link to='/' className={FormStyles.back}>
                    <img src={Arrow} alt='back arrow' />
                </Link>

                <div className={FormStyles.form}>
                    <h1>Tell me about your project</h1>
                    <form 
                        method="post" 
                        netlify-honeypot="bot-field" 
                        data-netlify="true" 
                        name="contact">
                        <div className={FormStyles.inputGroup}>
                            <FormInput
                                type='text'
                                id='name'
                                label="What is your name" />
                            <FormInput
                                type='email'
                                id='email'
                                label="What is your email" />
                            <FormInput
                                type='text'
                                id='referral'
                                label="How'd you hear about me" />
                            <FormInput
                                type='text'
                                id='budget'
                                label="What is your budget" />
                            <FormTextarea 
                                rows='8'
                                id='description'
                                label='Describe your project' />
                        </div>
                        <button type='submit'>Submit</button>

                        <input type="hidden" name="bot-field" />                      <input type="hidden" name="form-name" value="contact" />
                    </form>

                </div>

            </div>
        </Layout>
    )
}

export default FormPage