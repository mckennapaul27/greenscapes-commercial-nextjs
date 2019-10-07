import React, {Component} from 'react';
import Link from 'next/link';
import {services} from '../data/services';



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
            textAlign: 'left',
            padding: '0.65rem 0'
        }  
        
        const tabsLinkStyle = {
            backgroundColor: '#1C541D', 
            color: 'white'            
        }  

        const PostLink = (props) => { 
            return (
                <Link as={`/services/${props.id}`} href={`/service?id=${props.id}`}>
                    <a style={linkStyle} onClick={this.toggleClass}>{props.title}</a>
                </Link>
            )    
        }
        

        return (
            <div>
            <div 
                className='navbar'   
                style={{backgroundColor: 'white'}}                            
                >
                <div 
                    className='navbar-brand' 
                    role="navigation" 
                    aria-label="main navigation"                    
                    >                    
                     <a href="/" style={{maxWidth: '125px', height: '100%', padding: '0.5rem 0 0.5rem 0.5rem'}}>
                        <img src="/static/images/logo.png" alt="greenscapes logo" />
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
                                <Link href='/about-us'>
                                <a style={linkStyle} onClick={this.toggleClass}>
                                    <span>
                                        <i style={{marginRight: '0.3rem'}} className='fa fa-user'></i>
                                    </span>About us
                                </a>
                                </Link>                                
                            </li> 
                            <li>
                                <Link href='/serviced-areas'>
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
                                    return <PostLink key={index} id={service.id} title={service.name} />
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
                        </ul>  
                        </aside>
                    </div>
                </div>
            </div>
            <div class="tabs is-info is-hidden-tablet">
                <ul>
                    <li>
                        <a href="mailto: info@greenscapes-commercial.co.uk" style={tabsLinkStyle}>
                            <span>
                                <i className='fa fa-envelope' style={{marginRight: '0.25rem'}}>
                                </i>
                            </span>
                            info@greenscapes-commercial.co.uk
                        </a>       
                    </li>      
                    <li>
                        <a href='tel:07772656034' style={tabsLinkStyle}>
                            <span>
                                <i className='fa fa-phone' style={{marginRight: '0.25rem'}}>
                                </i>
                            </span>
                            07772 656034
                        </a>
                    </li> 
                
                    <li>
                        <a href='tel:01613763050' style={tabsLinkStyle}>
                            <span>
                                <i className='fa fa-phone' style={{marginRight: '0.25rem'}}>
                                </i>
                            </span>
                            0161 376 3050
                        </a> 
                    </li>       
                </ul>
            </div>
            </div>
        )
    }
}





