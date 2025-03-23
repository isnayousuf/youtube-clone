import React from "react";

import { Link } from "react-router-dom";

const PageNotFound = ({ isSidebarCollapsed }) => {
  return (
    <div className="flex-div page-not-found-container">
      <div className="flex-div img-container" />

      <h1 className="mb-5">Oops! This Page Isn't Ready Yet</h1>
      <p>
        This feature is still in development—hang tight, it's coming soon! 🚀 In
        the meantime, why not take a peek at the
        <a
          href="https://github.com/isnayousuf/youtube-clone"
          className="link-text"
          target="_blank"
        >
          source code
        </a>
        and see what's in the works?
      </p>
      <p>
        Tired of staring at endless lines of code? Maybe you'd enjoy exploring
        some of my other
        <a
          href="https://www.isnayousuf.com/#projects"
          className="link-text"
          target="_blank"
        >
          projects
        </a>
        in my portfolio instead!
      </p>

      <div className="gap-4">
        <p>
          Not in the mood for any of that? No worries, let's get you back home!
        </p>
      </div>

      <Link to="/">
        <button className="home-cta">Go Back Home</button>
      </Link>
    </div>
  );
};

export default PageNotFound;
