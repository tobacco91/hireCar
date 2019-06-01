import React, { Component } from 'react';
import {
  TextInput, StyleSheet, Button, View, AsyncStorage,
} from 'react-native';
import { post } from '../utils/request';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
    };
  }

  login = () => {
    const { navigation } = this.props;
    post('/user/login', { account: this.state.user, password: this.state.password })
      .then((res) => {
        AsyncStorage.setItem('user', JSON.stringify(res.data));
        navigation.navigate('Home');
      });
    // .catch((error) => {
    //   console.log(error, 'erro');
    // });
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>

        <TextInput
          style={styles.subone}
          placeholder="用户名"
          onChangeText={user => this.setState({ user })}
        />
        <TextInput
          style={styles.subone}
          placeholder="密码"
          onChangeText={password => this.setState({ password })}
        />

        <View style={styles.login}>
          <Button
            title="登录"
            onPress={this.login}
          />
        </View>
        <View style={styles.register}>
          <Button
            title="注册"
            onPress={() => { navigation.navigate('Register'); }}
          />
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 100,

    alignItems: 'center',
  },
  subone: {
    width: 300,
    height: 40,
    marginTop: 20,
    backgroundColor: '#F7F7F7',
  },
  login: {
    marginTop: 20,
    width: 200,
    backgroundColor: '#EB235C',
  },
  register: {
    marginTop: 20,
    width: 200,
    backgroundColor: '#F5D33D',
  },
});
