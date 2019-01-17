import Link from 'next/link';

const HomeHead = () => {
    
    const contentStyle = {  
        backgroundImage: "url('/static/images/office_garden.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        minHeight: '90vh'
    }

    const contentS = {
        background: "url('/static/images/office_garden.jpg') no-repeat center center fixed",
        webkitBackgroundSize: 'cover',
        mozBackgroundSize: 'cover',
        oBackgroundSize: 'cover',
        backgroundSize: 'cover',
        height: '100%',
        overflow: 'hidden',
    }
    const contentStyleMobile = {  
        backgroundImage: "url('/static/images/flats_garden.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover'
    }

    return (
        <div style={contentStyle}>
            <div style={{ display: 'flex', alignItems: 'center', minHeight: '90vh', background: 'rgba(16,46,16, 0.8)'}}>
                <div className='container' >
                    <div className='has-text-centered'>
                        <h1 className="title is-1" style={{color: '#FCFAFA', padding: '1rem', fontSize: '2.75rem', lineHeight: '3rem'}}>Established And Trustworthy Commercial Garden &amp; Grounds Maintenance</h1>
                        <h2 className="subtitle is-4" style={{color: '#FCFAFA', padding: '2rem', fontSize: '1.1rem', lineHeight: '1.75rem'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</h2>
                        <Link href='/contact'>
                            <button className='button is-primary'>
                                <a style={{color: 'white'}}>
                                    <span>
                                        <i style={{marginRight: '0.5rem'}} className='fa fa-quote-left'>
                                        </i>
                                    </span>
                                    Free Quotation
                                </a>
                            </button>
                        </Link>
                        <span style={{marginLeft: '1rem'}}>
                        <Link href='/contact'>
                            <button className='button is-primary is-outlined'>
                                <a style={{color: 'white'}}>
                                    <span>
                                        <i style={{marginRight: '0.5rem'}} className='fa fa-envelope'>
                                        </i>
                                    </span>
                                    Contact Us
                                </a>
                            </button>
                        </Link>
                        </span>
                    </div>            
                </div>
            </div> 
        </div>
    )
}

export default HomeHead;