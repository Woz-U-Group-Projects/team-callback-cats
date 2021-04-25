import { Context } from '../context';
import { useContext } from 'react';

const Home = () => {
    const { state } = useContext(Context);

    return (
        <div className="container">
            <h2 className="text-center mt-3">Home Page</h2>
            <p className="text-center pt-8 lead">This page shows the user's details</p>
            <hr></hr>
            <div>
                <pre className="text-center pt-2">{JSON.stringify(state, null, 4)}</pre>
            </div>
        </div>
    );
};

export default Home;