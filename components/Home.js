import Link from 'next/link';
import FadeIn from 'react-fade-in';
import Level from './Level';
import Services from './Services';
import Testimonial from './Testimonial';

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
        'booles.png',
        'bupa.png',
        'emerson.jpg',
        'energi.png',
        'fairhurst.jpg',
        'headset.jpg',
        'mcgoff.png',
        'ninas.jpg',
        'nursery-rhymes.png',
        'olea.jpg'
    ]

    
    return (
        <div>
            {/* Header */}
            <div style={contentStyle}>
                <div style={{ display: 'flex', alignItems: 'center', minHeight: '80vh'}}>
                    <div className='container' style={{padding: '1rem'}}>
                        <div className='has-text-centered' style={{background: 'rgba(16,46,16, 0.7)', padding: '3rem 0'}}>
                            <FadeIn transitionDuration={2500}>
                            <h1 className="title is-3" style={{color: '#FCFAFA'}}><span className='is-hidden-mobile'>Established And Trustworthy</span> Commercial Garden &amp; Grounds Maintenance</h1>
                            <h2 className="subtitle is-3" style={{color: '#FCFAFA', padding: '2rem 1rem 0 1rem', fontSize: '1.1rem', lineHeight: '1.95rem'}}>Welcome to Greenscapes Commercial Garden and Grounds Services. </h2>
                            <p className="subtitle is-3" style={{color: '#FCFAFA', padding: '1rem 1rem 0 1rem', fontSize: '1.1rem', lineHeight: '1.95rem'}}>We provide professional garden &amp; grounds maintenance in Cheshire, South Manchester and surrounding areas.</p>
                            <h3 className='subtitle is-3' style={{color: '#FCFAFA', padding: '1rem 1rem 2rem 1rem', fontSize: '1.1rem', lineHeight: '1.95rem'}}>We can help you to promote your corporate image by having well maintained gardens and grounds.</h3>
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
                                    <button className={`button is-primary is-outlined is-medium is-hidden-mobile`}>
                                        <a style={{color: 'white'}} href='tel:07772 656034'>
                                            <span>
                                                <i style={{marginRight: '0.5rem'}} className='fa fa-phone'>
                                                </i>
                                            </span>
                                            Call Us
                                        </a>
                                    </button>
                                </span>
                            </div>
                            </FadeIn>
                        </div>            
                    </div>
                </div> 
            </div>
            {/* Middle upper */}
            <div className='container' style={{minHeight: '40vh'}}>
                <div className='columns is-centered' style={{padding: '2rem 1rem 1rem 1rem', margin: '0'}}>
                    <div className='column' > 
                        <img src="/static/images/garden4.jpeg" alt="" style={{maxHeight: '75%'}}/>
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
                            <p>We provide professional garden &amp; grounds maintenance in Cheshire, South Manchester and surrounding areas.</p>                            
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
                            </ul>
                            <p>Our qualified maintenance teams provide a range of services to ensure that your premises
                            continue to look their best throughout the year.</p>                            
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
                                <div className="column is-one-fifth" style={{padding: '2rem'}}>
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
        </div>
    )
}

export default Home;