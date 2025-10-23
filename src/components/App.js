import React from "react";
import user from "../data/user";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <>
      <nav></nav>

      <div id="home">
        <Home name={user.name} city={user.city} color={user.color} />
      </div>

      <div id="about">
        <About bio={user.bio} github={user.links.github} linkedin={user.links.linkedin} />
      </div>
    </>
  );
}

export default App;
