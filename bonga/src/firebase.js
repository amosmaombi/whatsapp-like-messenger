import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDwgmQAX6w8pg50sXcSl3DRvmUEP-H6LEk",
    authDomain: "bonga-eed23.firebaseapp.com",
    databaseURL: "https://bonga-eed23.firebaseio.com",
    projectId: "bonga-eed23",
    storageBucket: "bonga-eed23.appspot.com",
    messagingSenderId: "501387058188",
    appId: "1:501387058188:web:ac521f9ffc3ae0c36de229",
    measurementId: "G-3GGMLBMD5D"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;