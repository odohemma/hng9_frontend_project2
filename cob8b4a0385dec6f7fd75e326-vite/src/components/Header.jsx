import React from "react";
import headerPicture1 from "./images/IMG_6736_2.jpg";
import avatarShareButton from "./images/HNG9-Avatar-share-button.png";
import avatarShareButtonMobile from "./images/HNG9-Avatar-share-button-mobile.png";

export default function Header() {
  return (
    <div className="header">
      <img src={headerPicture1} className="header-picture" id="profile__img" />
      <div className="header-name">Emmanuel Odoh</div>
      <div id="slack" hidden>
        odohemma
      </div>
      <img src={avatarShareButton} className="avatar-share-button" />
      <img
        src={avatarShareButtonMobile}
        className="avatar-share-button-mobile"
      />
    </div>
  );
}
