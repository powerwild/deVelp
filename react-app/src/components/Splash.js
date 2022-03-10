import LoginModal from './modals/LoginModal';
import SignupModal from './modals/SignupModal';
import { useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import DemoUser from './auth/DemoUser';
import './Splash.css';

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
