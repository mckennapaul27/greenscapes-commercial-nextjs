import GoogleMaps from '../components/GoogleMap';
import Head from 'next/head';

const Areas = () => {
    return (
        <div className='container' style={{minHeight: '90vh'}}>
            <Head>
            <meta charSet="utf-8" />
            <title>Serviced Areas &amp; Coverage | Greenscapes Commercial Maintenance</title>
            <meta name="description" content="Greenscapes Commercial Garden and Grounds Services provide professional garden &amp; grounds maintenance in Cheshire, South Manchester and surrounding areas." />
            <link rel="canonical" href="https://www.greenscapes-commercial.co.uk/serviced-areas" />
            </Head>
            <div className='columns is-centered' style={{padding: '2rem 0', margin: '0'}}>                
                <div className='column'>
                <nav className="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                        <li><a href="/">Home</a></li>                                    
                        <li className="is-active"><a href="serviced-areas" aria-current="page">Serviced areas</a></li>
                    </ul>
                </nav>
                    <div className='content'>                            
                        <div style={{textAlign: 'left'}}>
                            <div style={{display: 'inline-block', paddingBottom: '1rem'}}>
                                <h2>Serviced Areas</h2>
                                <div style={{textAlign: 'left'}}>
                                    <hr style={{border: '3px solid #339935', width: '5rem', padding: '0', margin: '0', display: 'inline-block'}} />
                                </div>
                            </div>
                        </div>                               
                        <p>Greenscapes Commercial Garden and Grounds Services provide professional garden &amp; grounds maintenance in Cheshire, South Manchester and the whole of the North West.</p>                            
                        <p>Our qualified maintenance teams provide a range of services to ensure that your premises continue to look their best throughout the year.</p> 
                        <ul>
                            <li>Care Homes</li>
                            <li>Retirement Living Complexes</li>
                            <li>Nurseries</li>
                            <li>Schools</li>
                            <li>Industrial
                            Grounds</li>
                            <li>Housing Trusts</li>
                            <li>Letting Agent</li>
                            <li>All types of commercial buildings</li>
                        </ul>                     
                        <GoogleMaps />
                    </div>
                </div>
            </div>                         
        </div>
    )
}

export default Areas;