// Inicializa Firebase y obtiene una referencia a Firestore
const firebaseConfig = {
  apiKey: "AIzaSyDWzXqS4ahyqIBEH6BvjKrJ5882ZD_mu5I",
  authDomain: "pesado-automatizado.firebaseapp.com",
  databaseURL: "https://pesado-automatizado-default-rtdb.firebaseio.com",
  projectId: "pesado-automatizado",
  storageBucket: "pesado-automatizado.appspot.com",
  messagingSenderId: "15100900080",
  appId: "1:15100900080:web:2b3789ca4e383758210835",
  measurementId: "G-YN4WF8LNPP"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

//Inicializa la base de datos normal
const db = firebase.firestore();

// Inicializa Realtime Database
const database = firebase.database();