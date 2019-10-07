import Link from 'next/link';

const TopMenu = () => {
    return (
        <div>           
            <div style={{height: '1.5rem', backgroundColor: '#F0F3F3', padding: '1.25rem'}}>
                <div className='container' style={{height: '100%'}}>
                    <div className='level' style={{height: '100%'}}>
                        <div className='level-left'>
                            <div className='level-item'>
                                <p style={{fontSize: '0.85rem', color: '#003249'}}>
                                    <span style={{marginRight: '0.5rem'}}>
                                        <i className='fa fa-envelope' style={{color: '#339935'}}></i>
                                    </span>
                                    <a href="mailto: info@greenscapes-commercial.co.uk"><strong>info@greenscapes-commercial.co.uk</strong></a>
                                </p>
                            </div>
                            <div className='level-item'>
                                <p style={{fontSize: '0.85rem', color: '#003249'}}>
                                    <span style={{marginRight: '0.5rem'}}>
                                        <i className='fa fa-map-marker' style={{color: '#339935'}}></i>
                                    </span>
                                    <Link href='/serviced-areas'><a><strong>Seal Rd, Stockport SK7 2LL</strong></a></Link> 
                                </p>    
                            </div> 
                        </div>
                        <div className='level-right'>
                            <div className='level-item'>
                                <p style={{fontSize: '0.85rem', color: '#003249'}}>
                                    <span style={{marginRight: '0.5rem'}}>
                                        <i className='fa fa-phone' style={{color: '#339935'}}></i>
                                    </span>
                                    <Link href='tel:07772 656034'><a><strong>07772 656034</strong></a></Link> 
                                </p>                              
                            </div> 
                            <div className='level-item'>
                                <p style={{fontSize: '0.85rem', color: '#003249'}}>
                                    <span style={{marginRight: '0.5rem'}}>
                                        <i className='fa fa-phone-square' style={{color: '#339935'}}></i>
                                    </span>
                                    <Link href='tel:01613763050'><a><strong>0161 376 3050</strong></a></Link> 
                                </p>  
                            </div>                                           
                        </div>
                    </div>
                </div>
            </div>
            {/* <div style={{height: '1.5rem', backgroundColor: '#F0F3F3', padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <a href="" style={{fontSize: '0.75rem'}}>
                    <span style={{marginRight: '0.3rem'}}>
                        <i className='fa fa-phone-square' style={{color: '#339935'}}>
                        </i>
                    </span>
                    07772 656034
                </a>
                <a href="mailto: info@greenscapes-commercial.co.uk" style={{fontSize: '0.75rem'}}>
                    <span style={{marginRight: '0.3rem'}}>
                        <i className='fa fa-envelope' style={{color: '#339935'}}>
                        </i>
                    </span>
                    info@greenscapes-commercial.co.uk
                </a>
                <a href="https://www.facebook.com/greenscapesgardeners/" style={{fontSize: '0.75rem'}}>
                    <span style={{marginRight: '0.3rem'}}>
                        <i className='fa fa-facebook' style={{color: '#3b5998'}}>
                        </i>
                    </span>
                    Follow
                </a>
            </div> */}            
        </div>
    )
}

export default TopMenu;