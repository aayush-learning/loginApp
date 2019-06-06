import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.homeView}>
        <TouchableOpacity
          style={styles.logOutButtonView}
          onPress={ () => this.props.navigation.goBack()
          }
        >
          <Text style={styles.logOutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
