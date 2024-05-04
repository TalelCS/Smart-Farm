import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

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

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
