import GoogleMaps from '../components/GoogleMap';

const Areas = () => {
    return (
        <div className='container' style={{minHeight: '90vh'}}>
            <div className='columns is-centered' style={{padding: '2rem 1rem', margin: '0'}}>                
                <div className='column'>
                    <div className='content'>                            
                        <div style={{textAlign: 'left'}}>
                            <div style={{display: 'inline-block', paddingBottom: '1rem'}}>
                                <h2>Serviced Areas</h2>
                                <div>
                                    <hr style={{border: '3px solid #339935', width: '5rem', padding: '0', margin: '0'}} />
                                </div>
                            </div>
                        </div>                               
                        <p>Welcome to Greenscapes Gardening Bramhall. We provide domestic and commercial gardening maintenance and design services in South Manchester and Cheshire.</p>                            
                        <p>We also offer commercial ground maintenance services for Schools, Housing trusts, Companies and all types of commercial buildings.</p>
                        <p>We cover South Manchester, Bramhall, Cheadle, Cheadle Hulme, Wilmslow, Alderley Edge, Bollington, Prestbury, Handforth, Mobberly, Woodford and Poynton</p>
                        <GoogleMaps />
                    </div>
                </div>
            </div>                         
        </div>
    )
}

export default Areas;