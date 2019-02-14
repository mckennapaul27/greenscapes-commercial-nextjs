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
                                <img src="/static/images/contract.svg" alt="Total Grounds Management" />
                            </div>
                            <p className="title is-6" style={{textAlign: 'center', color: 'white', marginTop: '1rem'}}>Total Grounds Management</p>
                        </div>
                        <div className="column is-one-fifth-desktop">
                            <div style={{width: '3rem', margin: 'auto'}}>
                                <img src="/static/images/24-hours.svg" alt="experienced grounds maintenance" />
                            </div>
                            <p className="title is-6" style={{textAlign: 'center', color: 'white', marginTop: '1rem'}}>All Year Round Maintenance</p>
                        </div>
                        <div className="column is-one-fifth-desktop">
                            <div style={{width: '3rem', margin: 'auto'}}>
                                <img src="/static/images/hedge-clippers.svg" alt="experienced grounds maintenance" />
                            </div>
                            <p className="title is-6" style={{textAlign: 'center', color: 'white', marginTop: '1rem'}}>Hedge &amp; Shrub Maintainance</p>
                        </div>    
                        <div className="column is-one-fifth-desktop">
                            <div style={{width: '3rem', margin: 'auto'}}>
                                <img src="/static/images/plant.svg" alt="experienced grounds maintenance" />
                            </div>
                            <p className="title is-6" style={{textAlign: 'center', color: 'white', marginTop: '1rem'}}>Landscaping &amp; Planting</p>
                        </div>
                        <div className="column is-one-fifth-desktop">
                            <div style={{width: '3rem', margin: 'auto'}}>
                                <img src="/static/images/lawn-mower.svg" alt="experienced grounds maintenance" />
                            </div>
                            <p className="title is-6" style={{textAlign: 'center', color: 'white', marginTop: '1rem'}}>Lawn Care</p>
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
                                <img src="/static/images/garage.svg" alt="experienced grounds maintenance" />
                            </div>
                            <p className="title is-6" style={{textAlign: 'center', color: 'white', marginTop: '1rem'}}>Business and Retail</p>
                        </div>
                        <div className="column is-one-fifth-desktop">
                            <div style={{width: '3rem', margin: 'auto'}}>
                                <img src="/static/images/wiping-swipe-for-floors.svg" alt="experienced grounds maintenance" />
                            </div>
                            <p className="title is-6" style={{textAlign: 'center', color: 'white', marginTop: '1rem'}}>Outdoor Cleaning</p>
                        </div>  
                        <div className="column is-one-fifth-desktop">
                            <div style={{width: '3rem', margin: 'auto'}}>
                                <img src="/static/images/university.svg" alt="experienced grounds maintenance" />
                            </div>
                            <p className="title is-6" style={{textAlign: 'center', color: 'white', marginTop: '1rem'}}>School Maintenance</p>
                        </div>       
                        <div className="column is-one-fifth-desktop">
                            <div style={{width: '3rem', margin: 'auto'}}>
                                <img src="/static/images/snowflake.svg" alt="experienced grounds maintenance" />
                            </div>
                            <p className="title is-6" style={{textAlign: 'center', color: 'white', marginTop: '1rem'}}>Winter Gritting Service</p>
                        </div> 
                        <div className="column is-one-fifth-desktop">
                            <div style={{width: '3rem', margin: 'auto'}}>
                                <img src="/static/images/cogwheel.svg" alt="experienced grounds maintenance" />
                            </div>
                            <p className="title is-6" style={{textAlign: 'center', color: 'white', marginTop: '1rem'}}>General Maintenance</p>
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