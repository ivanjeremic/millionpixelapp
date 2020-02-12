import React from "react";
import { StateContext } from "./Context/StateContext";
import BuyPixelForm from "./BuyPixelForm";

export default function Nav(props) {
  const { toggleTooltipFalse } = React.useContext(StateContext);

  return (
    <div className="hero" onMouseMove={toggleTooltipFalse}>
      <section className="hero is-primary is-small">
        {/* Hero head: will stick at the top */}
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div style={{ padding: "1em" }} className="navbar-brand">
                <h1>millionpixel.app</h1>
              </div>
              <div id="navbarMenuHeroA" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item is-active">Home</a>
                  <a className="navbar-item">Examples</a>
                  <a className="navbar-item">Documentation</a>
                  <span className="navbar-item">
                    <a className="button is-primary is-inverted">
                      <span className="icon">
                        <i className="fab fa-github" />
                      </span>
                      <span>Download</span>
                    </a>
                  </span>
                  <span className="navbar-item">
                    <BuyPixelForm />
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
        {/* Hero content: will be in the middle */}
        <div className="hero-body">
          <div className="container has-text-centered">
            <span class="tag is-light">
              1.000.000 pixel * 1$ per pixel * Own a piece of
              <strong style={{ padding: "0 5px" }}>NEW</strong>internet history!
            </span>
          </div>
        </div>
        {/* Hero footer: will stick at the bottom */}
        <div className="hero-foot" />
      </section>
    </div>
  );
}
