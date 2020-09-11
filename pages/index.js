import React from "react";
import Link from "next/link";

import "isomorphic-fetch";

const Home = ({ repositories }) => {
  return (
    <>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <h1>Hello, World!</h1>
      <p>This is a simple "test" using nextjs</p>
      <br />
      <div className="repositories">
        {repositories.map((repo) => (
          <div key={repo.id} className="repo">
            <h2>{repo.name}</h2>
            <p>
              {repo.description ? (
                <p>{repo.description}</p>
              ) : (
                <p>empty description</p>
              )}
            </p>
            <br />
          </div>
        ))}
      </div>
    </>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch("https://api.github.com/users/MrDougz/repos");
  const repositories = await res.json();

  return { repositories };
};

export default Home;
