import React from "react";
import Columns, { Column } from "../../../components/Columns";
import Image from "../../../components/Image";

import LoginForm from "../../../forms/Auth/LoginForm";
import OTPVerificationForm from "../../../forms/Auth/OTPVerificationForm";
import Message from "../../../components/Message";

class Login extends React.Component {
  render() {
    return (
      <main class="hero is-fullheight">
        <section class="hero-body">
          <div class="container has-text-centered">
            <Columns verticalCentered>
              <Column width="6">
                <Image src="kalam.svg" alt="site logo" />

                <Message danger text="Invalid OTP Provided." />

                <LoginForm />
                <hr />
                <OTPVerificationForm />
              </Column>
              <Column width="5" offset="1">
                <figure class="image is-4by3 is-rounded">
                  <Image src="login-banner.jpg" cover alt="login banner" />
                </figure>
              </Column>
            </Columns>
          </div>
        </section>
      </main>
    );
  }
}

export default Login;
