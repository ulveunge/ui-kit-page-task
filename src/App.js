import "./App.scss";

import Content from "./components/Content/Content";
import React from "react";
import Topbar from "./components/Layout/Topbar";

function App() {
  return (
    <React.Fragment>
      <Topbar />
      <Content />
    </React.Fragment>
  );
}

export default App;
