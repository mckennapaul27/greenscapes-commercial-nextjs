import React, {Component} from 'react';
import Link from 'next/link';

export default class NavBarMobile extends Component {

    state = {
        active: true,       
        menu: false,
        icon: true,
    }

    
    toggleClass = () => {
        this.setState({
            active: !this.state.active
        })
    }       

    toggleMenu = () => {
        this.setState({
            menu: !this.state.menu,
            icon: !this.state.icon
        })
    }
   
    render () {


        const linkStyle = {
            backgroundColor: '#1C541D', 
            color: 'white',
            textAlign: 'left'
        }       

        const services = ['Grounds mManagement', 'Business & Retail Maintenance', 'School Maintenance', 'Hedge & Shrub Maintenance', 'Landscaping & Planting', 'Interior Plant Displays', 'Lawn Care', 'Outdoor Cleaning', 'Spraying & Vegetation Control', 'Tree Surgery', 'Graffiti Removal', 'Jet & Pressure Washing'];        

        return (
            <div 
                className='navbar'               
                >
                <div 
                    className='navbar-brand' 
                    role="navigation" 
                    aria-label="main navigation"                    
                    >                    
                     <a href="/" style={{maxWidth: '150px', height: '100%', padding: '1.5rem 0 0.5rem 0.5rem'}}>
                            <img src='/static/images/logos.png' alt="greenscapes logo"/>
                        </a>    
                    <div 
                        role="button" 
                        className={this.state.active ? 'navbar-burger' : 'navbar-burger is-active'} 
                        onClick={this.toggleClass} 
                        aria-label="menu" 
                        aria-expanded="false" 
                        data-target='navMobile'
                        style={{backgroundColor: 'white', alignSelf: 'center'}}
                        >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>                        
                    </div>          
                </div> 
                <div 
                    className={this.state.active ? 'navbar-menu': 'navbar-menu is-active'} style={{padding: 0}}>
                    <div className='container' style={{padding: '1rem', backgroundColor: '#1C541D'}}>
                        <div style={{padding: '1rem 0'}}>
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
                                <button className={`button is-primary is-outlined`}>
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
                        <aside className="menu">
                        <p className="menu-label" style={{color: 'white', textAlign: 'left'}}>
                            General
                        </p>
                        <ul className="menu-list"> 
                            <li>
                                <Link href='/'>
                                <a style={linkStyle} onClick={this.toggleClass}>
                                    <span>
                                        <i style={{marginRight: '0.3rem'}} className='fa fa-home'></i>
                                    </span>Home
                                </a>
                                </Link>                                
                            </li>  
                            <li>
                                <Link href='/'>
                                <a style={linkStyle} onClick={this.toggleClass}>
                                    <span>
                                        <i style={{marginRight: '0.3rem'}} className='fa fa-user'></i>
                                    </span>About us
                                </a>
                                </Link>                                
                            </li> 
                            <li>
                                <Link href='/'>
                                <a style={linkStyle} onClick={this.toggleClass}>
                                    <span>
                                        <i style={{marginRight: '0.3rem'}} className='fa fa-map'></i>
                                    </span>Areas
                                </a>
                                </Link>                                
                            </li>   
                            <li>
                                <a style={linkStyle} onClick={this.toggleMenu}>
                                    <span><i className='fa fa-exchange' style={{marginRight: '0.3rem'}}></i></span>Services<span><i style={{marginLeft: '0.3rem'}} className={!this.state.icon ? 'fa fa-chevron-circle-up' : 'fa fa-chevron-circle-down'}></i></span>
                                </a>
                            </li>  
                            <li>
                            <div style={{display: this.state.menu ? 'block' : 'none'}}>
                                {
                                    services.map((service, index) => {
                                        const url = `/${service.split(' ').join('-').toLowerCase().replace('-&', '')}`;
                                        return  <Link key={index} href={url}><a style={linkStyle}>{service}</a></Link>
                                    })
                                } 
                            </div>
                            </li> 
                        </ul> 

                        <p className="menu-label" style={{color: 'white', textAlign: 'left'}}>
                            Get in touch
                        </p>
                        <ul className="menu-list">                            
                            <li>
                                <Link href='/contact'>
                                <a style={linkStyle} onClick={this.toggleClass}>
                                    <span>
                                        <i style={{marginRight: '0.3rem'}} className='fa fa-envelope'></i>
                                    </span>Contact
                                </a>
                                </Link>                                
                            </li>  
                            <li>
                                <Link href='/contact'>
                                <a style={linkStyle} onClick={this.toggleClass}>
                                    <span>
                                        <i style={{marginRight: '0.3rem'}} className='fa fa-comments'></i>
                                    </span>Reviews
                                </a>
                                </Link>                                
                            </li>
                            <li>
                                <Link href='/contact'>
                                <a style={linkStyle} onClick={this.toggleClass}>
                                    <span>
                                        <i style={{marginRight: '0.3rem'}} className='fa fa-facebook'></i>
                                    </span>Facebook
                                </a>
                                </Link>                                
                            </li>
                        </ul>  
                        </aside>
                    </div>
                </div>
            </div>
        )
    }
}





