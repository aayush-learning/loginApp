import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LogIn from "./login/LogIn";
import Home from "./home/Home";

const AppNavigtor = createAppContainer(
  createStackNavigator({
    LogIn: {
      screen: LogIn,
      navigationOptions: { title: "Log In" }
    },
    Home: {
      screen: Home,
      navigationOptions: { title: "Home" }
    }
  })
);

export default class Routes extends React.PureComponent {
  render() {
    return <AppNavigtor />;
  }
}
