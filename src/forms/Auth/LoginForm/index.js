import React from "react";

const LoginForm = () => {
  return (
    <div>
      <form>
        <div class="column has-text-left">
          <div class="field">
            <label class="label">Mobile Number</label>
            <div class="control">
              <input class="input is-medium" type="text" />
            </div>
          </div>

          <div class="control">
            <button
              type="submit"
              class="button is-link is-fullwidth has-text-weight-medium is-medium"
            >
              Send OTP
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
