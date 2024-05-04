import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native';
import Nav from '../components/appbar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MyCard from '../components/Card';

import tempImage from '../assets/temp.jpg';
import humidityImage from '../assets/humidity.jpg';
import airImage from '../assets/airquality.jpg';

export default App = () => {
    return (
    <SafeAreaProvider>
      <StatusBar />
      <Nav />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <MyCard title="Temperature" imageUrl={tempImage} link="../home" sensorData={{ temperature: 25, humidity: 60 }} content="Stay informed about your environment's temperature. This card shows the current temperature in [°C/°F]. You can also track historical temperature data or set temperature alerts within the app."/>
        <MyCard title="Humidity" imageUrl={humidityImage} link="../humid" sensorData={{ temperature: 25, humidity: 60 }} content="Monitor your environment's humidity. This card displays the current humidity levels readings, helping you ensure a comfortable or optimal environment for your smart farm."/>
        <MyCard title="Gas Levels" imageUrl={airImage} link="../air" sensorData={{ temperature: 25, humidity: 60 }} content="Gain insights into your environment's Air Quality. This card displays the PPM levels along with historical trends. Analyze the data to identify patterns and take proactive measures to maintain a stable and high air quality."/>
      </ScrollView>
    </SafeAreaProvider>
    );
}
const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
});