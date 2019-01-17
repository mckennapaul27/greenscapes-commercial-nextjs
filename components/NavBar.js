import React, {Component} from 'react';
import Link from 'next/link';
import {withRouter} from 'next/router';

export default withRouter(class NavBar extends Component {

    state = {
        active: true,
    }    
    
    toggleClass = () => {        
        this.setState({
            active: !this.state.active
        })
    }    
    
    
    render () { 

        const linkStyle = {
            color: 'black'            
        }

        return (
           <div className='navbar' style={{height: '85px'}}>
                <div className='container' >
                    <div className='navbar-brand' 
                        role="navigation" 
                        aria-label="main navigation"
                        style={{display: 'flex', alignItems: 'bottom', padding: '0.5rem'}}
                        >                    
                        <a href="/" style={{maxWidth: '160px'}}>
                            <img src="/static/images/logo.png" alt="eWalletBooster" />
                        </a>                    
                    </div>
                    <div className='navbar-menu'> 
                        <div className='navbar-end'>
                            <div className='navbar-item'>                                
                                <Link href={`/skrill/cashback`}>
                                    <a className='navbar-item' style={linkStyle}>
                                        <span>
                                            <i style={{marginRight: '0.5rem', color: '#339935'}} className='fa fa-home'></i>
                                        </span>Home
                                    </a>
                                </Link>                                
                            </div> 
                            <div className='navbar-item'>                                
                                <Link href={`/skrill/cashback`}>
                                    <a className='navbar-item' style={linkStyle}>
                                        <span>
                                            <i style={{marginRight: '0.5rem', color: '#339935'}} className='fa fa-user'></i>
                                        </span>About
                                    </a>
                                </Link>                                
                            </div>    
                            <div className='navbar-item has-dropdown is-hoverable'>                                
                                <Link href={`/neteller/cashback`}>
                                    <a className='navbar-link' style={linkStyle}>
                                        <span>
                                            <i style={{marginRight: '0.5rem', color: '#339935'}} className='fa fa-cogs'></i>
                                        </span>Services
                                    </a>
                                </Link>
                                <DropDownItems brand={'Neteller'} link={'neteller'} color={'#83ba3b'}/>
                            </div>  
                            <div className='navbar-item'>                                
                                <Link href={`/skrill/cashback`}>
                                    <a className='navbar-item' style={linkStyle}>
                                        <span>
                                            <i style={{marginRight: '0.5rem', color: '#339935'}} className='fa fa-comments'></i>
                                        </span>Reviews
                                    </a>
                                </Link>                                
                            </div>    
                            <div className='navbar-item'>                                
                                <Link href={`/skrill/cashback`}>
                                    <a className='navbar-item' style={linkStyle}>
                                        <span>
                                            <i style={{marginRight: '0.5rem', color: '#339935'}} className='fa fa-map'></i>
                                        </span>Areas
                                    </a>
                                </Link>                                
                            </div>
                            <div className='navbar-item'> 
                            <Link href='/contact'><button className='button is-primary'><a style={{color: 'white'}}><span><i style={{marginRight: '0.5rem'}} className='fa fa-quote-left'></i></span>Free Quotation</a></button></Link>
                            </div>    
                        </div>
                    </div>
                </div>
           </div>
        ) 
    }
})


const DropDownItems = () => {   

    const services = ['Grounds Management', 'Business & Retail Maintenance', 'School Maintenance', 'Hedge & Shrub Maintenance', 'Landscaping & Planting', 'Interior Plant Displays', 'Lawn Care', 'Outdoor Cleaning', 'Spraying & Vegetation Control', 'Tree Surgery', 'Graffiti Removal', 'Jet & Pressure Washing'];

    return (
        <div className="navbar-dropdown">
            {
                services.map((service, index) => {
                    const url = `/${service.split(' ').join('-').toLowerCase().replace('-&', '')}`;
                    return <Link key={index} href={url}><a className="navbar-item">{service}</a></Link>
                })
            }            
            <hr className="navbar-divider" />
            <a className="navbar-item">
            Sevices overview
            </a>
        </div>
    ) 
}



