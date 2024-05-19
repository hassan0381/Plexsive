import React, { useState } from "react";
import useMediaQuery from "../utils/useMediaQuery.ts";

import "../assets/main.css";

const NavTop = () => {
  const matches = useMediaQuery("(min-width: 1280px)");

  return (
    <>
      <div className="topNav">
        <div className="container">
          <div className="mainWrapper">
            <nav className="flex nav">
              {matches && (
                <>
                  <a href="/careers" className="link">
                    Careers
                  </a>
                  <a href="/pulse" className="link">
                    News
                  </a>
                  <a href="/events" className="link">
                    Events
                  </a>
                </>
              )}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavTop;
