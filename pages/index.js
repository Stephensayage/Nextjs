import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

export default class index extends Component {
  static getInitialProps(ctx) {
    console.log(ctx);
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ appName: "Nextjs practice" });
      }, 1000);
    });
    return promise;
  }

  render() {
    {
      console.log(this.props);
    }
    return (
      <div>
        <h1>The Landing Page of {this.props.appName}</h1>
        {/* <p>
      Go to the{" "}
      <Link href="/auth">
        <a>Auth</a>
      </Link>{" "}
      page
    </p> */}
        <button onClick={() => Router.push("/auth")}>Go to Auth</button>
        <hr />
        <button onClick={() => Router.push("/errorPage")}>
          Go to Error Page
        </button>
      </div>
    );
  }
}
