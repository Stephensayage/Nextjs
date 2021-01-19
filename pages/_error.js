import React from "react";
import Link from "next/link";

export default function _error() {
  return (
    <div>
      <h1>Opps, something went wrong</h1>
      <h4>
        Try going back{" "}
        <Link href="/">
          <a>Home</a>
        </Link>
      </h4>
      <h2>404 - Page Not Found</h2>
    </div>
  );
}
