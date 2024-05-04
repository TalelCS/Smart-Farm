import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { useRouter } from 'expo-router';

const Nav1 = () => {
  const router = useRouter();

  const handleBackPress = () => {
    router.back();
  };

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={handleBackPress} />
      <Appbar.Content title="Smart Farm" />
      <Appbar.Action icon="cog" onPress={() => {}} />
      <Appbar.Action icon="logout" onPress={() => {}} />
    </Appbar.Header>
  );
};

export default Nav1;
