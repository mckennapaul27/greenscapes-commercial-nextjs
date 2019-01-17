import {isMobile} from 'react-device-detect';

const TopMenu = () => {
    return (
        <div>  
            {
            !isMobile ?                  
            <div style={{height: '1.5rem', backgroundColor: '#F0F3F3', padding: '1.25rem'}}>
                <div className='container' style={{height: '100%'}}>
                    <div className='level' style={{height: '100%'}}>
                        <div className='level-left'>
                            <div className='level-item'>
                                <p style={{fontSize: '0.85rem', color: '#003249'}}>
                                    <span style={{marginRight: '0.5rem'}}>
                                        <i className='fa fa-envelope' style={{color: '#339935'}}></i>
                                    </span>
                                    <a href="mailto: info@greenscapes-commercial.com">info@greenscapes-commercial.com</a>
                                </p>
                            </div>
                            <div className='level-item'>
                                <p style={{fontSize: '0.85rem', color: '#003249'}}>
                                    <span style={{marginRight: '0.5rem'}}>
                                        <i className='fa fa-map-marker' style={{color: '#339935'}}></i>
                                    </span>
                                    <a>139 Seal Rd, Bramhall, Stockport SK7 2LL</a>                       
                                </p>    
                            </div> 
                        </div>
                        <div className='level-right'>
                            <div className='level-item'>
                                <p style={{fontSize: '0.85rem', color: '#003249'}}>
                                    <span style={{marginRight: '0.5rem'}}>
                                        <i className='fa fa-phone' style={{color: '#339935'}}></i>
                                    </span>
                                    <a>07772 656034</a>                       
                                </p>                              
                            </div> 
                            <div className='level-item'>
                                <p style={{fontSize: '0.85rem', color: '#003249'}}>
                                    <span style={{marginRight: '0.5rem'}}>
                                        <i className='fa fa-phone-square' style={{color: '#339935'}}></i>
                                    </span>
                                    <a>0161 217 2125</a>                       
                                </p>  
                            </div> 
                            <div className='level-item'>
                                <p style={{fontSize: '0.85rem', color: '#003249'}}>
                                    <span style={{marginRight: '0.5rem'}}>
                                        <i className='fa fa-facebook' style={{color: '#3b5998'}}></i>
                                    </span>
                                    <a href='https://www.facebook.com/greenscapesgardeners/'>Follow us on Facebook</a>
                                </p>
                            </div>                    
                        </div>
                    </div>
                </div>
            </div>
            :
            <div style={{height: '1.5rem', backgroundColor: '#F0F3F3', padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <a href="" style={{fontSize: '0.75rem'}}>
                    <span style={{marginRight: '0.3rem'}}>
                        <i className='fa fa-phone-square' style={{color: '#339935'}}>
                        </i>
                    </span>
                    07772 656034
                </a>
                <a href="mailto: info@greenscapes-commercial.com" style={{fontSize: '0.75rem'}}>
                    <span style={{marginRight: '0.3rem'}}>
                        <i className='fa fa-envelope' style={{color: '#339935'}}>
                        </i>
                    </span>
                    info@greenscapes-commercial.com
                </a>
                <a href="https://www.facebook.com/greenscapesgardeners/" style={{fontSize: '0.75rem'}}>
                    <span style={{marginRight: '0.3rem'}}>
                        <i className='fa fa-facebook' style={{color: '#3b5998'}}>
                        </i>
                    </span>
                    Follow
                </a>
            </div>
            }
        </div>
    )
}

export default TopMenu;