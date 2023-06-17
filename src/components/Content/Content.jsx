import "./Content.scss";

import Container from "../Layout/Container";
import Grid from "./Grid";
import Header from "./Header";
import React from "react";
import SideNav from "./SideNav";
import Typography from "./Typography";
import UI from "./UI";

function Content() {
  return (
    <div className="content">
      <Container>
        <div className="content__body">
          <SideNav />
          <main className="content__main">
            <Header />
            <Grid />
            <Typography />
            <UI />
          </main>
        </div>
        <footer className="content__victory">
          <span>Победа! 😜</span>
        </footer>
      </Container>
    </div>
  );
}

export default Content;
