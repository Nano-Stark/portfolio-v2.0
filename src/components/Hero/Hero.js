import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          I'm a full stack web developer specializing in building exceptional
          web experiences from the conversion taking a UI/UX design into an
          actual interactive web front end with a sleek personality of its own.
          Developing a less overly complicated backend yet so much scalable in
          the production environment. Currently, I'm focused on building web3.0
          technologies.
        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;
