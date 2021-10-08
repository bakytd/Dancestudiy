import React from "react";
import { Container } from "@material-ui/core";
import LeftSideBar from '../components/LeftSideBar';
import NavbarCom from "../components/NavbarCom";
import Content from "../components/Content";
import Coments from "../components/Coments";
import ComentsTable from "../components/ComentsTable";

const MainPage = () => {
  return (
    <div>
      <div>
        <NavbarCom />
        <div className="main2">
          <Container>
            <div className="main">
              <LeftSideBar/>
              <div className="dlina">
                <Content />
                
              </div>
            </div>
            <ComentsTable/>
            <Coments/>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
