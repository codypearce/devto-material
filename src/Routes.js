import React from "react";
import { View } from "react-native";

import Home from "./Screens/Home";
import Post from "./Screens/Post";

import { Route, Router, Switch } from "./Router";

function Routes() {
  return (
    <Router>
      <View style={{ backgroundColor: "#f2f6ff", minHeight: "100%" }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post/:id" component={Post} />
        </Switch>
      </View>
    </Router>
  );
}

export default Routes;
