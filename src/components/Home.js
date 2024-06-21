import React from "react";
import styled from "styled-components";
import Division from "./Division.js";

function Home() {
  return (
    <Container>
      <Division
        head="Model 3"
        desc="Long Range AWD From $34,990"
        bg="model-3.jpg"
        txt1="Order Now"
        txt2="Demo Drive"
      />
      <Division
        head="Model Y"
        desc="From $31,490"
        bg="model-y.jpeg"
        txt1="Order Now"
        txt2="Demo Drive"
      />
      <Division
        head="Model X"
        desc="From $63,990"
        bg="model-x.jpg"
        txt1="Order Now"
        txt2="Demo Drive"
      />
      <Division
        head="Model S"
        desc="From $66,490"
        bg="model-s.jpg"
        txt1="Order Now"
        txt2="Demo Drive"
      />
      <Division bg="cybertruck.jpg" txt1="Order now" txt2="Learn more" />
      <Division
        head="Solar Roof"
        desc="Produce Clean Energy From Your Roof"
        bg="solar-roof.jpg"
        txt1="Order now"
        txt2="Learn more"
      />
      <Division head="Accessories" bg="accessories.jpg" txt1="Shop Now" />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
