import Link from 'next/link';

const ServiceFooter = (props) => (
    <div className='columns'>
        <div className='column'>
            <h3>Greenscapes Commercial Garden and Grounds Services</h3>
            <p>
                We provide professional garden &amp; grounds maintenance in
                Cheshire, South Manchester and surrounding areas.
            </p>
            <p>
                Our qualified maintenance teams provide a range of services to
                ensure that your premises continue to look their best throughout
                the year.
            </p>
            <p>
                Please feel free to get in contact with Greenscapes Commercial
                Garden and Grounds Services so we can discuss your requirements
                in further detail.
            </p>
            <div style={{ padding: '2rem 0', textAlign: 'left' }}>
                {/* <button className={`button is-primary`}>
                    <a href='tel:07772656034' style={{color: 'white'}}>
                        <span>
                            <i style={{marginRight: '0.5rem'}} className='fa fa-phone'>
                            </i>
                        </span>
                        Call   
                    </a>                 
                </button> */}
                <span style={{ marginLeft: '1rem' }}>
                    <Link href='/contact'>
                        <button className={`button is-primary is-outlined`}>
                            <span>
                                <i
                                    style={{ marginRight: '0.5rem' }}
                                    className='fa fa-envelope'></i>
                            </span>
                            Email
                        </button>
                    </Link>
                </span>
            </div>
        </div>
    </div>
);

export default ServiceFooter;
