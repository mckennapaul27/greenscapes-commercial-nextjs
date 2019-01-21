import moment  from 'moment';
import Link from 'next/link';
import '../styles/styles.scss'

const linkStyle = {
    color: '#CCDBDC',
    textDecoration: 'none'
}
const titleStyle = {
    color: 'white',
    marginBottom: '1rem'
}
const contentStyle = {
    fontSize: '1rem',
}

const Footer = () => (       
    <footer className="footer" style={{backgroundColor: '#1C541D', bottom: 0, paddingBottom: '4rem',position: 'relative'}}>
        <div className='container'>
            <div className='columns'>
                <div className='column is-6 is-mobile-12 has-text-centered' style={linkStyle}>                    
                    <h4 style={titleStyle}>About greenscapes-commercial.com</h4>
                    <p style={contentStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                    <br/> <br/>                       
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>                    
                </div>
                <div className='column is-6 is-mobile-12 has-text-centered'>
                    <div className='columns is-mobile'>
                        <div className='column is-5 has-text-centered' style={linkStyle}>
                            <h6 style={titleStyle}>eWallets</h6>
                            <ul style={contentStyle}>                                
                                <Link href='/skrill/cashback'><li><a style={linkStyle}>Skrill cashback</a></li></Link>
                                <Link href='/neteller/cashback'><li><a style={linkStyle}>Neteller cashback</a></li></Link>
                                <Link href='/ecopayz/cashback'><li><a style={linkStyle}>Ecopayz cashback</a></li></Link>
                                <Link href='/skrill/review'><li><a style={linkStyle}>Skrill review</a></li></Link>
                                <Link href='/neteller/review'><li><a style={linkStyle}>Neteller review</a></li></Link>
                                <Link href='/ecopayz/review'><li><a style={linkStyle}>Ecopayz review</a></li></Link>
                            </ul>         
                        </div>  
                        <div className='column is-3 has-text-centered' style={linkStyle}>
                            <h6 style={titleStyle}>Connect</h6>
                            <ul style={contentStyle}>
                                <Link href='/contact'><li><a style={linkStyle}>Contact us</a></li></Link>
                                <Link href='https://twitter.com/eWalletBooster'><li><a href='https://twitter.com/eWalletBooster' style={linkStyle}>Twitter</a></li></Link>    
                                <Link href='/'><li><a style={linkStyle}>Help</a></li></Link>
                                <Link href='/'><li><a style={linkStyle}>Blog</a></li></Link> 
                            </ul>    
                        </div>
                        <div className='column is-4 has-text-centered' style={linkStyle}>
                            <h6 style={titleStyle}>Useful links</h6>
                            <ul style={contentStyle}>
                                <Link href='/'><li><a style={linkStyle}>Home</a></li></Link>
                                <Link href='/register'><li><a style={linkStyle}>Register</a></li></Link>
                                <Link href='/terms-conditions'><li><a style={linkStyle}>T&amp;C's</a></li></Link>
                                <Link href='/privacy-policy'><li><a style={linkStyle}>Privacy policy</a></li></Link>
                                <Link href='/sitemap'><li><a style={linkStyle}>Sitemap</a></li></Link>  
                            </ul>     
                        </div>  
                    </div>    
                </div>                      
            </div>
        </div>   
        <div className='container has-text-centered' style={{marginTop: '2.5rem'}}>
            <p style={linkStyle}>Copyright {moment().format('YYYY')} | <a href="/"><img src="/static/images/logo_dark.svg" alt="eWalletBooster logo" style={{maxWidth: '5rem', marginBottom: '-0.5rem'}} /></a> | All Rights Reserved.</p>
        </div>
    </footer>
)  



export default Footer;