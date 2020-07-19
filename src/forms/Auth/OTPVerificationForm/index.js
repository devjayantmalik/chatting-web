import React from "react";
import Image from "../../../components/Image";

const OTPVerificationForm = () => {
  return (
    <div>
      <form>
        <div class="column has-text-left">
          <div class="field">
            <label class="label">Mobile Number</label>
            <div class="control">
              <input
                class="input is-medium disabled"
                value="9466767865"
                disabled
                type="text"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">OTP</label>
            <div class="control">
              <input class="input is-medium" type="text" />
            </div>
          </div>
          <div class="control">
            <button
              type="submit"
              class="button is-link is-fullwidth has-text-weight-medium is-medium"
            >
              Verify OTP
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OTPVerificationForm;
