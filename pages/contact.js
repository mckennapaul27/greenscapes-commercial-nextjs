import React, {Component} from 'react';
import Head from 'next/head';
import axios from 'axios';

export default class Contact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        interest: 'Commercial partnership',
        subject: '',
        message: '',
        submitted: false
    }


    handleInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let { name, email, phone, interest, subject, message } = this.state;   
        phone = '0' + phone;     
        axios.post(`/api/contact`, {name, email, phone, interest, subject, message})
        .then((res) => {
            if (res.data.success) {
                this.setState({
                    submitted: true
                })
            }            
        })        
    }


    render () {
        const {submitted} = this.state;
        let { name, email, phone, interest, subject, message } = this.state; 
        let enabled = (name !== '' && email !== '' && phone !== '' && interest !== '' && subject !== '' && message !== '') ? false : true;
        
        return (
            <div className='container' style={{minHeight: '90vh'}}>
            <Head>
            <meta charSet="utf-8" />
            <title>Contact Us | Greenscapes Commercial Maintenance</title>
            <meta name="description" content="Contact us at Greenscapes Commercial for a free no-obligation quote to see if we can assist you with your requirements" />
            <link rel="canonical" href="https://www.greenscapes-commercial.co.uk/contact" />
            </Head>
            <div className='columns is-centered' style={{padding: '2rem 0', margin: '0'}}>                
                <div className='column'>
                <nav class="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                        <li><a href="/">Home</a></li>                                    
                        <li class="is-active"><a href="contact" aria-current="page">Contact us</a></li>
                    </ul>
                </nav>
                    <div className='content'>                            
                        <div style={{textAlign: 'left'}}>
                            <div style={{display: 'inline-block', paddingBottom: '1rem'}}>
                                <h2>Contact Us</h2>
                                <div style={{textAlign: 'left'}}>
                                    <hr style={{border: '3px solid #339935', width: '5rem', padding: '0', margin: '0', display: 'inline-block'}} />
                                </div>
                            </div>
                        </div> 
                        <p>Greenscapes Commercial are actively looking for new commercial relationships and we'd love to hear from you. Please get in touch by giving us a call or by using the form below.</p>

                        {
                            !submitted && 
                            <div>                            
                            <div className="field is-horizontal" style={{padding: '1rem 0'}}>
                                <div className="field-label is-normal">
                                    <label className="label">Your details</label>
                                </div>
                                <div className="field-body">
                                    <div className="field">
                                    <p className="control is-expanded has-icons-left">
                                        <input className="input" type="text" placeholder="Name" name='name' onChange={this.handleInputChange}/>
                                        <span className="icon is-small is-left">
                                        <i className="fa fa-user"></i>
                                        </span>
                                    </p>
                                    </div>
                                    <div className="field">
                                    <p className="control is-expanded has-icons-left has-icons-right">
                                        <input className="input" type="email" placeholder="Email" name='email' onChange={this.handleInputChange}/>
                                        <span className="icon is-small is-left">
                                        <i className="fa fa-envelope"></i>
                                        </span>
                                        <span className="icon is-small is-right">
                                        <i className="fa fa-check"></i>
                                        </span>
                                    </p>
                                    </div>
                                </div>
                                </div>
    
                                <div className="field is-horizontal">
                                <div className="field-label"></div>
                                <div className="field-body">
                                    <div className="field is-expanded">
                                    <div className="field has-addons">
                                        <p className="control">
                                        <a className="button is-static">
                                            +44
                                        </a>
                                        </p>
                                        <p className="control is-expanded">
                                        <input className="input" type="tel" placeholder="Your phone number" name='phone' onChange={this.handleInputChange}/>
                                        </p>
                                    </div>
                                    <p className="help">Do not enter the first zero</p>
                                    </div>
                                </div>
                                </div>
    
                                <div className="field is-horizontal">
                                <div className="field-label is-normal">
                                    <label className="label">Interested</label>
                                </div>
                                <div className="field-body">
                                    <div className="field is-narrow">
                                    <div className="control">
                                        <div className="select is-fullwidth">
                                        <select name="interest" onChange={this.handleInputChange}>
                                            <option>Commercial partnership</option>
                                            <option>Feedback</option>
                                            <option>General enquiry</option>
                                        </select>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
    
                                <div className="field is-horizontal">
                                <div className="field-label">
                                    <label className="label">Already a customer?</label>
                                </div>
                                <div className="field-body">
                                    <div className="field is-narrow">
                                    <div className="control">
                                        <label className="radio">
                                        <input type="radio" name="member" />
                                        Yes
                                        </label>
                                        <label className="radio">
                                        <input type="radio" name="member" />
                                        No
                                        </label>
                                    </div>
                                    </div>
                                </div>
                                </div>
    
                                <div className="field is-horizontal">
                                <div className="field-label is-normal">
                                    <label className="label">Subject</label>
                                </div>
                                <div className="field-body">
                                    <div className="field">
                                    <div className="control">
                                        <input className="input" type="text" placeholder="e.g. Partnership opportunity" name='subject' onChange={this.handleInputChange} />
                                    </div>
                                    <p className="help is-primary">
                                        This field is required
                                    </p>
                                    </div>
                                </div>
                                </div>
    
                                <div className="field is-horizontal">
                                <div className="field-label is-normal">
                                    <label className="label">Enquiry</label>
                                </div>
                                <div className="field-body">
                                    <div className="field">
                                    <div className="control">
                                        <textarea className="textarea" placeholder="Explain how we can help you" name='message' onChange={this.handleInputChange}></textarea>
                                    </div>
                                    </div>
                                </div>
                                </div>
    
                                <div className="field is-horizontal">
                                <div className="field-label">
                                    {/* <!-- Left empty for spacing --> */}
                                </div>
                                <div className="field-body">
                                    <div className="field">
                                    <div className="control">
                                        <button 
                                        className="button is-primary"
                                        disabled={enabled}
                                        onClick={this.handleSubmit}
                                        >
                                        Send message
                                        </button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                        } 

                        {
                            submitted &&
                            <div className='notification is-link' style={{ display: 'flex', alignItems: 'center', padding: '2rem', marginTop: '1rem'}}>                
                                <div>
                                    <p>Thank you for submitting your enquiry. We aim to respond to all enquiries within 24-48 hours. </p> 
                                </div>                           
                            </div>
                        }

                        </div>
                    </div>                                            
                </div>                         
            </div>
        )
    }
}



