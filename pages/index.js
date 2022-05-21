import * as React from "react";
import { isResSent } from "next/dist/shared/lib/utils";
import Head from "next/head";
import Image from "next/image";
import logo from "../public/logo.png";
import { AuthContext, TOGGLE_LOGIN } from "../context/auth";

export default function Home() {
  const { isLoggedIn, dispatch } = React.useContext(AuthContext);

  const toggleIsLoggedIn = () => {
    dispatch({
      type: TOGGLE_LOGIN,
    });
  };

  return (
    <div>
      <Head>
        <title>learnCode</title>
        <meta name="description" content="Find the perfect course for you!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <button onClick={toggleIsLoggedIn}>Login</button>

        <h1 className="text-3xl font-bold underline">Hello world!</h1>

        {isLoggedIn && (
          <div>
            <h1>wwwwww!</h1>
            <p>You are logged in!</p>
          </div>
        )}
      </main>
    </div>
  );
}
