import Head from 'next/head';
const About = () => {
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
                        <div class="field is-horizontal" style={{padding: '1rem 0'}}>
                            <div class="field-label is-normal">
                                <label class="label">Your details</label>
                            </div>
                            <div class="field-body">
                                <div class="field">
                                <p class="control is-expanded has-icons-left">
                                    <input class="input" type="text" placeholder="Name" />
                                    <span class="icon is-small is-left">
                                    <i class="fa fa-user"></i>
                                    </span>
                                </p>
                                </div>
                                <div class="field">
                                <p class="control is-expanded has-icons-left has-icons-right">
                                    <input class="input is-success" type="email" placeholder="Email"/>
                                    <span class="icon is-small is-left">
                                    <i class="fa fa-envelope"></i>
                                    </span>
                                    <span class="icon is-small is-right">
                                    <i class="fa fa-check"></i>
                                    </span>
                                </p>
                                </div>
                            </div>
                            </div>

                            <div class="field is-horizontal">
                            <div class="field-label"></div>
                            <div class="field-body">
                                <div class="field is-expanded">
                                <div class="field has-addons">
                                    <p class="control">
                                    <a class="button is-static">
                                        +44
                                    </a>
                                    </p>
                                    <p class="control is-expanded">
                                    <input class="input" type="tel" placeholder="Your phone number" />
                                    </p>
                                </div>
                                <p class="help">Do not enter the first zero</p>
                                </div>
                            </div>
                            </div>

                            <div class="field is-horizontal">
                            <div class="field-label is-normal">
                                <label class="label">Department</label>
                            </div>
                            <div class="field-body">
                                <div class="field is-narrow">
                                <div class="control">
                                    <div class="select is-fullwidth">
                                    <select>
                                        <option>Commercial partnership</option>
                                        <option>Feedback</option>
                                        <option>General enquiry</option>
                                    </select>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>

                            <div class="field is-horizontal">
                            <div class="field-label">
                                <label class="label">Already a customer?</label>
                            </div>
                            <div class="field-body">
                                <div class="field is-narrow">
                                <div class="control">
                                    <label class="radio">
                                    <input type="radio" name="member" />
                                    Yes
                                    </label>
                                    <label class="radio">
                                    <input type="radio" name="member" />
                                    No
                                    </label>
                                </div>
                                </div>
                            </div>
                            </div>

                            <div class="field is-horizontal">
                            <div class="field-label is-normal">
                                <label class="label">Subject</label>
                            </div>
                            <div class="field-body">
                                <div class="field">
                                <div class="control">
                                    <input class="input" type="text" placeholder="e.g. Partnership opportunity" />
                                </div>
                                <p class="help is-primary">
                                    This field is required
                                </p>
                                </div>
                            </div>
                            </div>

                            <div class="field is-horizontal">
                            <div class="field-label is-normal">
                                <label class="label">Enquiry</label>
                            </div>
                            <div class="field-body">
                                <div class="field">
                                <div class="control">
                                    <textarea class="textarea" placeholder="Explain how we can help you"></textarea>
                                </div>
                                </div>
                            </div>
                            </div>

                            <div class="field is-horizontal">
                            <div class="field-label">
                                {/* <!-- Left empty for spacing --> */}
                            </div>
                            <div class="field-body">
                                <div class="field">
                                <div class="control">
                                    <button class="button is-primary">
                                    Send message
                                    </button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>                                            
                </div>                         
            </div>
    )
}

export default About;