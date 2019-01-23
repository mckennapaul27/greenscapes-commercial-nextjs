import TrackVisibility from 'react-on-screen';

const Services = () => {
    return (
        <div className='container'>
        <div className='content has-text-centered'>
            <div style={{textAlign: 'center'}}>
                <div style={{display: 'inline-block'}}>
                    <h3 className='title is-3' style={{width: '100%', color: 'white'}}>Services</h3>
                    <div>
                        <hr style={{border: '3px solid #339935', width: '5rem', padding: '0', margin: '0'}} />
                    </div>
                </div>
            </div>
            <div className='columns'>
                <div className='column'>
                    <div className="columns" style={{paddingTop: '3.5rem', margin: '0'}}>
                        <div className="column is-one-fifth-desktop">
                            <div style={{width: '3rem', margin: 'auto'}}>
                                <img src="/static/images/contract.svg" alt="experienced grounds maintenance" />
                            </div>
                            <p className="title is-6" style={{textAlign: 'center', color: 'white', marginTop: '1rem'}}>Total Grounds Management</p>
                        </div>
                        <div className="column is-one-fifth-desktop">
                            <div style={{width: '3rem', margin: 'auto'}}>
                                <img src="/static/images/plant.svg" alt="experienced grounds maintenance" />
                            </div>
                            <p className="title is-6" style={{textAlign: 'center', color: 'white', marginTop: '1rem'}}>Landscaping & Planting</p>
                        </div>
                        <div className="column is-one-fifth-desktop">
                            <div style={{width: '3rem', margin: 'auto'}}>
                                <img src="/static/images/hedge-clippers.svg" alt="experienced grounds maintenance" />
                            </div>
                            <p className="title is-6" style={{textAlign: 'center', color: 'white', marginTop: '1rem'}}>Hedge & Shrub Maintainance</p>
                        </div>                                        

                        <div className="column is-one-fifth-desktop">
                            <div style={{width: '3rem', margin: 'auto'}}>
                                <img src="/static/images/lawn-mower.svg" alt="experienced grounds maintenance" />
                            </div>
                            <p className="title is-6" style={{textAlign: 'center', color: 'white', marginTop: '1rem'}}>Lawn Care</p>
                        </div>
                        <div className="column is-one-fifth-desktop">
                            <div style={{width: '3rem', margin: 'auto'}}>
                                <img src="/static/images/wiping-swipe-for-floors.svg" alt="experienced grounds maintenance" />
                            </div>
                            <p className="title is-6" style={{textAlign: 'center', color: 'white', marginTop: '1rem'}}>Outdoor Cleaning</p>
                        </div>                       
                    </div>
                    <div className='columns is-hidden-mobile' style={{padding: '3.5rem 0', margin: '0'}}>
                        <div className='column' style={{padding: '0'}}>

                        </div>
                    </div>
                    {/*  */}
                    <div className="columns"  style={{paddingBottom: '3.5rem', margin: '0'}}>
                        <div className="column is-one-fifth-desktop">
                            <div style={{width: '3rem', margin: 'auto'}}>
                                <img src="/static/images/contract.svg" alt="experienced grounds maintenance" />
                            </div>
                            <p className="title is-6" style={{textAlign: 'center', color: 'white', marginTop: '1rem'}}>Total Grounds Management</p>
                        </div>
                        <div className="column is-one-fifth-desktop">
                            <div style={{width: '3rem', margin: 'auto'}}>
                                <img src="/static/images/plant.svg" alt="experienced grounds maintenance" />
                            </div>
                            <p className="title is-6" style={{textAlign: 'center', color: 'white', marginTop: '1rem'}}>Landscaping & Planting</p>
                        </div>
                        <div className="column is-one-fifth-desktop">
                            <div style={{width: '3rem', margin: 'auto'}}>
                                <img src="/static/images/hedge-clippers.svg" alt="experienced grounds maintenance" />
                            </div>
                            <p className="title is-6" style={{textAlign: 'center', color: 'white', marginTop: '1rem'}}>Hedge & Shrub Maintainance</p>
                        </div>                                        

                        <div className="column is-one-fifth-desktop">
                            <div style={{width: '3rem', margin: 'auto'}}>
                                <img src="/static/images/lawn-mower.svg" alt="experienced grounds maintenance" />
                            </div>
                            <p className="title is-6" style={{textAlign: 'center', color: 'white', marginTop: '1rem'}}>Lawn Care</p>
                        </div>
                        <div className="column is-one-fifth-desktop">
                            <div style={{width: '3rem', margin: 'auto'}}>
                                <img src="/static/images/wiping-swipe-for-floors.svg" alt="experienced grounds maintenance" />
                            </div>
                            <p className="title is-6" style={{textAlign: 'center', color: 'white', marginTop: '1rem'}}>Outdoor Cleaning</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            
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