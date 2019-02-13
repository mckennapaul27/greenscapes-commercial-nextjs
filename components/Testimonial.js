import { Carousel as CarouselSlider } from 'react-responsive-carousel';
import {Component} from 'react';

export default class Carousel extends Component {
    render() {
        return (
            <div style={{marginTop: '3rem', minHeight: '80vh'}}>
                <div style={{textAlign: 'center'}}>
                    <div style={{display: 'inline-block'}}>
                        <h3 className='title is-3' style={{width: '100%'}}>Testimonials</h3>
                        <div>
                            <hr style={{border: '3px solid #339935', width: '5rem', padding: '0', margin: '0'}} />
                        </div>
                    </div>
                </div>
                <div className='is-hidden-touch'>
                    <CarouselSlider showThumbs={false} useKeyboardArrows={true} showStatus={false} emulateTouch={true} autoPlay={true} infiniteLoop={true}>
                        <Testimonial 
                        messageOne={`Greenscapes have been looking after our gardens for over 5 years, they
                        are always professional, reliable and polite, taking care to ensure our gardens look their best and
                        are a great space for our children to explore.`} 
                        messageTwo={`Excellent grounds maintenance all year round, always reliable and they keep
                        our grounds in top condition for all our customers.`} 
                        authorOne={'Nursery Rhymes Nursery'} 
                        authorTwo={'Energi Leisure Park'} 
                        locationOne={'Cheadle'} 
                        locationTwo={'Wilmslow'}/>                    
                    </CarouselSlider>
                </div> 
                <div className='is-hidden-desktop is-hidden-widescreen is-hidden-fullhd'>
                    <CarouselSlider showThumbs={false} useKeyboardArrows={true} showStatus={false} emulateTouch={true} infiniteLoop={true} autoPlay={true}>
                        <TestimonialMobile 
                        messageOne={`Greenscapes have been looking after our gardens for over 5 years, they
                        are always professional, reliable and polite, taking care to ensure our gardens look their best and
                        are a great space for our children to explore.`}                         
                        authorOne={'Nursery Rhymes Nursery'} 
                        locationOne={'Cheadle'} 
                        /> 
                        <TestimonialMobile
                        messageOne={`Excellent grounds maintenance all year round, always reliable and they keep
                        our grounds in top condition for all our customers.`}
                        authorOne={'Energi Leisure Park'}
                        locationOne={'Wilmslow'}/>                    
                    </CarouselSlider>
                </div> 
            </div>            
        );
    }
}

const Testimonial = (props) => {
    return (
        <div className="notification is-white" style={{height: '100%', marginBottom: '4rem', padding: '2rem'}}>
            <div className='content'>
                <div className='columns'>
                    <div className='column'>                        
                        <div className="notification is-light" style={{height: '100%'}}>
                            <p style={{textAlign: 'center', padding: '1.5rem 1.5rem 0 1.5rem'}}><span style={{paddingRight: '1rem'}}><i className="fa fa-quote-left" style={{fontSize: '3rem', color: '#339935'}}></i></span>{props.messageOne}</p>
                            <p style={{marginBottom: '0.25rem'}}><strong>{props.authorOne}</strong></p>
                            <p style={{marginBottom: '0.25rem'}}>{props.locationOne}</p>
                            <p style={{color: '#339935'}}><strong>Customer</strong></p>
                        </div>
                    </div>
                    <div className='column'>
                        <div className="notification is-light" style={{height: '100%'}}>
                            <p style={{textAlign: 'center', padding: '1.5rem 1.5rem 0 1.5rem'}}><span style={{paddingRight: '1rem'}}><i className="fa fa-quote-left" style={{fontSize: '3rem', color: '#339935'}}></i></span>{props.messageTwo}</p>
                            <p style={{marginBottom: '0.25rem'}}><strong>{props.authorTwo}</strong></p>
                            <p style={{marginBottom: '0.25rem'}}>{props.locationTwo}</p>
                            <p style={{color: '#339935'}}><strong>Customer</strong></p>
                        </div>
                    </div>             
                </div>         
            </div>               
        </div>
    )    
}

const TestimonialMobile = (props) => {
    return (
        <div className="notification is-white" style={{height: '100%', marginBottom: '4rem', padding: '2rem'}}>
            <div className='content' style={{height: '100%'}}>
                <div className='columns' style={{height: '100%'}}>
                    <div className='column' style={{height: '100%'}}>                        
                        <div className="notification is-light" style={{height: '100%'}}>
                            <p style={{textAlign: 'center', padding: '1.5rem 1.5rem 0 1.5rem'}}><span style={{paddingRight: '0.5rem'}}><i className="fa fa-quote-left" style={{fontSize: '3rem', color: '#339935'}}></i></span>{props.messageOne}</p>
                            <p style={{marginBottom: '0.25rem'}}><strong>{props.authorOne}</strong></p>
                            <p style={{marginBottom: '0.25rem'}}>{props.locationOne}</p>
                            <p style={{color: '#339935'}}><strong>Customer</strong></p>
                        </div>
                    </div>                        
                </div>         
            </div>               
        </div>
    )    
}



