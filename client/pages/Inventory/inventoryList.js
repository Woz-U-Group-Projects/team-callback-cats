import { parseCookies } from 'nookies';
import axios from 'axios';

const InventoryList = () => {

    return (
        <div className="container">
            <h2>Welcome to my Inventory</h2>
            <p className="lead">This is a protected page for a logged in user only!</p>
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