import React from "react";
import Image from "../Image";

const temp = [];

for (let i = 0; i < 50; i++) {
  temp.push(
    <article className="box">
      <div class="media">
        <div class="media-left">
          <Image src="/profiles/user.svg" classNames="image is-32x32" />
        </div>
        <div class="media-content">
          <p class="title is-6 no-padding">Jayant Malik{`${i}`}</p>

          <p class="subtitle is-6">lorem ipsum sit de donar colonde.</p>
        </div>
      </div>
    </article>
  );
}

const Channels = () => {
  return (
    <div className="chats-container">
      {temp}
      <div className="chats-padding"></div>
    </div>
  );
};

export default Channels;
