import Link from 'next/link';
import Head from 'next/head';

const ServicesOverview = () => {
    return (
        <div className='container' style={{minHeight: '50vh'}}>
            <Head>
            <meta charSet="utf-8" />
            <title>Services Overview | Greenscapes Commercial Maintenance</title>
            <meta name="description" content="Our qualified maintenance teams provide a range of services to ensure that your premises continue to look their best throughout the year." />
            <link rel="canonical" href="https://www.greenscapes-commercial.co.uk/services-overview" />
            </Head>
            <div className='columns is-centered' style={{padding: '2rem 0', margin: '0'}}>                
                <div className='column'>
                    <nav class="breadcrumb" aria-label="breadcrumbs">
                        <ul>
                            <li><a href="/">Home</a></li>                                    
                            <li class="is-active"><a href="cservices" aria-current="page">Services overview</a></li>
                        </ul>
                    </nav>

                    <div className='content'>                            
                        <div style={{textAlign: 'left'}}>
                            <div style={{display: 'inline-block', paddingBottom: '1rem'}}>
                                <h2>Services Overview</h2>
                                <div style={{textAlign: 'left'}}>
                                    <hr style={{border: '3px solid #339935', width: '5rem', padding: '0', margin: '0', display: 'inline-block'}} />
                                </div>
                            </div>
                        </div>                               
                        <p>We provide professional garden &amp; grounds maintenance in Cheshire, South Manchester and surrounding areas.</p> 
                        <p>At Greenscapes Commercial we take care of a wide variety of clients including:</p> 
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
                        <p>We offer a range of services for commercial clients.</p> 
                        <p>Our qualified maintenance teams provide a range of services to ensure that your premises continue to look their best throughout the year.</p> 
                        <ul>
                            <li>All Year Round Grounds Management</li>
                            <li>Business and Retail Maintenance</li>
                            <li>Hedge and Shrub Maintenance</li>
                            <li>Winter Gritting Service</li>
                            <li>School Maintenance</li>
                            <li>Landscaping &amp; Planting</li>
                            <li>Lawn Care</li>
                            <li>Outdoor Cleaning</li>
                            <li>Spraying &amp; Vegetation Control</li>
                            <li>Tree Surgery</li>
                            <li>Graffiti Removal</li>
                        </ul>        
                        <p>However, our services are not only limited to the list above. Please do not hesiate to <Link href='/contact'><span><strong>contact us</strong></span></Link> to see whether we can assist you.</p>          
                    </div>
                </div>
            </div>                         
        </div>
    )
}

export default ServicesOverview;