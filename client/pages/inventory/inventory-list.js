import { parseCookies } from 'nookies';
import axios from 'axios';

const InventoryList = () => {

    return (
        <div className="container">
            <h2 className="text-center pt-4 display-4">Welcome to my Inventory</h2>
            <p className="text-center pt-8 lead">This is a protected page for a logged in user only!</p>
            <hr></hr>
            <div className="row">
                <h2 className="text-center pt-8 offset-3">Full Product Inventory listed here!</h2>
            </div>
        </div>
    );
};

export async function getServerSideProps(context) {
    try {
        const cookies = parseCookies(context);
    //console.log('NOOKIES SENDING TOKEN', cookies)
        const {data} = await axios.get(`http://localhost:4000/api/private-route`, {
            headers: {
                token: cookies.token,
            },
        });
        if (data.ok) return { props: {}};
    } catch (err) {
        return {
            redirect: {
                permanent: false,
                destination: '/login',
            },
            props: {},
        };
    }
}

export default InventoryList;