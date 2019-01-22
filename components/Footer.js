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
                    <h4 style={titleStyle}>ABOUT GREENSCAPES COMMERCIAL</h4>
                    <p style={contentStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.</p>  
                    <br/>
                    <p style={contentStyle}>Fusce vel dolor eget tellus volutpat luctus quis sed ipsum. Donec fermentum fermentum fermentum. Sed commodo lacinia neque ac imperdiet. Curabitur non semper lectus.</p>                                    
                </div>
                <div className='column is-6 is-mobile-12 has-text-centered'>
                    <div className='columns is-mobile'>
                        <div className='column is-8 has-text-centered' style={linkStyle}>
                            <h6 style={titleStyle}>LOCATION</h6>
                            <ul style={contentStyle}>                                
                                <Link href='/'>
                                    <li>
                                        <p>
                                            <span>
                                                <i className='fa fa-map-marker' style={{color: 'white', marginRight: '0.5rem'}}>
                                                </i>
                                            </span>
                                            <a style={linkStyle}>139 Seal Rd, Bramhall, Stockport SK7 2LL</a>
                                        </p>                                        
                                    </li>
                                </Link>
                                <br className='is-hidden-mobile'/>
                                <Link href='/'>
                                    <li>
                                        <p>
                                            <span>
                                                <i className='fa fa-phone' style={{color: 'white', marginRight: '0.5rem'}}>
                                                </i>
                                            </span>
                                            <a style={linkStyle}>07772 656034</a>
                                        </p>                                        
                                    </li>
                                </Link>
                                <Link href='/'>
                                    <li>
                                        <p>
                                            <span>
                                                <i className='fa fa-phone' style={{color: 'white', marginRight: '0.5rem'}}>
                                                </i>
                                            </span>
                                            <a style={linkStyle}>0161 217 2125</a>
                                        </p>                                        
                                    </li>
                                </Link>
                                <br className='is-hidden-mobile'/>
                                <Link href='/'>
                                    <li>
                                        <p>
                                            <span>
                                                <i className='fa fa-envelope' style={{color: 'white', marginRight: '0.5rem'}}>
                                                </i>
                                            </span>
                                            <a style={linkStyle}>info@greenscapes-commercial.com</a>
                                        </p>                                        
                                    </li>
                                </Link>
                            </ul>         
                        </div> 
                        <div className='column is-4 has-text-centered' style={linkStyle}>
                            <h6 style={titleStyle}><span className='is-hidden-mobile'>QUICK </span>LINKS</h6>
                            <ul style={contentStyle}>
                                <Link href='/'><li><a style={linkStyle}>Home</a></li></Link>
                                <Link href='/'><li><a style={linkStyle}>About</a></li></Link>
                                <Link href='/'><li><a style={linkStyle}>Services</a></li></Link>
                                <Link href='/'><li><a style={linkStyle}>Blog</a></li></Link>
                                <Link href='/'><li><a style={linkStyle}>Contact</a></li></Link>
                                <Link href='/'><li><a style={linkStyle}>Sitemap</a></li></Link>  
                            </ul>     
                        </div>  
                    </div>    
                </div>                      
            </div>
            <hr style={{height: '0.06rem', background: 'F0F3F3'}} />
        </div>   
        <div className='container has-text-centered' style={{marginTop: '0.5rem'}}>
            <p style={{fontSize: '0.75rem', color: 'white'}}>Copyright {moment().format('YYYY')} | <a href="/" style={{fontSize: '0.75rem', color: 'white'}}>www.greenscapes-commercial.com</a> | All Rights Reserved.</p>
        </div>
    </footer>
)  



export default Footer;