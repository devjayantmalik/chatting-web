import React from "react";

const LandingPage = () => {
  return (
    <main class="hero is-info is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-6 is-offset-3">
            <h1 class="title">Coming Soon</h1>
            <h2 class="subtitle">
              $this is the best social platform for running an internet
              conversation. We handle billions of clients every year for
              forward-thinking communities around the world.
            </h2>
            <div class="box">
              <div class="field is-grouped">
                <p class="control is-expanded">
                  <input
                    class="input"
                    type="text"
                    placeholder="Enter your email"
                  />
                </p>
                <p class="control">
                  <a class="button is-info">Notify Me</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
