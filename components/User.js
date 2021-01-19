import React from "react";

export default function User(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>{props.age}</h3>
      <p>{props.appName}</p>
      <style jsx>
        {`
          div {
            margin: 0 auto;
            width: 50%;
            text-align: center;
            background-color: rgba(20, 20, 20, 0.4);
            border: 1px solid black;
            box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);
          }
          h1 {
            color: red;
          }
          h3 {
            color: blue;
          }
        `}
      </style>
    </div>
  );
}

User.getInitialProps = (context) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: "Nextjs practice (user)" });
    }, 1000);
  });
  return promise;
};
