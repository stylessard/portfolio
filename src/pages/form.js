import React from 'react'
import FormStyles from './form.module.css'
import { Link } from 'gatsby'

import Layout from '../layout/layout'
import Logo from '../images/stormlessard-logo.svg'

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

                <Link to='/' className={FormStyles.logo}>
                    <img src={Logo} alt='logo' />
                </Link>

                <div className={FormStyles.content}>

                    <div className={FormStyles.heading}>
                        <p>Get in touch about a future project by either <br />
                        1) using the form below<br />2) sending a message to
                        <span className={FormStyles.email}>
                            <a href='mailto:hi@storminnormin.com'>hi@storminnormin.com</a>
                        </span></p>
                    </div>

                    <div className={FormStyles.form}>
                        <form 
                            method="post" 
                            netlify-honeypot="bot-field" 
                            data-netlify="true" 
                            name="contact">
                            <div className={FormStyles.inputGroup}>
                                <FormInput
                                    type='text'
                                    id='name'
                                    label="Name" />
                                <FormInput
                                    type='email'
                                    id='email'
                                    label="Email" />
                                <FormInput
                                    type='text'
                                    id='referral'
                                    label="How'd you hear about me" />
                                <FormInput
                                    type='text'
                                    id='budget'
                                    label="What's your budget" />
                                <FormTextarea 
                                    rows='8'
                                    id='description'
                                    label='Describe your project' />
                            </div>
                            <div className={FormStyles.buttonRow}>
                                <button type='submit'>Submit</button>
                            </div>

                            <input type="hidden" name="bot-field" />                      <input type="hidden" name="form-name" value="contact" />
                        </form>

                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default FormPage