import Link from 'next/link';

const ServiceFooter = (props) => (
    <div className='columns is-centered' style={{padding: '2rem 1rem'}}>
        <div className='column'>
            <div style={{maxWidth: '500px', maxHeight: '400px'}}>
                <img src={props.img} alt={props.imgAlt} />
            </div>                            
        </div>  
        <div className='column has-text-centered'>
            <h3>{props.title}</h3>
            <p>We provide domestic and commercial gardening maintenance and design services in South Manchester and Cheshire.</p>
            <p>We cover South Manchester, Bramhall, Cheadle, Cheadle Hulme, Wilmslow, Alderley Edge, Bollington, Prestbury, Handforth, Mobberly, Woodford and Poynton</p>
            <p>Please feel free to get in contact with Greenscapes Commercial so we can discuss your requirements in further detail.</p>
            <div style={{padding: '2rem 0',textAlign: 'center'}}>
                <Link href='/contact'>
                    <button className={`button is-primary`}>
                        <a style={{color: 'white'}}>
                            <span>
                                <i style={{marginRight: '0.5rem'}} className='fa fa-phone'>
                                </i>
                            </span>
                            Call
                        </a>
                    </button>
                </Link>
                <span style={{marginLeft: '1rem'}}>
                <Link href='/contact'>
                    <button className={`button is-primary`}>
                        <a style={{color: 'white'}}>
                            <span>
                                <i style={{marginRight: '0.5rem'}} className='fa fa-envelope'>
                                </i>
                            </span>
                            Email
                        </a>
                    </button>
                </Link>
                </span>
                <span style={{marginLeft: '1rem'}}>
                <Link href='/contact'>
                    <button className={`button`} style={{backgroundColor: '#3b5998'}}>
                        <a style={{color: 'white'}}>
                            <span>
                                <i style={{marginRight: '0.5rem'}} className='fa fa-facebook'>
                                </i>
                            </span>
                            Follow
                        </a>
                    </button>
                </Link>
                </span>
            </div>
        </div>
    </div> 
)


export default ServiceFooter;