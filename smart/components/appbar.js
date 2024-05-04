import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Avatar } from 'react-native-paper';
import Logo from  '../assets/logo.jpg';


const Nav = () => (
  <Appbar.Header>
    <Avatar.Image size={40} source={Logo} />
    <Appbar.Content title="Smart Farm" />
    <Appbar.Action icon="cog" onPress={() => {}} />
    <Appbar.Action icon="logout" onPress={() => {}} />
  </Appbar.Header>
);

export default Nav;