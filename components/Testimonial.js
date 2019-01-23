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
                                    
                <CarouselSlider showThumbs={false} useKeyboardArrows={true} showStatus={false} emulateTouch={true} autoPlay={true} infiniteLoop={true}>
                    <Testimonial messageOne={`Simon and his team have been looking after our garden for about 3 years now and have done a fantastic job. They offer a professional and reliable service with great results. Highly recommend them.`} messageTwo={`I'm a pensioner and Simon has been ripping me off for approx 4 years now. I pay him £20 per week and I never see him. I only ever see this young scrote from Brinny who clears some leaves and is gone within 10 minutes.`} authorOne={'Zoe'} authorTwo={'Lynne McKenna'} locationOne={'Bramhall'} locationTwo={'Poynton'}/>
                    <Testimonial messageOne={`Very impressed by the professionalism and standard of work at a very reasonable and competitive price. Would be very happy to recommend Simon and his team to anyone.`} messageTwo={`Simon and his team have just finished completely transforming my very old looking and neglected garden. They cleared everything out and started from scratch. I can't believe the transformation, I have to keep reminding myself that it's my garden! `} authorOne={'Zoe'} authorTwo={'Shaun Serridge'} locationOne={'Cheadle'} locationTwo={'Stockport'} />
                </CarouselSlider>
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


