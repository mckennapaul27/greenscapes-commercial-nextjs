import Link from 'next/link';

const Contact = () => {
    return (
        <div className='columns is-centered'>
            <div className='column is-half'>
                <div className='field is-grouped is-grouped-centered'>
                    <div className='control'>
                        <Link href='/contact'>
                            <button className={`button is-primary is-medium`}>
                                <span><i className='fa fa-envelope'></i> Contact<span className='is-hidden-mobile'> Us</span></span>
                            </button>
                        </Link>
                    </div>
                    <div className='control'>
                        <button className={`button is-primary is-outlined is-medium`}>
                            <a style={{color: 'white'}} href='tel:07772 656034'>
                                <span><i className='fa fa-phone'></i> Call Us</span>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;