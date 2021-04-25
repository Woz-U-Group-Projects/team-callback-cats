import React from 'react';
import Head from "next/head";
import GoTop from '../Shared/GoTop';


const Layout = ({children}) => {
    const [loader, setLoader] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => setLoader(false), 2000);
    }, [])

    return(
        <React.Fragment>
            <Head>
                <title>Cats Hardware Inventory App </title>
                <meta name="description" content="CatsHardware. This has been built with React, Next.js, Express.js, and ES6+" />
                <meta name="og:title" property="og:title" content="CatsHardware - React Next eCommerce Template"></meta>
                <meta name="twitter:card" content="CatsHardware - React Next eCommerce Template"></meta>
                <link rel="canonical" href="https://CatsHardware-react.CatsHardware.com/"></link>
                <meta property="og:image" content="https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dG9vbHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
            </Head>
            {loader ? 'Loading' : children}
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </React.Fragment>
    );
}

export default Layout;