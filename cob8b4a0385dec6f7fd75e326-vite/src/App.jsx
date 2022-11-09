import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Main2 from "./components/Main2";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
          <Main2 />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
