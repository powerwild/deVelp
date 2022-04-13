import LoginModal from './modals/LoginModal';
import SignupModal from './modals/SignupModal';
import { useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import DemoUser from './auth/DemoUser';
import './Splash.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";


function SplashPage() {
    const sessionUser = useSelector((state) => state.session.user);
    return (
        <>
            {sessionUser ?
                (<Redirect to='/developers' />) :
                (<div className="splash-main">
                    <div className="splash-text">
                        <h1 className="splash-title">Welcome to deVelp</h1>
                        <div className="splash-mission">Our mission:</div>
                        <div className="splash-statement">To help connect you with the right dev for your job, whether you're in the same state or across the country</div>
                        <div className='socials-header'>This site was developed by:</div>
                        <div className='socials'>
                        <div className='chuck'> Charles Woods
                            <a href='https://github.com/CWoods2909' target='_blank' rel='noreferrer'><FaGithub className='github' /></a>
                            <a href='https://www.linkedin.com/in/charles-woods-319a83231?trk=people-guest_people_search-card' target='_blank' rel='noreferrer'><FaLinkedin className='linked' /></a>
                        </div>
                        <div className='casey'> Casey Spears
                            <a href='https://github.com/powerwild' target='_blank' rel='noreferrer'><FaGithub className='github' /></a>
                            <a href='https://www.linkedin.com/in/casey-spears-4a6042180/  ' target='_blank' rel='noreferrer'><FaLinkedin className='linked' /></a>
                        </div>
                        </div>
                        <div className='socials'>
                        <div className='jake'> Jake Richardson
                        <a href='https://github.com/JakeRich7' target='_blank' rel='noreferrer'><FaGithub className='github' /></a>
                            <a href='https://www.linkedin.com/in/jacob-richardson-73440518/' target='_blank' rel='noreferrer'><FaLinkedin className='linked' /></a>
                        </div>
                        <div className='bryan'> Bryan Arnold
                        <a href='https://github.com/B-S-Arnold/' target='_blank' rel='noreferrer'><FaGithub className='github' /></a>
                            <a href='https://www.linkedin.com/in/bryan-arnold-882378215/' target='_blank' rel='noreferrer'><FaLinkedin className='linked' /></a>
                        </div>
                        </div>
                    </div>
                    <div className="splash-btns">
                        <LoginModal />
                        <SignupModal />
                        <DemoUser />
                    </div>
                </div>)
            }
        </>
    )
}

export default SplashPage;
