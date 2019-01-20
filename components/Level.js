import TrackVisibility from 'react-on-screen';
import CountUp from 'react-countup';

const Level = ({isVisible}) => {
    const headingStyle = {
        fontSize: '0.75rem',
        padding: '1.5rem 0'
    }
    return (
        <div className="level" style={{padding: '4rem 1rem'}} >
            <div className="level-item has-text-centered">
                <div>
                    <div style={{width: '3rem', margin: 'auto'}}>
                        <img src="/static/images/certificate.svg" alt="experienced grounds maintenance" />
                    </div>
                    <p className="heading" style={headingStyle}>Experience</p>
                    <p className="title">{isVisible && <CountUp start={1} end={15} duration={3} />}+</p>
                </div>
            </div>
            <div className="level-item has-text-centered">
                <div>
                    <div style={{width: '3rem', margin: 'auto'}}>
                        <img src="/static/images/heart.svg" alt="experienced grounds maintenance" />
                    </div>
                    <p className="heading" style={headingStyle}>Happy Customers</p>
                    <p className="title">{isVisible && <CountUp start={1} end={250} duration={3} />}+</p>
                </div>
            </div>
            <div className="level-item has-text-centered">
                <div>
                    <div style={{width: '3rem', margin: 'auto'}}>
                        <img src="/static/images/coin.svg" alt="experienced grounds maintenance" />
                    </div>
                    <p className="heading" style={headingStyle}>G's Baby</p>
                    <p className="title">{isVisible && <CountUp start={1} end={60} duration={3} />}</p>
                </div>
            </div>
            <div className="level-item has-text-centered">
                <div>
                    <div style={{width: '3rem', margin: 'auto'}}>
                        <img src="/static/images/like.svg" alt="experienced grounds maintenance" />
                    </div>
                    <p className="heading" style={headingStyle}>Social Likes</p>
                    <p className="title">{isVisible && <CountUp start={1} end={500} duration={3} />}+</p>
                </div>
            </div>
        </div> 
      );
}  

const VisibleLevel = () => {
    return (
        <TrackVisibility once>
            <Level />
        </TrackVisibility>
    )    
}

export default VisibleLevel;




    
      
   