//REACT IMPORTS
import React from "react";
import { BrowserRouter as Switch, Route, Router } from "react-router-dom";
//CHAKRA IMPORTS
import { Box } from "@chakra-ui/react";
//COMPONENTS
import Movies from "./pages/Movies/Movies";
import Home from "./pages/Home/Home";
import Series from "./pages/Series/Series";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/series" exact component={Series} />
      <Route path="/movies" exact component={Movies} />
    </Switch>
  );
}

export default App;
