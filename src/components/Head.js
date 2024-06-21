import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Head() {
  const [sidebar, setSideBar] = useState(false);
  const cars = useSelector(selectCars);
  useEffect(() => {
    const handleScroll = () => {
      setSideBar(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <a>
        <img src="../images/logo.svg" alt="" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="#">
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="#">
          <HelpOutlineIcon />
        </a>
        <a href="#">
          <LanguageIcon />
        </a>
        <a href="#">
          <AccountCircleOutlinedIcon />
        </a>
        <CustomMenu onClick={() => setSideBar(true)} />
      </RightMenu>
      <Sidebar show={sidebar}>
        <Crossicon>
          <CustomClose onClick={() => setSideBar(false)} />
        </Crossicon>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href="#">{car}</a>
              <a href="">
                <ArrowForwardIosOutlinedIcon />
              </a>
            </li>
          ))}
        <li>
          <a>Support</a>
        </li>
        <li>
          <a href="#">
            <LanguageIcon />
          </a>
          United states
          <a href="">
            <ArrowForwardIosOutlinedIcon />
          </a>
        </li>
        <li className="account">
          <a href="#">
            <AccountCircleOutlinedIcon />
            Account
          </a>
        </li>
      </Sidebar>
    </Container>
  );
}

export default Head;

const Container = styled.div`
  position: fixed;
  z-index: 1;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  min-height: 60px;
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    margin-right: 10px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 500px;
  background: white;
  z-index: 16;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;

  li {
    padding: 25px 0;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }
    a {
      padding: 0 20px;
      font-weight: 600;
    }
  }

  .account {
    padding: 25px 0;
    border-radius: 5px;
    display: block;
    a {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 0 20px;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
  margin-bottom: 30px;
`;

const Crossicon = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Menu = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }

  a {
    padding: 0 10px;
    flex-wrap: no-wrap;
  }
`;
