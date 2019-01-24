import ServiceFooter from './ServiceFooter';

const ServiceSelected = (service) => {
    if (service === 'grounds-management') {
        return (
            <div>            
                <ServiceLayout title={'Grounds Management'} img={'/static/images/industry_grass.jpeg'} imgAlt={'Grounds Management'} >
                    <p>Welcome to Greenscapes Gardening Bramhall. We provide domestic and commercial gardening maintenance and design services in South Manchester and Cheshire.</p>                            
                    <p>We also offer commercial ground maintenance services for Schools, Housing trusts, Companies and all types of commercial buildings.</p>
                    <p>Vivamus eget malesuada ligula. Vivamus id leo convallis nisi dignissim cursus. Pellentesque quis urna fermentum, iaculis magna id, feugiat libero. Phasellus nisi velit, mattis sit amet tellus vel, rutrum congue dolor. In est ante, vehicula id nulla sed, tincidunt sagittis velit. Duis nec gravida nibh. In suscipit odio velit, vitae blandit ipsum ullamcorper eget.</p>
                    <p>We cover South Manchester, Bramhall, Cheadle, Cheadle Hulme, Wilmslow, Alderley Edge, Bollington, Prestbury, Handforth, Mobberly, Woodford and Poynton</p>
                    <p>In non augue in risus faucibus pulvinar. Aliquam ultrices interdum nulla, sit amet pharetra turpis. Ut posuere, est vitae rutrum congue, libero sapien semper sem, vel bibendum quam metus id tortor. Aenean tristique nisi et mi porta suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer finibus sed augue pulvinar viverra. In hac habitasse platea dictumst.</p>
                </ServiceLayout>  
            </div>
        )
    }
    else if (service === 'business-retail-maintenance') {
        return (
            <div>
                <ServiceLayout title={'Business Retail Management'} img={'/static/images/industry_grass.jpeg'} imgAlt={'Business Retail Management'} >
                    <p>Welcome to Greenscapes Gardening Bramhall. We provide domestic and commercial gardening maintenance and design services in South Manchester and Cheshire.</p>                            
                    <p>We also offer commercial ground maintenance services for Schools, Housing trusts, Companies and all types of commercial buildings.</p>
                    <p>Vivamus eget malesuada ligula. Vivamus id leo convallis nisi dignissim cursus. Pellentesque quis urna fermentum, iaculis magna id, feugiat libero. Phasellus nisi velit, mattis sit amet tellus vel, rutrum congue dolor. In est ante, vehicula id nulla sed, tincidunt sagittis velit. Duis nec gravida nibh. In suscipit odio velit, vitae blandit ipsum ullamcorper eget.</p>
                    <p>We cover South Manchester, Bramhall, Cheadle, Cheadle Hulme, Wilmslow, Alderley Edge, Bollington, Prestbury, Handforth, Mobberly, Woodford and Poynton</p>
                    <p>In non augue in risus faucibus pulvinar. Aliquam ultrices interdum nulla, sit amet pharetra turpis. Ut posuere, est vitae rutrum congue, libero sapien semper sem, vel bibendum quam metus id tortor. Aenean tristique nisi et mi porta suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer finibus sed augue pulvinar viverra. In hac habitasse platea dictumst.</p>
                </ServiceLayout>  
            </div>                    
        )
    }
    else if (service === 'school-maintenance') {
        return (
            <div>
                <ServiceLayout title={'School Maintenance'} img={'/static/images/industry_grass.jpeg'} imgAlt={'School Maintenance'} >
                    <p>Welcome to Greenscapes Gardening Bramhall. We provide domestic and commercial gardening maintenance and design services in South Manchester and Cheshire.</p>                            
                    <p>We also offer commercial ground maintenance services for Schools, Housing trusts, Companies and all types of commercial buildings.</p>
                    <p>Vivamus eget malesuada ligula. Vivamus id leo convallis nisi dignissim cursus. Pellentesque quis urna fermentum, iaculis magna id, feugiat libero. Phasellus nisi velit, mattis sit amet tellus vel, rutrum congue dolor. In est ante, vehicula id nulla sed, tincidunt sagittis velit. Duis nec gravida nibh. In suscipit odio velit, vitae blandit ipsum ullamcorper eget.</p>
                    <p>We cover South Manchester, Bramhall, Cheadle, Cheadle Hulme, Wilmslow, Alderley Edge, Bollington, Prestbury, Handforth, Mobberly, Woodford and Poynton</p>
                    <p>In non augue in risus faucibus pulvinar. Aliquam ultrices interdum nulla, sit amet pharetra turpis. Ut posuere, est vitae rutrum congue, libero sapien semper sem, vel bibendum quam metus id tortor. Aenean tristique nisi et mi porta suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer finibus sed augue pulvinar viverra. In hac habitasse platea dictumst.</p>
                </ServiceLayout>  
            </div>                    
        )
    }
    else if (service === 'hedge-shrub maintenance') {
        return (
            <div>
                <ServiceLayout title={'Hedge & Shrub Maintenance'} img={'/static/images/industry_grass.jpeg'} imgAlt={'Hedge & Shrub Maintenance'} >
                    <p>Welcome to Greenscapes Gardening Bramhall. We provide domestic and commercial gardening maintenance and design services in South Manchester and Cheshire.</p>                            
                    <p>We also offer commercial ground maintenance services for Schools, Housing trusts, Companies and all types of commercial buildings.</p>
                    <p>Vivamus eget malesuada ligula. Vivamus id leo convallis nisi dignissim cursus. Pellentesque quis urna fermentum, iaculis magna id, feugiat libero. Phasellus nisi velit, mattis sit amet tellus vel, rutrum congue dolor. In est ante, vehicula id nulla sed, tincidunt sagittis velit. Duis nec gravida nibh. In suscipit odio velit, vitae blandit ipsum ullamcorper eget.</p>
                    <p>We cover South Manchester, Bramhall, Cheadle, Cheadle Hulme, Wilmslow, Alderley Edge, Bollington, Prestbury, Handforth, Mobberly, Woodford and Poynton</p>
                    <p>In non augue in risus faucibus pulvinar. Aliquam ultrices interdum nulla, sit amet pharetra turpis. Ut posuere, est vitae rutrum congue, libero sapien semper sem, vel bibendum quam metus id tortor. Aenean tristique nisi et mi porta suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer finibus sed augue pulvinar viverra. In hac habitasse platea dictumst.</p>
                </ServiceLayout>  
            </div>                    
        )
    }
    else if (service === 'landscaping-planting') {
        return (
            <div>
                <ServiceLayout title={'Landscaping & Planting'} img={'/static/images/industry_grass.jpeg'} imgAlt={'Landscaping & Planting'} >
                    <p>Welcome to Greenscapes Gardening Bramhall. We provide domestic and commercial gardening maintenance and design services in South Manchester and Cheshire.</p>                            
                    <p>We also offer commercial ground maintenance services for Schools, Housing trusts, Companies and all types of commercial buildings.</p>
                    <p>Vivamus eget malesuada ligula. Vivamus id leo convallis nisi dignissim cursus. Pellentesque quis urna fermentum, iaculis magna id, feugiat libero. Phasellus nisi velit, mattis sit amet tellus vel, rutrum congue dolor. In est ante, vehicula id nulla sed, tincidunt sagittis velit. Duis nec gravida nibh. In suscipit odio velit, vitae blandit ipsum ullamcorper eget.</p>
                    <p>We cover South Manchester, Bramhall, Cheadle, Cheadle Hulme, Wilmslow, Alderley Edge, Bollington, Prestbury, Handforth, Mobberly, Woodford and Poynton</p>
                    <p>In non augue in risus faucibus pulvinar. Aliquam ultrices interdum nulla, sit amet pharetra turpis. Ut posuere, est vitae rutrum congue, libero sapien semper sem, vel bibendum quam metus id tortor. Aenean tristique nisi et mi porta suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer finibus sed augue pulvinar viverra. In hac habitasse platea dictumst.</p>
                </ServiceLayout>  
            </div>                    
        )
    }
    else if (service === 'interior-plant displays') {
        return (
            <div>
                <ServiceLayout title={'Interior Plant Displays'} img={'/static/images/industry_grass.jpeg'} imgAlt={'Interior Plant Displays'} >
                    <p>Welcome to Greenscapes Gardening Bramhall. We provide domestic and commercial gardening maintenance and design services in South Manchester and Cheshire.</p>                            
                    <p>We also offer commercial ground maintenance services for Schools, Housing trusts, Companies and all types of commercial buildings.</p>
                    <p>Vivamus eget malesuada ligula. Vivamus id leo convallis nisi dignissim cursus. Pellentesque quis urna fermentum, iaculis magna id, feugiat libero. Phasellus nisi velit, mattis sit amet tellus vel, rutrum congue dolor. In est ante, vehicula id nulla sed, tincidunt sagittis velit. Duis nec gravida nibh. In suscipit odio velit, vitae blandit ipsum ullamcorper eget.</p>
                    <p>We cover South Manchester, Bramhall, Cheadle, Cheadle Hulme, Wilmslow, Alderley Edge, Bollington, Prestbury, Handforth, Mobberly, Woodford and Poynton</p>
                    <p>In non augue in risus faucibus pulvinar. Aliquam ultrices interdum nulla, sit amet pharetra turpis. Ut posuere, est vitae rutrum congue, libero sapien semper sem, vel bibendum quam metus id tortor. Aenean tristique nisi et mi porta suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer finibus sed augue pulvinar viverra. In hac habitasse platea dictumst.</p>
                </ServiceLayout>  
            </div>                    
        )
    }
    else if (service === 'lawn-care') {
        return (
            <div>
                <ServiceLayout title={'Lawn Care'} img={'/static/images/industry_grass.jpeg'} imgAlt={'Lawn Care'} >
                    <p>Welcome to Greenscapes Gardening Bramhall. We provide domestic and commercial gardening maintenance and design services in South Manchester and Cheshire.</p>                            
                    <p>We also offer commercial ground maintenance services for Schools, Housing trusts, Companies and all types of commercial buildings.</p>
                    <p>Vivamus eget malesuada ligula. Vivamus id leo convallis nisi dignissim cursus. Pellentesque quis urna fermentum, iaculis magna id, feugiat libero. Phasellus nisi velit, mattis sit amet tellus vel, rutrum congue dolor. In est ante, vehicula id nulla sed, tincidunt sagittis velit. Duis nec gravida nibh. In suscipit odio velit, vitae blandit ipsum ullamcorper eget.</p>
                    <p>We cover South Manchester, Bramhall, Cheadle, Cheadle Hulme, Wilmslow, Alderley Edge, Bollington, Prestbury, Handforth, Mobberly, Woodford and Poynton</p>
                    <p>In non augue in risus faucibus pulvinar. Aliquam ultrices interdum nulla, sit amet pharetra turpis. Ut posuere, est vitae rutrum congue, libero sapien semper sem, vel bibendum quam metus id tortor. Aenean tristique nisi et mi porta suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer finibus sed augue pulvinar viverra. In hac habitasse platea dictumst.</p>
                </ServiceLayout>  
            </div>                    
        )
    }
    else if (service === 'outdoor-cleaning') {
        return (
            <div>
                <ServiceLayout title={'Outdoor Cleaning'} img={'/static/images/industry_grass.jpeg'} imgAlt={'Outdoor Cleaning'} >
                    <p>Welcome to Greenscapes Gardening Bramhall. We provide domestic and commercial gardening maintenance and design services in South Manchester and Cheshire.</p>                            
                    <p>We also offer commercial ground maintenance services for Schools, Housing trusts, Companies and all types of commercial buildings.</p>
                    <p>Vivamus eget malesuada ligula. Vivamus id leo convallis nisi dignissim cursus. Pellentesque quis urna fermentum, iaculis magna id, feugiat libero. Phasellus nisi velit, mattis sit amet tellus vel, rutrum congue dolor. In est ante, vehicula id nulla sed, tincidunt sagittis velit. Duis nec gravida nibh. In suscipit odio velit, vitae blandit ipsum ullamcorper eget.</p>
                    <p>We cover South Manchester, Bramhall, Cheadle, Cheadle Hulme, Wilmslow, Alderley Edge, Bollington, Prestbury, Handforth, Mobberly, Woodford and Poynton</p>
                    <p>In non augue in risus faucibus pulvinar. Aliquam ultrices interdum nulla, sit amet pharetra turpis. Ut posuere, est vitae rutrum congue, libero sapien semper sem, vel bibendum quam metus id tortor. Aenean tristique nisi et mi porta suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer finibus sed augue pulvinar viverra. In hac habitasse platea dictumst.</p>
                </ServiceLayout>  
            </div>                    
        )
    }
    else if (service === 'spraying-vegetation control') {
        return (
            <div>
                <ServiceLayout title={'Spraying & Vegetation Control'} img={'/static/images/industry_grass.jpeg'} imgAlt={'Spraying & Vegetation Control'} >
                    <p>Welcome to Greenscapes Gardening Bramhall. We provide domestic and commercial gardening maintenance and design services in South Manchester and Cheshire.</p>                            
                    <p>We also offer commercial ground maintenance services for Schools, Housing trusts, Companies and all types of commercial buildings.</p>
                    <p>Vivamus eget malesuada ligula. Vivamus id leo convallis nisi dignissim cursus. Pellentesque quis urna fermentum, iaculis magna id, feugiat libero. Phasellus nisi velit, mattis sit amet tellus vel, rutrum congue dolor. In est ante, vehicula id nulla sed, tincidunt sagittis velit. Duis nec gravida nibh. In suscipit odio velit, vitae blandit ipsum ullamcorper eget.</p>
                    <p>We cover South Manchester, Bramhall, Cheadle, Cheadle Hulme, Wilmslow, Alderley Edge, Bollington, Prestbury, Handforth, Mobberly, Woodford and Poynton</p>
                    <p>In non augue in risus faucibus pulvinar. Aliquam ultrices interdum nulla, sit amet pharetra turpis. Ut posuere, est vitae rutrum congue, libero sapien semper sem, vel bibendum quam metus id tortor. Aenean tristique nisi et mi porta suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer finibus sed augue pulvinar viverra. In hac habitasse platea dictumst.</p>
                </ServiceLayout>  
            </div>                    
        )
    }
    else if (service === 'tree-surgery') {
        return (
            <div>
                <ServiceLayout title={'Tree Surgery'} img={'/static/images/industry_grass.jpeg'} imgAlt={'Tree Surgery'} >
                    <p>Welcome to Greenscapes Gardening Bramhall. We provide domestic and commercial gardening maintenance and design services in South Manchester and Cheshire.</p>                            
                    <p>We also offer commercial ground maintenance services for Schools, Housing trusts, Companies and all types of commercial buildings.</p>
                    <p>Vivamus eget malesuada ligula. Vivamus id leo convallis nisi dignissim cursus. Pellentesque quis urna fermentum, iaculis magna id, feugiat libero. Phasellus nisi velit, mattis sit amet tellus vel, rutrum congue dolor. In est ante, vehicula id nulla sed, tincidunt sagittis velit. Duis nec gravida nibh. In suscipit odio velit, vitae blandit ipsum ullamcorper eget.</p>
                    <p>We cover South Manchester, Bramhall, Cheadle, Cheadle Hulme, Wilmslow, Alderley Edge, Bollington, Prestbury, Handforth, Mobberly, Woodford and Poynton</p>
                    <p>In non augue in risus faucibus pulvinar. Aliquam ultrices interdum nulla, sit amet pharetra turpis. Ut posuere, est vitae rutrum congue, libero sapien semper sem, vel bibendum quam metus id tortor. Aenean tristique nisi et mi porta suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer finibus sed augue pulvinar viverra. In hac habitasse platea dictumst.</p>
                </ServiceLayout>  
            </div>                    
        )
    }
    else if (service === 'jet-pressure washing') {
        return (
            <div>
                <ServiceLayout title={'Jet & Pressure Washing'} img={'/static/images/industry_grass.jpeg'} imgAlt={'Jet & Pressure Washing'} >
                    <p>Welcome to Greenscapes Gardening Bramhall. We provide domestic and commercial gardening maintenance and design services in South Manchester and Cheshire.</p>                            
                    <p>We also offer commercial ground maintenance services for Schools, Housing trusts, Companies and all types of commercial buildings.</p>
                    <p>Vivamus eget malesuada ligula. Vivamus id leo convallis nisi dignissim cursus. Pellentesque quis urna fermentum, iaculis magna id, feugiat libero. Phasellus nisi velit, mattis sit amet tellus vel, rutrum congue dolor. In est ante, vehicula id nulla sed, tincidunt sagittis velit. Duis nec gravida nibh. In suscipit odio velit, vitae blandit ipsum ullamcorper eget.</p>
                    <p>We cover South Manchester, Bramhall, Cheadle, Cheadle Hulme, Wilmslow, Alderley Edge, Bollington, Prestbury, Handforth, Mobberly, Woodford and Poynton</p>
                    <p>In non augue in risus faucibus pulvinar. Aliquam ultrices interdum nulla, sit amet pharetra turpis. Ut posuere, est vitae rutrum congue, libero sapien semper sem, vel bibendum quam metus id tortor. Aenean tristique nisi et mi porta suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer finibus sed augue pulvinar viverra. In hac habitasse platea dictumst.</p>
                </ServiceLayout>  
            </div>                    
        )
    }
    else if (service === 'graffiti-removal') {
        return (
            <div>
                <ServiceLayout title={'Graffiti Removal'} img={'/static/images/industry_grass.jpeg'} imgAlt={'Graffiti Removal'} >
                    <p>Welcome to Greenscapes Gardening Bramhall. We provide domestic and commercial gardening maintenance and design services in South Manchester and Cheshire.</p>                            
                    <p>We also offer commercial ground maintenance services for Schools, Housing trusts, Companies and all types of commercial buildings.</p>
                    <p>Vivamus eget malesuada ligula. Vivamus id leo convallis nisi dignissim cursus. Pellentesque quis urna fermentum, iaculis magna id, feugiat libero. Phasellus nisi velit, mattis sit amet tellus vel, rutrum congue dolor. In est ante, vehicula id nulla sed, tincidunt sagittis velit. Duis nec gravida nibh. In suscipit odio velit, vitae blandit ipsum ullamcorper eget.</p>
                    <p>We cover South Manchester, Bramhall, Cheadle, Cheadle Hulme, Wilmslow, Alderley Edge, Bollington, Prestbury, Handforth, Mobberly, Woodford and Poynton</p>
                    <p>In non augue in risus faucibus pulvinar. Aliquam ultrices interdum nulla, sit amet pharetra turpis. Ut posuere, est vitae rutrum congue, libero sapien semper sem, vel bibendum quam metus id tortor. Aenean tristique nisi et mi porta suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer finibus sed augue pulvinar viverra. In hac habitasse platea dictumst.</p>
                </ServiceLayout>  
            </div>                    
        )
    }
}





const ServiceLayout = (props) => (    
    <div className='container'>
        <div className='column' style={{padding: '3rem 1rem'}}>
            <div className='content'>                            
                <div style={{textAlign: 'left'}}>
                    <div style={{display: 'inline-block', paddingBottom: '1rem'}}>
                        <h1>{props.title}</h1>
                        <div>
                            <hr style={{border: '3px solid #339935', width: '5rem', padding: '0', margin: '0'}} />
                        </div>
                    </div>
                </div>                               
                {props.children}
                <hr style={{border: '1px solid #F0F3F3', width: '100%'}} />
                <ServiceFooter img={props.img} imgAlt={props.imgAlt}/> 
            </div>
        </div>
    </div>
)


export default ServiceSelected;