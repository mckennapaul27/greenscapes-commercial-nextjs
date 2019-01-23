import TrackVisibility from 'react-on-screen';
import FadeIn from 'react-fade-in';

const Services = () => {
    return (
        <div className='content has-text-centered'>
            <div style={{textAlign: 'center'}}>
                <div style={{display: 'inline-block'}}>
                    <h3 className='title is-3' style={{width: '100%', color: 'white'}}>Services</h3>
                    <div>
                        <hr style={{border: '3px solid #339935', width: '5rem', padding: '0', margin: '0'}} />
                    </div>
                </div>
            </div>
            <div className="columns is-mobile" style={{padding: '1.5rem 0'}}>
                <div className="column is-one-fifth">
                    <div style={{width: '3rem', margin: 'auto'}}>
                        <img src="/static/images/contract.svg" alt="experienced grounds maintenance" />
                    </div>
                    <p className="title is-6" style={{textAlign: 'center', color: 'white', marginTop: '1rem'}}>Total Grounds Management</p>
                </div>
                <div className="column is-one-fifth">
                    <div style={{width: '3rem', margin: 'auto'}}>
                        <img src="/static/images/plant.svg" alt="experienced grounds maintenance" />
                    </div>
                    <p className="title is-6" style={{textAlign: 'center', color: 'white', marginTop: '1rem'}}>Landscaping & Planting</p>
                </div>
                <div className="column is-one-fifth">
                    <div style={{width: '3rem', margin: 'auto'}}>
                        <img src="/static/images/hedge-clippers.svg" alt="experienced grounds maintenance" />
                    </div>
                    <p className="title is-6" style={{textAlign: 'center', color: 'white', marginTop: '1rem'}}>Hedge & Shrub Maintainance</p>
                </div>                                        

                <div className="column is-one-fifth">
                    <div style={{width: '3rem', margin: 'auto'}}>
                        <img src="/static/images/lawn-mower.svg" alt="experienced grounds maintenance" />
                    </div>
                    <p className="title is-6" style={{textAlign: 'center', color: 'white', marginTop: '1rem'}}>Lawn Care</p>
                </div>
                <div className="column is-one-fifth">
                    <div style={{width: '3rem', margin: 'auto'}}>
                        <img src="/static/images/wiping-swipe-for-floors.svg" alt="experienced grounds maintenance" />
                    </div>
                    <p className="title is-6" style={{textAlign: 'center', color: 'white', marginTop: '1rem'}}>Outdoor Cleaning</p>
                </div>
                {/* <div className="column is-one-fifth">
                    <div style={{width: '3rem', margin: 'auto'}}>
                        <img src="/static/images/planting.svg" alt="experienced grounds maintenance" />
                    </div>
                    <p className="title is-6" style={{textAlign: 'center', color: 'white', marginTop: '1rem'}}>Vegetation Control</p>
                </div> */}
            </div>
        </div>
    )
}


const VisibleLevel = () => {
    return (
        <TrackVisibility once  once partialVisibility>
            <Services />
        </TrackVisibility>
    )    
}

export default Services;