import "bootstrap/dist/css/bootstrap.css";
import Nav from "../components/Nav";
import { Provider } from "../context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from '../components/_App/Layout';
import FirebaseAuthState from "../components/FirebaseAuthState";
import 'antd/dist/antd.css';




export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Provider>
        <FirebaseAuthState>
          <Nav />
          <ToastContainer />
          <Component {...pageProps} />
        </FirebaseAuthState>
      </Provider>
    </Layout>
  );
}
