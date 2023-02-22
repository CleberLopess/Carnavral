import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, get, child } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj0PIVbZGpJU33BEf9KF5tiFcW-4OFNOQ",
  authDomain: "carnavrau-838ef.firebaseapp.com",
  databaseURL: "https://carnavrau-838ef-default-rtdb.firebaseio.com",
  projectId: "carnavrau-838ef",
  storageBucket: "carnavrau-838ef.appspot.com",
  messagingSenderId: "268183043754",
  appId: "1:268183043754:web:e039a9d3515e0595a59ad3",
  measurementId: "G-5FZB333TFD",
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

const dataBaseUpdate = ref(database, "update");
onValue(dataBaseUpdate, (snapshot) => {
  const data = snapshot.val();

  if (data) {
    window.location.reload();
  }
});

export const currentDataBase = ref(getDatabase());
