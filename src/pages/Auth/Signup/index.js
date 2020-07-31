import React from "react";
import Columns, { Column } from "../../../components/Columns";
import Image from "../../../components/Image";

import SignupForm from "../../../forms/Auth/SignupForm";

class Signup extends React.Component {
  render() {
    return (
      <main class="hero is-fullheight">
        <section class="hero-body">
          <div class="container has-text-centered">
            <Columns verticalCentered>
              <Column width="6">
                <Image src="kalam.svg" alt="site logo" />
                <SignupForm />
              </Column>
              <Column width="5" offset="1">
                <figure class="image is-4by3 is-rounded">
                  <Image src="signup-banner.jpg" cover alt="login banner" />
                </figure>
              </Column>
            </Columns>
          </div>
        </section>
      </main>
    );
  }
}

export default Signup;
