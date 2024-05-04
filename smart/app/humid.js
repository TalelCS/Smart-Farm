import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, Divider, Text, Card} from 'react-native-paper';
import { ScrollView } from 'react-native';
import { Switch } from 'react-native-paper';
import Nav1 from '../components/appbar1';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Meter from '../components/Meter';
import Slider from '@react-native-community/slider';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, get, set } from 'firebase/database';
import humidityImage from '../assets/humidity.jpg';

const firebaseConfig = {
    apiKey: "AIzaSyCZE3lED5W_x1vrJr3QrW7mQQsg1I_fVaI",
    authDomain: "iot-project-2024-glsi-d.firebaseapp.com",
    projectId: "iot-project-2024-glsi-d",
    storageBucket: "iot-project-2024-glsi-d.appspot.com",
    messagingSenderId: "673105881993",
    appId: "1:673105881993:web:995a9fc7a30cd43f2bcf58",
    measurementId: "G-7EHQQXX3CV",
    databaseURL: "https://iot-project-2024-glsi-d-default-rtdb.europe-west1.firebasedatabase.app"
  };

initializeApp(firebaseConfig);

const db = getDatabase();
const dataRef = ref(db, '/Sensor_Data');
const inputRef = ref(db, '/Input_value');

export default App = () => {
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [FanSpeed, setFanSpeed] = useState(0);
    const [HeaterLevel, setHeaterLevel] = useState(0);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    const [data, setData] = useState(null);
    const [inputdata, setInputData] = useState(null);

    useEffect(() => {
        get(inputRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
            setInputData(snapshot.val());
            } else {
            console.log("No data available");
            }
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);

    useEffect(() => {
        get(dataRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
            setData(snapshot.val());
            } else {
            console.log("No data available");
            }
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);

    
    const handleSaveConfiguration = async () => {
        try {
          const updates = {
            FanSpeed,
            HeaterLevel,
          };
          await set(ref(db,'/Input_value'), updates);
          console.log('Configuration saved successfully!');
        } catch (error) {
          console.error('Error saving configuration:', error);
        }
      };

    return (
        <SafeAreaProvider style={styles.safeArea}>
        <StatusBar />
        <Nav1 />
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <Card style={styles.image}>
            <Card.Cover source={humidityImage} style={styles.cardCover} />
          </Card>
          <Text style={styles.heading} variant="titleLarge">Current Humidity Levels</Text>
          <View style={styles.card}>
            <Meter degree={"%"}value={data && data.hasOwnProperty('Humidity') ? data.Humidity : 0} />
            <Divider style={styles.matop} />
            <Text style={styles.top} variant="bodyMedium">
                Monitor your environment's humidity. This card displays the current humidity levels readings, helping you ensure a comfortable or optimal environment for your smart farm.
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.subheading} variant="titleMedium">Control Fan Speed</Text>
            <Slider style={styles.slider} value={inputdata && inputdata.hasOwnProperty('FanSpeed') ? inputdata.FanSpeed : 0} onValueChange={(value) => setFanSpeed(value)} renderStepNumber="true" step={1} minimumValue={0} maximumValue={4} minimumTrackTintColor="#008000" maximumTrackTintColor="#000000" />
            <Divider style={styles.matop} />
            <Text style={styles.subheading} variant="titleMedium">Control Heater Level</Text>
            <Slider style={styles.slider} value={inputdata && inputdata.hasOwnProperty('HeaterLevel') ? inputdata.HeaterLevel : 0} onValueChange={(value) => setHeaterLevel(value)} renderStepNumber="true" step={1} minimumValue={0} maximumValue={4} minimumTrackTintColor="#008000" maximumTrackTintColor="#000000" />
            <Divider style={styles.matop} />
            <View style={styles.controlRow}>
                <Text style={styles.subheading} variant="titleMedium">Auto Humidity Control </Text>
                <Switch color={'light'} value={isSwitchOn} onValueChange={setIsSwitchOn} />
            </View>
          </View>
          <View style={styles.actions}>
            <Button icon="check-circle" buttonColor='#008000' textColor='white' mode="elevated" onPress={handleSaveConfiguration}>Save Configuration</Button>
          </View>
        </ScrollView>
      </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    scrollViewContainer: {
      flexGrow: 1,
      padding: 20,
    },
    heading: {
      textAlign: 'center',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 15,
      color: 'white',
    },
    subheading: {
      fontSize: 18,
      fontWeight: 'normal',
      marginBottom: 10,
    },
    slider: {
      width: 300,
      height: 40,
    },
    controlRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    card: {
      margin: 15,
      padding: 10,
      borderRadius: 5,
      elevation: 3,
      backgroundColor: '#f5f5f5',
    },
    image : {
        margin: 15,
        borderRadius: 5,
        elevation: 3,
        backgroundColor: '#f5f5f5',
        maxHeight: 40,
    },
    top : {
        paddingTop: 15,
        paddingBottom: 15,
    },
    matop :{
        marginTop: 15,
        marginBottom: 15,
    },
    actions : {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 10,
        margin: 10,
    }
  });