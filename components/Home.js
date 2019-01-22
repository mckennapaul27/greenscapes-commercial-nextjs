import Link from 'next/link';
import FadeIn from 'react-fade-in';
import Level from './Level';
import Services from './Services';
import Testimonial from './Testimonial';
import { Carousel as CarouselSlider } from 'react-responsive-carousel';
import ImageGallery from 'react-image-gallery';

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
                    <div className='column' style={{display: 'flex', alignItems: 'center', background: 'rgba(16,46,16, 0.05)'}}> 
                        <div className='content'>
                            <img src="/static/images/garden3.jpg" alt=""/>
                        </div>                        
                    </div>
                    <div className='column is-1'></div>
                    <div className='column'>
                        <div className='content'>
                            <h2>About Us</h2>                            
                            <hr style={{border: '3px solid #339935', width: '5rem'}} />
                            <p>Welcome to Greenscapes Gardening Bramhall. We provide domestic and commercial gardening maintenance and design services in South Manchester and Cheshire.</p>
                            <h2>Domestic Garden Design and Maintenance</h2>
                            <p>We specialize in garden design, landscaped gardens, Hedge trimming, lawn maintenance, turfing and planting. We take your garden design ideas and turn them into reality from start to finish leaving you with a specific tailored garden designed and built to your specific requirements. We also offer garden maintenance services so you get time to relax and enjoy your free time.</p>
                            <h2>Commercial Ground Maintenance</h2>
                            <p>We also offer commercial ground maintenance services for Schools, Housing trusts, Companies and all types of commercial buildings.</p>
                            <p>We cover South Manchester, Bramhall, Cheadle, Cheadle Hulme, Wilmslow, Alderley Edge, Bollington, Prestbury, Handforth, Mobberly, Woodford and Poynton</p>
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
                <div style={{ display: 'flex', alignItems: 'center', minHeight: '60vh', background: 'rgba(16,46,16, 0.8)', padding: '2rem 0'}}> 
                    <div className='container' style={{minHeight: '75vh', display: 'flex', alignItems: 'center'}}>
                        <div className='columns is-centered' style={{padding: '2rem 0.25rem', margin: '0'}}>
                            <div className='column is-hidden-mobile' style={{display: 'flex', alignItems: 'center'}}>
                                <div className='content' >
                                    <ImageGallery items={images} showThumbnails={false} showFullscreenButton={false} showPlayButton={false} />
                                </div>                        
                            </div>
                            <div className='column is-1 is-hidden-mobile'></div>
                            <div className='column'>
                                <Services />
                            </div>
                        </div>                                 
                    </div>      
                </div> 
            </div>
            <Testimonial />
        </div>
    )
}

export default Home;