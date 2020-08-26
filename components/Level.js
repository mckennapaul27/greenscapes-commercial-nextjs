import TrackVisibility from 'react-on-screen';
import CountUp from 'react-countup';

const Level = ({isVisible}) => {
    const headingStyle = {
        fontSize: '0.75rem',
        padding: '1rem 0'
    }

    const levelStyle = {
        marginBottom: '3.5rem'
    }
    return (
        <div className="level" style={{padding: '3rem 1rem', minHeight: '50vh'}} >
            <div className="level-item has-text-centered" style={levelStyle}>
                <div>
                    <div style={{width: '3rem', margin: 'auto'}}>
                        <img src="/images/certificate.svg" alt="experienced grounds maintenance" />
                    </div>
                    <p className="heading" style={headingStyle}>Years Experience</p>
                    <p className="title">{isVisible && <CountUp start={1} end={16} duration={6} />}+</p>
                </div>
            </div>
            <div className="level-item has-text-centered" style={levelStyle}>
                <div>
                    <div style={{width: '3rem', margin: 'auto'}}>
                        <img src="/images/edit.svg" alt="experienced grounds maintenance" />
                    </div>
                    <p className="heading" style={headingStyle}>Commercial Contracts</p>
                    <p className="title">{isVisible && <CountUp start={1} end={35} duration={6} />}+</p>
                </div>
            </div>            
            <div className="level-item has-text-centered" style={levelStyle}>
                <div>
                    <div style={{width: '3rem', margin: 'auto'}}>
                        <img src="/images/team.svg" alt="experienced grounds maintenance" />
                    </div>
                    <p className="heading" style={headingStyle}>Team Members</p>
                    <p className="title">{isVisible && <CountUp start={1} end={16} duration={6} />}</p>
                </div>
            </div>
            <div className="level-item has-text-centered" style={levelStyle}>
                <div>
                    <div style={{width: '3rem', margin: 'auto'}}>
                        <img src="/images/services.svg" alt="experienced grounds maintenance" />
                    </div>
                    <p className="heading" style={headingStyle}>Services</p>
                    <p className="title">{isVisible && <CountUp start={1} end={15} duration={6} />}+</p>
                </div>
            </div>
        </div> 
      );
}  

const VisibleLevel = () => {
    return (
        <TrackVisibility once partialVisibility>
            <Level />
        </TrackVisibility>
    )    
}

export default VisibleLevel;




    
      
   