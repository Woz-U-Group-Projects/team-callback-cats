import firebase from "../firebase";
import { useState } from "react";
import { useRouter } from "next/router";
import LoginRegisterForm from "../components/LoginRegisterForm";
import { toast } from "react-toastify";
import { GoogleOutlined, SyncOutlined } from "@ant-design/icons";
import { Button } from 'antd';
import Link from 'next/link';

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPass, setRegisterPass] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const register = async () => {
    //console.log(registerEmail, registerPass)
    setLoading(false)
    await firebase
      .auth()
      .createUserWithEmailAndPassword(registerEmail, registerPass)
      .then((user) => {
        console.log("REGISTER", user);
        toast.success("User Successfully Registered!")
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
        setLoading(false)
      });
  };

  const login = async () => {
    //console.log(loginEmail, loginPass)
    setLoading(true)
    await firebase
      .auth()
      .signInWithEmailAndPassword(loginEmail, loginPass)
      .then((user) => {
        console.log("LOGIN", user);
        toast.success("User Successfully Logged In!")
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
        setLoading(false)
      });
  };

  const googleLogin = async () => {
    await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((user) => {
        console.log("LOGIN", user);
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center pt-4 display-4">Welcome to the Hardware Inventory App!</h2>
      <hr></hr>
      <h3 className="text-center pt-8 display-6">
        {loading ? (<SyncOutlined spin className="text-home-made" />) : ("Please Login / Register")}</h3>

      <Button
        onClick={googleLogin}
        className="mb-3 col-md-6 offset-md-3"
        type="danger"
        shape="round"
        icon={<GoogleOutlined />}
        size="large"
        block="true"
      >
        Login with Google
      </Button>

      <div className="row">
        <LoginRegisterForm
          email={loginEmail}
          setEmail={setLoginEmail}
          pass={loginPass}
          setPass={setLoginPass}
          handleSubmit={login}
          buttonName="Login"
        />

        <LoginRegisterForm
          email={registerEmail}
          setEmail={setRegisterEmail}
          pass={registerPass}
          setPass={setRegisterPass}
          handleSubmit={register}
          buttonName="Register"
        />
      </div>

      <div className="d-flex">
        <Link href="/reset-password">
          <a className="btn btn-outline-danger btn-sm mt-5">Reset Password</a>
        </Link>
      </div>
    </div>
  );
};

export default Login;
