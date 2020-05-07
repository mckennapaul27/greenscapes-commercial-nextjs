import Link from 'next/link';
import FadeIn from 'react-fade-in';
import Level from './Level';
import Services from './Services';
import Testimonial from './Testimonial';
import Contact from './Contact';

const Home = () => {
    
    const contentStyle = {  
        backgroundImage: "url('/static/images/office_garden.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        minHeight: '80vh'
    }

    const servicesStyle = {
        backgroundImage: "url('/static/images/commercial.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        minHeight: '60vh'
    }
    const contentStyleMobile = {  
        backgroundImage: "url('/static/images/flats_garden.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover'
    }
    // 'goldenlane.png',

    const images = [
        'emerson.jpg',
        'mcgoff.png',
        'bupa.png',
        'energi.png',
        // 'fairhurst.jpg',
        'mccarthy.jpeg',
        // 'ninas.jpg',
        'nursery-rhymes.png',
        'booles.png',
        'olea.jpg'
    ]

    
    return (
        <div>
            {/* Header */}
            <div className="wave-container">
                <div className="columns is-centered" style={{ margin: '3rem 0.5rem -1rem 0.5rem' }}>
                    <div className="column is-half">
                        <div className='hero is-bold is-info'>
                            <div className='hero-body'>
                                <div className='content'>
                                    <h1><span className='is-hidden-mobile'>Established And Trustworthy</span> Commercial Garden &amp; Grounds Maintenance</h1>
                                    <div className='columns'>
                                        <div className='column'>
                                            <img src="/static/images/logo-x.png" alt="greenscapes logo" style={{ maxWidth: '155px' }} />
                                            {/* <img src="/static/images/logo.png" alt="greenscapes logo" style={{ maxWidth: '155px' }} /> */}
                                        </div>
                                    </div>
                                    <p>Based in South Manchester, we provide professional garden &amp; grounds maintenance over the whole of the North West.</p>
                                    <Contact />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240" display='block'>
                    <path fill="#1C541D" fillOpacity="1" d="M0,160L60,170.7C120,181,240,203,360,176C480,149,600,75,720,85.3C840,96,960,192,1080,202.7C1200,213,1320,139,1380,101.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
            </div>
            <div className='wave-container-bottom'>
                <div className='container' style={{ border: '1px solid #1C541D' }}>
                    <div className='content'>
                        <h3><em>"Promote your corporate image by having well maintained gardens and grounds."</em></h3>
                        <hr className='is-hidden-mobile'/>
                        <Link href='/services'>
                            <button className={`button is-primary is-medium`}>
                                <a style={{color: 'white'}}>
                                    <span>
                                        <i style={{marginRight: '0.5rem'}} className='fa fa-cogs'>
                                        </i>
                                    </span>
                                    Find out about our Services
                                </a>
                            </button>
                        </Link>
                        <br/>
                        <br/>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240" display='block'>
                    <path fill="#FCFAFA" fillOpacity="1" d="M0,0L60,16C120,32,240,64,360,90.7C480,117,600,139,720,122.7C840,107,960,53,1080,32C1200,11,1320,21,1380,26.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
            </div>
            {/* Middle upper */}
            <div className='container' style={{minHeight: '40vh'}}>
                <div className='columns is-centered' style={{padding: '2rem 1rem 1rem 1rem', margin: '0'}}>
                    <div className='column' > 
                        <img src="/static/images/peoples-home.jpeg" alt="" style={{maxHeight: '75%'}}/>
                    </div>
                    <div className='column'>
                        <div className='content'>                            
                            <div style={{textAlign: 'left'}}>
                                <div style={{display: 'inline-block', paddingBottom: '1rem'}}>
                                    <h2>Home</h2>
                                    <div>
                                        <hr style={{border: '3px solid #339935', width: '5rem', padding: '0', margin: '0'}} />
                                    </div>
                                </div>
                            </div>                               
                            <p>Based in South Manchester, we provide professional garden &amp; grounds maintenance over the whole of the North West.</p>                            
                            <h2>Commercial Ground Maintenance</h2>
                            <p>We offer commercial garden and grounds maintenance to a range of
                            services including: </p>
                            <ul>
                                <li>Care Homes</li>
                                <li>Retirement Living Complexes</li>
                                <li>Nurseries</li>
                                <li>Schools</li>
                                <li>Industrial
                                Grounds</li>
                                <li>Housing Trusts</li>
                                <li>Letting Agents</li>
                                <li>Block Management Companies</li>
                            </ul>
                            <p>Our qualified maintenance teams provide a range of services to ensure that your premises
                            continue to look their best throughout the year.</p>   
                            <div>
                                <Link href='/contact'>
                                    <button className={`button is-primary is-medium`}>
                                        <a style={{color: 'white'}}>
                                            <span>
                                                <i style={{marginRight: '0.5rem'}} className='fa fa-envelope'>
                                                </i>
                                            </span>
                                            Contact Us
                                        </a>
                                    </button>
                                </Link>
                                <span style={{marginLeft: '1rem'}}>
                                    <button className={`button is-primary is-outlined is-medium  is-hidden-mobile`}>
                                        <a style={{color: '#339935'}} href='tel:07772 656034'>
                                            <span>
                                                <i style={{marginRight: '0.5rem'}} className='fa fa-phone'>
                                                </i>
                                            </span>
                                            Call Us
                                        </a>
                                    </button>
                                </span>
                            </div>                         
                        </div>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <hr style={{border: '1px solid #F0F3F3', width: '100%'}} />
                </div>                
            </div>
            <Level /> 
            <div style={servicesStyle}>
                <div style={{minHeight: '60vh', background: 'rgba(16,46,16, 0.8)', padding: '2rem'}}> 
                    <Services />         
                </div> 
            </div>
            <div style={{textAlign: 'center', marginTop: '3rem'}}>
                <div style={{display: 'inline-block'}}>
                    <h3 className='title is-3' style={{width: '100%'}}>Our Clients</h3>
                    <div>
                        <hr style={{border: '3px solid #339935', width: '5rem', padding: '0', margin: '0'}} />
                    </div>
                </div>
            </div>      
            <div className='container'>      
                <div className="columns is-centered is-multiline" style={{padding: '3rem 1rem', margin: '0'}}>
                    {
                        images.map(image => {
                            return (
                                <div className="column is-one-quarter" style={{padding: '2rem'}} key={image}>
                                    <div>
                                        <div style={{maxWidth: '7.5rem', margin: 'auto'}}>
                                            <img src={`/static/images/${image}`} alt={image} />
                                        </div>                        
                                    </div>
                                </div>
                            )
                        })
                    }                
                </div>
            </div>
            <Testimonial />
            <style jsx>{`
            .content h1 {
                color: white;
            }
            .content h3 {
                color: white;
            }
            .subtitle {
                color: white;
            }
            .wave-container {
                background-image: url('/static/images/office_garden.jpg');
                background-repeat: no-repeat;
                background-position: center center;
                background-size: cover;
                position: relative; 
                color: #FFF; 
                text-align: center; 
                overflow: hidden;
            }
            .wave-container-bottom {
                background: #1C541D; 
                position: relative; 
                color: #FFF; 
                text-align: center; 
                overflow: hidden;
            }
        `}</style>
        </div>
    )
}

export default Home;