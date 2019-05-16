import moment  from 'moment';
import Link from 'next/link';
import '../styles/styles.scss'

const linkStyle = {
    color: 'white',
    textDecoration: 'none'
}
const titleStyle = {
    color: 'white',
    marginBottom: '1rem',
    fontWeight: 'bold',
    fontSize: '1.25rem'
}
const contentStyle = {
    fontSize: '1rem',
}

const Footer = () => (       
    <footer className="footer" style={{backgroundColor: '#1C541D', padding: '3rem 1rem 2rem 1rem'}}>
        <div className='container'>
            <div className='columns' style={{padding: '3rem 1rem'}}>
                <div className='column is-6 is-mobile-12 has-text-centered' style={linkStyle}>                    
                    <h4 style={titleStyle}>About Greenscapes Commercial Garden and Grounds Services</h4>
                    <p style={contentStyle}>We provide professional garden &amp; grounds maintenance in Cheshire, South Manchester and surrounding areas.</p>  
                    <br/>
                    <p style={contentStyle}>Our qualified maintenance teams provide a range of services to ensure that your premises continue to look their best throughout the year.</p>                                    
                </div>
                <div className='column is-4 is-mobile-12 has-text-centered'>
                    <div className='columns is-mobile'>
                        <div className='column is-6 has-text-centered' style={linkStyle}>
                            <h6 style={titleStyle}>LOCATION</h6>
                            <ul style={contentStyle}>                                
                                <Link href='/serviced-areas'>
                                    <li>
                                        <a style={linkStyle}>
                                        <span>
                                            <i className='fa fa-map-marker' style={{color: 'white', marginRight: '0.5rem'}}>
                                            </i>
                                        </span>
                                        Seal Rd, Stockport
                                        </a>
                                    </li>                                   
                                </Link>                                                                
                                <li>
                                    <a style={linkStyle} href='tel:07772656034'>
                                        <span>
                                            <i className='fa fa-phone' style={{color: 'white', marginRight: '0.5rem'}}>
                                            </i>
                                        </span>
                                        07772 656034
                                    </a>
                                </li>  
                            
                                <li>
                                    <a style={linkStyle} href='tel:01612172125'>
                                        <span>
                                            <i className='fa fa-phone' style={{color: 'white', marginRight: '0.5rem'}}>
                                            </i>
                                        </span>
                                        0161 217 2125
                                    </a> 
                                </li>  
                                <li>
                                    <a style={linkStyle} href="mailto: info@greenscapes-commercial.co.uk">
                                        <span>
                                            <i className='fa fa-envelope' style={{color: 'white', marginRight: '0.5rem'}}>
                                            </i>
                                        </span>
                                        info@greenscapes-commercial.co.uk
                                    </a>       
                                </li>  
                            </ul>         
                        </div> 
                        <div className='column is-6 has-text-centered' style={linkStyle}>
                            <h6 style={titleStyle}><span className='is-hidden-mobile'>QUICK </span>LINKS</h6>
                            <ul style={contentStyle}>
                                <Link href='/'><li><a style={linkStyle}>Home</a></li></Link>
                                <Link href='/about-us'><li><a style={linkStyle}>About</a></li></Link>
                                <Link href='/services'><li><a style={linkStyle}>Services</a></li></Link>
                                <Link href='/contact'><li><a style={linkStyle}>Contact</a></li></Link>
                            </ul>     
                        </div> 
                    </div>    
                </div>  
                <div className='column is-2 is-mobile-12 has-text-centered'>
                    <h6 style={titleStyle}><span className='is-hidden-mobile'></span>ACCREDITATIONS</h6>
                    <img src="/static/images/certified.jpeg" alt="" style={{maxWidth: '125px'}}/>
                </div>                    
            </div>            
            <hr style={{height: '0.06rem', background: 'gray'}} />
        </div>   
        <div className='container has-text-centered' style={{marginTop: '0.5rem'}}>
            <p style={{fontSize: '0.75rem', color: 'white'}}>Copyright {moment().format('YYYY')} | <a href="/" style={{fontSize: '0.75rem', color: 'white'}}>www.greenscapes-commercial.co.uk</a> | All Rights Reserved.</p>
        </div>
    </footer>
)  



export default Footer;