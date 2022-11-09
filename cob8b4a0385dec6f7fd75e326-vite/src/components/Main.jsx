import React from "react";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div className="main">
      <a
        target="_blank"
        className="main-items"
        id="twitter"
        href="https://twitter.com/odohemma"
      >
        Twitter Link
      </a>
      <a
        target="_blank"
        className="main-items"
        id="btn__zuri"
        href="https://training.zuri.team/"
      >
        Zuri Team
      </a>
      <a
        target="_blank"
        className="main-items"
        id="books"
        href="http://books.zuri.team/"
      >
        Zuri Books
      </a>
      <a
        target="_blank"
        className="main-items"
        id="book__python"
        href="https://books.zuri.team/"
      >
        Python Books
      </a>
      <a
        target="_blank"
        className="main-items"
        id="pitch"
        href="https://background.zuri.team/"
      >
        Background Check for Coders
      </a>
      <a
        target="_blank"
        className="main-items"
        id="book__design"
        href="https://books.zuri.team/design-rules"
      >
        Design Books
      </a>

      <Link to="/contact" className="main-items" id="contact">
        Contact Me
      </Link>
    </div>
  );
}
