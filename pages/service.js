import {withRouter} from 'next/router'

const Service = withRouter((props) => {
    console.log(props)
    const title = props.router.query.title;
    console.log(title)
    return (
        <div>
            <h1>{props.router.query.title}</h1>
            <p>This will be the the services page for {props.router.query.title}</p>
        </div>
    )
})

export default Service;
    
