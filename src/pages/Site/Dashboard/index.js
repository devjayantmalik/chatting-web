import React from "react";
import Image from "../../../components/Image";
import Channels from "../../../components/Channels";

const Dashboard = () => {
  return (
    <main className="hero is-fullheight-with-navbar has-background-dark">
      <div className="hero-body has-text-white ">
        <div className="container is-fluid">
          <div className="columns h-100">
            <div className="column is-one-quarter">
              <div className="box chats-box">
                <div className="level">
                  <div className="level-left">
                    <Image
                      src="/profiles/user.svg"
                      classNames="image is-32x32"
                    />
                    <h1 className="subtitle px-3">Channels</h1>
                  </div>
                  <div className="level-right">
                    <select className="select">
                      <option value="" selected>
                        Contacts
                      </option>
                      <option value="1">Groups</option>
                      <option value="2">Broadcasts</option>
                    </select>
                  </div>
                </div>

                <input
                  type="text"
                  className="input is-info mb-3"
                  placeholder="Search your contacts"
                />
                <Channels />
              </div>
            </div>
            <div className="column">
              <div className="box chats-box">
                <div className="content is-scrollable">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
                    <p>
                      {`${i}`}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Pariatur, expedita? Vel iusto laborum error dolores, ab
                      quisquam quas pariatur illo, obcaecati iste dolore
                      molestiae. Voluptatibus sapiente consequatur provident
                      exercitationem maxime.
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
