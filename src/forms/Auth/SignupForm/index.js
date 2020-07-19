import React from "react";

const SignupForm = () => {
  return (
    <div>
      <form>
        <div class="column has-text-left">
          <div class="field">
            <label class="label">Your name</label>
            <div class="control">
              <input class="input is-medium" type="text" />
            </div>
          </div>

          <div class="field">
            <label class="label">Mobile Number</label>
            <div class="control">
              <input class="input is-medium" type="text" />
            </div>
          </div>

          <div class="field">
            <label class="label">Email Address</label>
            <div class="control">
              <input class="input is-medium" type="text" />
            </div>
          </div>

          <div class="field">
            <label class="label">Country</label>
            <div class="control">
              <select className="select is-fullwidth">
                <option label="Select Your Country" value={undefined}></option>
                <option label="India" value="in">
                  India
                </option>
              </select>
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

export default SignupForm;
