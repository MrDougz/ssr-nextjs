import React from "react";
import Link from "next/link";

function pages() {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h1>Blog</h1>
    </>
  );
}

export default pages;
