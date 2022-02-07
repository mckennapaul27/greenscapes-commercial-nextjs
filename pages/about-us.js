import Link from 'next/link';
import Head from 'next/head';

const About = () => {
    return (
        <div className='container' style={{ minHeight: '50vh' }}>
            <Head>
                <meta charSet='utf-8' />
                <title>About Us | Greenscapes Commercial Maintenance</title>
                <meta
                    name='description'
                    content='Greenscapes is a Commercial Garden and Grounds Maintenance company established since 2012. We have an experienced and qualified team that provide a quality service.'
                />
                <link
                    rel='canonical'
                    href='https://www.greenscapes-commercial.co.uk/about-us'
                />
            </Head>
            <div className='columns' style={{ padding: '2rem 0', margin: '0' }}>
                <div className='column'>
                    <nav className='breadcrumb' aria-label='breadcrumbs'>
                        <ul>
                            <li>
                                <a href='/'>Home</a>
                            </li>
                            <li className='is-active'>
                                <a href='about-us' aria-current='page'>
                                    About us
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className='content'>
                        <div style={{ textAlign: 'left' }}>
                            <div
                                style={{
                                    display: 'inline-block',
                                    paddingBottom: '1rem',
                                }}>
                                <h2>About Us</h2>
                                <div style={{ textAlign: 'left' }}>
                                    <hr
                                        style={{
                                            border: '3px solid #339935',
                                            width: '5rem',
                                            padding: '0',
                                            margin: '0',
                                            display: 'inline-block',
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <p>
                            Greenscapes is a Commercial Garden and Grounds
                            Maintenance company established since 2012. We have
                            an experienced and qualified team that provide a
                            quality service.
                        </p>
                        <p>
                            We provide professional garden & grounds maintenance
                            in Cheshire, South Manchester and surrounding areas.
                        </p>
                        <p>
                            We pride ourselves on our professional and reliable
                            approach to our work and ensuring our customers are
                            fully satisfied with the work we provide.
                        </p>
                        <p>
                            Our qualified maintenance teams provide a range of
                            services to ensure that your premises continue to
                            look their best throughout the year.
                        </p>
                        <p>
                            Please feel free to get in contact with Greenscapes
                            Commercial Garden and Grounds Services so we can
                            discuss your requirements in further detail.
                        </p>
                    </div>
                    <div style={{ padding: '1rem 0', textAlign: 'left' }}>
                        {/* <button className={`button is-primary`}>
                            <a style={{color: 'white'}} href='tel:07772656034'>
                                <span>
                                    <i style={{marginRight: '0.5rem'}} className='fa fa-phone'>
                                    </i>
                                </span>
                                Call Us
                            </a>
                        </button> */}
                        <span style={{ marginLeft: '1rem' }}>
                            <Link href='/contact'>
                                <button
                                    className={`button is-primary is-outlined`}>
                                    <span>
                                        <i
                                            style={{ marginRight: '0.5rem' }}
                                            className='fa fa-envelope'></i>
                                    </span>
                                    Email
                                </button>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
