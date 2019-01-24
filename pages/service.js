import {withRouter} from 'next/router'
import ServiceSelected from '../components/ServiceSelected';

const Service = withRouter((props) => {
    return (
        <div>
            {ServiceSelected(props.router.query.id)}
        </div>
    )
})


export default Service;


    
