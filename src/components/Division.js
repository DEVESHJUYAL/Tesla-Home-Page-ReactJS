import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Division({ head, desc, txt1, txt2, bg }) {
  return (
    <Container bgImage={bg}>
      <Fade bottom>
        <Heading>
          <h1>{head}</h1>
          <p>{desc}</p>
        </Heading>
      </Fade>
      <Butons>
        <Fade bottom>
          <Btns>
            <LeftBtn>{txt1}</LeftBtn>
            {txt2 && <RightBtn>{txt2}</RightBtn>}
          </Btns>
        </Fade>
        <DownArrow src="../images/arrow.svg" />
      </Butons>
    </Container>
  );
}

export default Division;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url("../images/${props.bgImage}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Heading = styled.div`
  text-align: center;
  padding-top: 15vh;

  p {
    font-size: 23px;
    font-weight: 400;
    margin-top: 6px;
  }
`;

const Btns = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Butons = styled.div``;

const LeftBtn = styled.div`
  width: 256px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.3px;
  cursor: pointer;
  margin: 8px;
`;

const RightBtn = styled(LeftBtn)`
  background: white;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`;
