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
        backgroundImage: "url('/static/images/mower.jpg')",
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

    const images = [
        {
            original: '/static/images/gardening.jpg'
        },
        {
            original: '/static/images/gardening.jpg'
        },        
        {
            original: '/static/images/gardening.jpg'
        }
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
                            <h2 className="subtitle is-4" style={{color: '#FCFAFA', padding: '2rem', fontSize: '1.1rem', lineHeight: '1.95rem'}}>Welcome to Greenscapes Commercial. We provide domestic and commercial gardening maintenance and design services in South Manchester and Cheshire.</h2>
                            <h3 className='subtitle is-5 is-hidden-mobile' style={{color: '#FCFAFA', padding: '0 0 3rem 0', fontSize: '1.1rem', lineHeight: '1.95rem'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.</h3>
                            <div>
                                <Link href='/contact'>
                                    <button className={`button is-primary is-medium`}>
                                        <a style={{color: 'white'}}>
                                            <span>
                                                <i style={{marginRight: '0.5rem'}} className='fa fa-quote-left'>
                                                </i>
                                            </span>
                                            Free Quotation
                                        </a>
                                    </button>
                                </Link>
                                <span style={{marginLeft: '1rem'}}>
                                <Link href='/contact'>
                                    <button className={`button is-primary is-outlined is-medium is-hidden-mobile`}>
                                        <a style={{color: 'white'}}>
                                            <span>
                                                <i style={{marginRight: '0.5rem'}} className='fa fa-envelope'>
                                                </i>
                                            </span>
                                            Contact Us
                                        </a>
                                    </button>
                                </Link>
                                </span>
                            </div>
                            </FadeIn>
                        </div>            
                    </div>
                </div> 
            </div>
            {/* Middle upper */}
            <div className='container' style={{minHeight: '90vh'}}>
                <div className='columns is-centered' style={{padding: '2rem 1rem', margin: '0'}}>
                    <div className='column'> 
                        <img src="/static/images/garden4.jpeg" alt=""/>
                    </div>
                    <div className='column is-1'></div>
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
                            <p>Welcome to Greenscapes Gardening Bramhall. We provide domestic and commercial gardening maintenance and design services in South Manchester and Cheshire.</p>                            
                            <h2>Commercial Ground Maintenance</h2>
                            <p>We also offer commercial ground maintenance services for Schools, Housing trusts, Companies and all types of commercial buildings.</p>
                            <p>We cover South Manchester, Bramhall, Cheadle, Cheadle Hulme, Wilmslow, Alderley Edge, Bollington, Prestbury, Handforth, Mobberly, Woodford and Poynton</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.</p>
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
            <Testimonial />
        </div>
    )
}

export default Home;