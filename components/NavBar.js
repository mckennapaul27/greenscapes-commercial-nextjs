import React, {Component} from 'react';
import Link from 'next/link';
import {withRouter} from 'next/router';
import {services} from '../data/services';

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
           <div className='navbar' style={{height: '95px', backgroundColor: 'white'}}>
                <div className='container' >
                    <div className='navbar-brand' 
                        role="navigation" 
                        aria-label="main navigation"
                        style={{display: 'flex', alignItems: 'center', padding: '0.5rem'}}
                        >                    
                        <a href="/" style={{maxWidth: '130px'}}>
                            <img src="/static/images/logo.png" alt="greenscapes logo" /></a>                    
                    </div>
                    <div className='navbar-menu'> 
                        <div className='navbar-end'>
                            <div className='navbar-item'>                                
                                <Link href={`/`}>
                                    <a className='navbar-item' style={linkStyle}>
                                        <span>
                                            <i style={{marginRight: '0.5rem', color: '#339935'}} className='fa fa-home'></i>
                                        </span>Home
                                    </a>
                                </Link>                                
                            </div> 
                            <div className='navbar-item'>                                
                                <Link href={`/about-us`}>
                                    <a className='navbar-item' style={linkStyle}>
                                        <span>
                                            <i style={{marginRight: '0.5rem', color: '#339935'}} className='fa fa-user'></i>
                                        </span>About
                                    </a>
                                </Link>                                
                            </div>    
                            <div className='navbar-item has-dropdown is-hoverable'>                                
                                <Link href={`/services-overview`}>
                                    <a className='navbar-link' style={linkStyle}>
                                        <span>
                                            <i style={{marginRight: '0.5rem', color: '#339935'}} className='fa fa-cogs'></i>
                                        </span>Services
                                    </a>
                                </Link>
                                <DropDownItems/>
                            </div>  
                            <div className='navbar-item'>                                
                                <Link href={`/reviews`}>
                                    <a className='navbar-item' style={linkStyle}>
                                        <span>
                                            <i style={{marginRight: '0.5rem', color: '#339935'}} className='fa fa-comments'></i>
                                        </span>Reviews
                                    </a>
                                </Link>                                
                            </div>    
                            <div className='navbar-item'>                                
                                <Link href={`/serviced-areas`}>
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

const PostLink = (props) => { 
    return (
        <Link as={`/services/${props.id}`} href={`/service?id=${props.id}`}>
            <a className="navbar-item">{props.title}</a>
        </Link>
    )    
}


const DropDownItems = () => {
    
    return (
        <div className="navbar-dropdown">
            {
                services.map((service, index) => {
                    return <PostLink key={index} id={service.id} title={service.name} />
                })
            }            
            <hr className="navbar-divider" />
            <a className="navbar-item">
            Sevices overview
            </a>            
        </div>
    ) 
}







