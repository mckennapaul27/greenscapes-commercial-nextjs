import React, {Component} from 'react';
import NavBar from './NavBar';
import NavBarMobile from './NavBarMobile';
import TopMenu from './TopMenu';
import '../styles/styles.scss'
import Router from 'next/router';
import {isMobile} from 'react-device-detect';

const Loader = ({ loading }) => <div className={loading ? 'loading-show' : ''} id="loader-bar" />;

export default class Layout extends Component {
    state = { 
        loading: false 
    };

    componentDidMount() {
        Router.onRouteChangeStart = () => {
          this.setState({ loading: true });
        };
        Router.onRouteChangeComplete = () => {
          this.setState({ loading: false });
        };
        Router.onRouteChangeError = () => {
          this.setState({ loading: false });
        };
    }


    render () {
        let l;
        return (
            <div>
            <Loader loading={this.state.loading} />
            <div className='is-hidden-desktop is-hidden-widescreen'>
                <NavBarMobile />
            </div>
            <div className='is-hidden-touch'>
                <TopMenu />
                <NavBar />
            </div>   
                {this.props.children}
        </div>
        )
    }
}
    
