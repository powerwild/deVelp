
import { useSelector } from "react-redux";



function SplashPage() {

    const sessionUser = useSelector((state) => state.session.user);

    if(!sessionUser){

        return (
            <div>
                <h1>
                    deVelp
                </h1>
                <div >
                    <h2>
                        Welcome to deVelp
                    </h2>
                    <p>
                        About develp...
                    </p>
                </div>
            </div>
        );

    } else {

        return (
            <div>
                <h1>
                    deVelp
                </h1>
                <div >
                    <h2>
                        Welcome {sessionUser.username}!
                    </h2>
                    <p>
                        About develp...
                    </p>
                </div>
            </div>
        );

    }
}

export default SplashPage;