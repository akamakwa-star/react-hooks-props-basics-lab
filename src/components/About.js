import React from "react";
import Links from "./Links";

function About({ bio, github, linkedin }) {
  return (
    <section>
      {bio && bio.trim() !== "" && <p>{bio}</p>}
      <Links github={github} linkedin={linkedin} />
    </section>
  );
}

export default About;
