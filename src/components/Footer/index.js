import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="tabs is-centered">
          <ul>
            <li>
              &copy; Jayant Malik - {new Date().getFullYear()} | Made in{" "}
              <strong>BHARAT</strong>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
