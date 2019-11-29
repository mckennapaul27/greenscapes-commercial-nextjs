import ServiceFooter from './ServiceFooter';
import Head from 'next/head';
import Link from 'next/link';

const ServiceSelected = (service) => {
    if (service === 'grounds-management') {
        return (
            <div>   
                <Head>
                <meta charSet="utf-8" />
                <title>Grounds Management | Greenscapes Commercial Maintenance</title>
                <meta name="description" content="We cover various types of grounds maintenance, including care homes, retirement living complexes, nurseries, schools, industrial grounds, housing trusts, letting agents and many more" />
                <link rel="canonical" href={`https://www.greenscapes-commercial.co.uk/services/${service}`} />
                </Head>         
                <ServiceLayout title={'Grounds Management'} >
                    <p>We have over 15 years combined experience in providing a great service to our clients. </p> 
                    <p>Our teams of highly trained operatives use only the latest machinery leaving your grounds looking at their best all year round. Our grounds services can be tailor made to suit any specific needs you may have.</p>                    
                    <p>We cover various types of grounds maintenance, including care homes, retirement living complexes, nurseries, schools, industrial grounds, housing trusts, letting agents and many more.</p> 
                </ServiceLayout>  
            </div>
        )
    }
    else if (service === 'business-retail-maintenance') {
        return (
            <div>
                <Head>
                <meta charSet="utf-8" />
                <title>Business Retail Grounds Management | Greenscapes Commercial Maintenance</title>
                <meta name="description" content="From business parks to shopping centres and retail parks, at Greenscapes Commercial Garden and Grounds Services, we can provide you with a top class maintenance service to keep your external areas clean and make sure that they are well maintained." />
                <link rel="canonical" href={`https://www.greenscapes-commercial.co.uk/services/${service}`} />
                </Head>    
                <ServiceLayout title={'Business Retail Management'} >
                    <p>From business parks to shopping centres and retail parks, at Greenscapes Commercial Garden and Grounds Services, we can provide you with a top class maintenance service to keep your external areas clean and make sure that they are well maintained. Our services cover litter picking and pavement sweeping of hard surfaces as well as jet washing of car parks and walkways to remove leaves, debris, moss and other dirt and keep your external surfaces looking great.</p>
                    <p>It's not just hard surfaces where we can help as we’ll also be happy to manage all elements of your grounds maintenance including landscaping, planting, lawn care, hedging, and shrub maintenance. Our regular maintenance visits can help you make the right first impression and help you promote a positive corporate image. </p>
                </ServiceLayout>  
            </div>                    
        )
    }
    else if (service === 'commercial-landscaping') {
        return (
            <div>
                <Head>
                <meta charSet="utf-8" />
                <title>Commercial Landscaping | Greenscapes Commercial Maintenance</title>
                <meta name="description" content="From business parks to shopping centres and retail parks, at Greenscapes Commercial Garden and Grounds Services, we can provide you with a top class maintenance service to keep your external areas clean and make sure that they are well maintained." />
                <link rel="canonical" href={`https://www.greenscapes-commercial.co.uk/services/${service}`} />
                </Head>    
                <ServiceLayout title={'Commercial Landscaping'} >
                    <p>Our staff have a wide range of talents, meaning that we can carry out most work in-house. We also have expert sub-contractors who form part of our wider team and who we can call on for specialist tasks. Greenscapes Commercial is the contractor of choice for many household name businesses, construction companies and public sector projects. </p>
                    <p>Existing clients have engaged us to provide landscaping and construction services at sites as diverse as supermarkets, hospitals, company headquarters, residential homes.</p>
                    <div className='columns'>
                        <div className='column'>
                            <h4>Hard landscaping</h4>
                            <img src='/static/images/corporate-landscaping.jpg' alt='landscaping'/>
                            <p>Hard landscaping provides the structure of the scheme, creating a framework for the planting and a pathway to guide the eye and the feet through the scene.</p><p>We can construct walkways, bridges, decking, paving and fencing using top quality materials and workmanship, for durability and continued good looks.</p>
                        </div>
                        <div className='column'>
                            <h4>Soft Landscaping</h4>
                            <img src='/static/images/soft.jpg' alt='landscaping'/>
                            <p>By choosing top quality plants and trees, we can ensure that the finished project will look good immediately and continue to thrive in the years to come. We know the best plants for particular soils and topography, and can advise on varieties suitable for formal or informal settings.</p><p>We carry out groundworks and irrigation with due regard to both the ecology of the local environment and health and safety.</p>
                            <div class="field is-grouped">
                                <p class="control">
                                    <button className={`button is-primary`}>
                                        <a href='tel:07772656034' style={{color: 'white'}}>
                                            <span>
                                                <i className='fa fa-phone'>
                                                </i> Call
                                            </span>
                                        </a>                 
                                    </button>
                                </p>
                                <Link href='/contact'>
                                    <button className={`button is-primary is-outlined`}>                        
                                        <span>
                                            <i className='fa fa-envelope'>
                                            </i> Email  
                                        </span>              
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </ServiceLayout>  
            </div>                    
        )
    }
    else if (service === 'school-maintenance') {
        return (
            <div>
                <Head>
                <meta charSet="utf-8" />
                <title>School Grounds Maintenance | Greenscapes Commercial Maintenance</title>
                <meta name="description" content="Greenscapes Commercial Garden and Grounds Services, we can provide a full range of exterior maintenance and grounds maintenance services for schools, colleges and universities throughout the North West" />
                <link rel="canonical" href={`https://www.greenscapes-commercial.co.uk/services/${service}`} />
                </Head>  
                <ServiceLayout title={'School Maintenance'} >
                    <p>The daily upkeep and maintenance of a school plays an important part in making sure the school is safe and that it creates the right impression. At Greenscapes Commercial Garden and Grounds Services, we can provide a full range of exterior maintenance and grounds maintenance services for schools, colleges and universities throughout the North West. From hard paved areas such as walkways and patios to car parks and signage, we can undertake all types of external maintenance and grounds maintenance for schools.</p>
                    <p>As well as exterior maintenance for schools we also offer a full spectrum of grounds maintenance services which includes:</p>
                    <ul>
                        <li>Landscaping and planting</li>
                        <li>Lawn care</li>
                        <li>Tree surgery</li>
                        <li>Hedge and shrub maintenance</li>
                        <li>Planting schemes</li>
                        <li>Spraying and vegetation control</li>
                    </ul>
                </ServiceLayout>  
            </div>                    
        )
    }
    else if (service === 'hedge-shrub-maintenance') {
        return (
            <div>
                <Head>
                <meta charSet="utf-8" />
                <title>Hedge &amp; Shrub Maintenance | Greenscapes Commercial Maintenance</title>
                <meta name="description" content="We have various contracts for cutting hedges alone through managing agents, commercial property companies, schools/colleges, hospitals and many more." />
                <link rel="canonical" href={`https://www.greenscapes-commercial.co.uk/services/${service}`} />
                </Head>  
                <ServiceLayout title={'Hedge & Shrub Maintenance'} >
                    <p>Tackling hedges that have grown wild can be a hassle and awkward to correct. We offer a one off service or regular maintenance to trim hedges down to the client's required size.</p>
                    <p>We have various contracts for cutting hedges alone through managing agents, commercial property companies, schools/colleges, hospitals and many more.</p>
                </ServiceLayout>  
            </div>                    
        )
    }
    else if (service === 'landscaping-planting') {
        return (
            <div>
                <Head>
                <meta charSet="utf-8" />
                <title>Landscaping &amp; Planting | Greenscapes Commercial Maintenance</title>
                <meta name="description" content="We offer hard and soft landscaping services tailored to our client's needs. Planting can really boost the appearance of any property and if planned properly, can be very cost effective. We can deliver planting schemes in keeping with the surroundings or totally re-plan the area." />
                <link rel="canonical" href={`https://www.greenscapes-commercial.co.uk/services/${service}`} />
                </Head>  
                <ServiceLayout title={'Landscaping & Planting'}>
                    <p>We offer hard and soft landscaping services tailored to our client's needs. Planting can really boost the appearance of any property and if planned properly, can be very cost effective. We can deliver planting schemes in keeping with the surroundings or totally re-plan the area.</p>
                    <p>We offer hard and soft landscaping services across the North West. Some of the landscaping services we offer include:</p>
                    <ul>
                        <li>Block Paving</li>
                        <li>Flag laying / Re-laying </li>
                        <li>Turfing</li>
                        <li>Artificial Grass</li>
                        <li>Planting</li>
                        <li>Complete design</li>
                    </ul>
                </ServiceLayout>  
            </div>                    
        )
    }
   
    else if (service === 'lawn-care') {
        return (
            <div>
                <Head>
                <meta charSet="utf-8" />
                <title>Lawn Care | Greenscapes Commercial Maintenance</title>
                <meta name="description" content="We have been providing lawn care for many years and know the exact timings for treatments to gain the best outcome for your lawns. The best weed &amp; feed solution will be applied by our trained staff allowing the weeds to curl and the grass to finally get back in control." />
                <link rel="canonical" href={`https://www.greenscapes-commercial.co.uk/services/${service}`} />
                </Head>  
                <ServiceLayout title={'Lawn Care'}>
                    <p>Nothing enhances your corporate location better than a healhy, green, weed free lawn. We offer a full lawn care service including, clearing and applying weed killers and feed &amp; fertilisers to bring your lawn back to life and looking at it's very best.</p>
                    <p>We have been providing lawn care for many years and know the exact timings for treatments to gain the best outcome for your lawns. The best weed &amp; feed solution will be applied by our trained staff allowing the weeds to curl and the grass to finally get back in control. </p>
                </ServiceLayout>  
            </div>                    
        )
    }
    else if (service === 'outdoor-cleaning') {
        return (
            <div>
                <Head>
                <meta charSet="utf-8" />
                <title>Outdoor Cleaning | Greenscapes Commercial Maintenance</title>
                <meta name="description" content="For Retail or Leisure facilities litter can cause a real problem and needs to be managed properly to maintain your corporate image. We work with a number of clients in providing spotless spaces to boost image and reduce risk of pests." />
                <link rel="canonical" href={`https://www.greenscapes-commercial.co.uk/services/${service}`} />
                </Head>  
                <ServiceLayout title={'Outdoor Cleaning'}>
                    <p>For Retail or Leisure facilities litter can cause a real problem and needs to be managed properly to maintain your corporate image. We work with a number of clients in providing spotless spaces to boost image and reduce risk of pests.</p>
                    <p>We offer daily, weekly and monthly services to shops, retail parks, shopping centres, office blocks and many more. Litter picking is carried out to the highest standard and disposed of appropriately. All our services can be tailored to specific sites/clients.</p>
                    <p>With Health &amp; Safety in mind, a slippery walk way or car park can be a potential hazard. We offer leaf clearances and moss removal during the winter months. This can be a one off clearance of your car park or regular maintenance.</p>
                </ServiceLayout>  
            </div>                    
        )
    }
    else if (service === 'spraying-vegetation-control') {
        return (
            <div>
                <Head>
                <meta charSet="utf-8" />
                <title>Spraying &amp; Vegetation Control | Greenscapes Commercial Maintenance</title>
                <meta name="description" content="We offer a range of responsible approaches to all areas of vegetation management. Our team are qualified and can improve your property with efficient and cost effective methods." />
                <link rel="canonical" href={`https://www.greenscapes-commercial.co.uk/services/${service}`} />
                </Head>  
                <ServiceLayout title={'Spraying & Vegetation Control'}>
                    <p>We offer a range of responsible approaches to all areas of vegetation management. Our team are qualified and can improve your property with efficient and cost effective methods.</p>
                    <p>Japanese Knotweed is a highly invasive plant and can damage your building, car parks and any other structure. We are highly trained to deal with this pesky species and have all the relevant qualifications to perform surveys, reports, management plans, advice and treatment options</p>
                    <p>We often work with commercial clients wanting to extend their buildings, residential clients that have let it get out of control. All our waste is taken off-site and disposed of appropriately. </p>
                </ServiceLayout>  
            </div>                    
        )
    }
    else if (service === 'tree-surgery') {
        return (
            <div>
                <Head>
                <meta charSet="utf-8" />
                <title>Tree Surgery | Greenscapes Commercial Maintenance</title>
                <meta name="description" content="All aspects of professional tree care are catered for, from removing the smallest of branches to felling large trees which are carried out by qualified staff." />
                <link rel="canonical" href={`https://www.greenscapes-commercial.co.uk/services/${service}`} />
                </Head>  
                <ServiceLayout title={'Tree Surgery'}>
                    <p>All aspects of professional tree care are catered for, from removing the smallest of branches to felling large trees which are carried out by qualified staff.</p>
                    <p>Our services include tree pruning, thinning, felling and processing</p>
                    <p>All our waste is taken off-site and disposed of appropriately.</p>
                </ServiceLayout>  
            </div>                    
        )
    }
    else if (service === 'jet-pressure-washing') {
        return (
            <div>
                <Head>
                <meta charSet="utf-8" />
                <title>Jet &amp; Pressure Washing | Greenscapes Commercial Maintenance</title>
                <meta name="description" content="Using high power, industrial pressure washers our team are able to clean a wide range of surfaces including car parks, sports courts, hard landscaped areas, hospitals, housing association premises, patios, driveways and much more." />
                <link rel="canonical" href={`https://www.greenscapes-commercial.co.uk/services/${service}`} />
                </Head>  
                <ServiceLayout title={'Jet & Pressure Washing'}>
                    <p>Because first impressions matter, let Greenscapes Commercial Garden and Grounds Services help to keep your walls, paving and hard areas clean by jet washing the dirt away. Using high power, industrial pressure washers our team are able to clean a wide range of surfaces including car parks, sports courts, hard landscaped areas, hospitals, housing association premises, patios, driveways and much more.</p>
                    <p>Greenscapes Commercial Garden and Grounds Services provide a professional, cost-effective and effective pressure washing service for commercial and residential customers in Cheshire, SOuth Manchester and throughout the North West. Using the latest equipment we can clean a wide range of areas without the need for an external water supply. </p>
                    <p>Some examples of our commercial pressure washing service include:</p>
                    <ul>
                        <li>Restaurant paving maintenance</li>
                        <li>Hospital paving maintenance</li>
                        <li>Retail car park maintenance</li>
                        <li>University &amp; school campuses</li>
                    </ul>
                </ServiceLayout>  
            </div>                    
        )
    }
    else if (service === 'graffiti-removal') {
        return (
            <div>
                <Head>
                <meta charSet="utf-8" />
                <title>Graffiti Removal | Greenscapes Commercial Maintenance</title>
                <meta name="description" content="We offer graffiti removal services across the North West to retail parks, shop owners, councils, housing associations, commercial clients and anybody who may be on the receiving end of this vandalism." />
                <link rel="canonical" href={`https://www.greenscapes-commercial.co.uk/services/${service}`} />
                </Head>  
                <ServiceLayout title={'Graffiti Removal'}>
                    <p>Graffiti can look unsightly and appears overnight. Our effective methods can help remove graffiti quickly and completely. </p>
                    <p>We offer graffiti removal services across the North West to retail parks, shop owners, councils, housing associations, commercial clients and anybody who may be on the receiving end of this vandalism. </p>
                    <p>We have contracts with a lot of commercial companies to remove any graffiti that comes their way. We provide this service by providing cost effective solutions and by always being able to meet their timescale.</p>
                </ServiceLayout>  
            </div>                    
        )
    }
}





const ServiceLayout = (props) => (    
    <div className='container'>
        <div className='column' style={{padding: '3rem 1rem'}}>
            <nav class="breadcrumb" aria-label="breadcrumbs">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/services">Services</a></li>                    
                    <li class="is-active"><a href="#" aria-current="page">{props.title}</a></li>
                </ul>
            </nav>
            <div className='content'>                            
                <div style={{textAlign: 'left'}}>
                    <div style={{display: 'inline-block', paddingBottom: '1rem'}}>
                        <h2>{props.title}</h2>
                        <div style={{textAlign: 'left'}}>
                            <hr style={{border: '3px solid #339935', width: '5rem', padding: '0', margin: '0', display: 'inline-block'}} />
                        </div>
                    </div>
                </div>                              
                {props.children}
                <hr style={{border: '1px solid #F0F3F3', width: '100%'}} />
                <ServiceFooter img={props.img} imgAlt={props.imgAlt}/> 
            </div>
        </div>
    </div>
)


export default ServiceSelected;