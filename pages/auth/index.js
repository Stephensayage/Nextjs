import React from "react";
import User from "../../components/User";

export default function authIndex(props) {
  return (
    <div>
      <h1>The Auth Index Page {props.appName}</h1>
      <User name="Stephen" age={29} />
    </div>
  );
}

authIndex.getInitialProps = (context) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: "Nextjs practice (Auth)" });
    }, 1000);
  });
  return promise;
};
