import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ToastAndroid,
  Keyboard
} from "react-native";
import styles from "./style";
const media = Dimensions.get("window");
const credential = {
  email: "aayush.agrawal@vedantu.com",
  password: "1234"
};

export default class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.authenticateLogIn =  this.authenticateLogIn.bind(this);
  }
  authenticateLogIn(email, password) {
    if(email === credential.email && password === credential.password){
        Keyboard.dismiss();
        this.setState({
            email:'',
            password:'',
        });
        this.props.navigation.navigate('Home');
    } else {
        Keyboard.dismiss();
        this.setState({
            email:'',
            password:'',
        });
        ToastAndroid.show('Incorrect id or password', ToastAndroid.SHORT);
    }
  }
  render() {
    const { email, password } = this.state;
    return (
      <View style={styles.logInView}>
        <View>
          <View>
            <TextInput
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
              placeholder="your email id"
              placeholderTextColor="#8d8a7d"
              underlineColorAndroid="black"
              style={{ width: media.width - 30, alignSelf: "center" }}
            />
          </View>
          <View>
            <TextInput
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
              placeholder="password"
              placeholderTextColor="#8d8a7d"
              underlineColorAndroid="black"
              secureTextEntry={true}
              style={{ width: media.width - 30, alignSelf: "center" }}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.logInButtonView}
          onPress={
            (email != "") & (password != "")
              ? () => this.authenticateLogIn(email, password)
              : null
          }
        >
          <Text style={styles.loginButtonText}>LogIn</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
