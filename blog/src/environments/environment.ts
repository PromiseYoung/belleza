import firebase from 'firebase';
export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBK_wOdJZ61fJtwmoKJqlRZXPwyAOq9sQE',
    authDomain: 'blog-3935d.firebaseapp.com',
    projectId: 'blog-3935d',
    storageBucket: 'blog-3935d.appspot.com',
    messagingSenderId: '295907892335',
    appId: '1:295907892335:web:49db0b0f4d9c4e3e2ac19a',
  },
};
const db = firebase.initializeApp(environment.firebase);
export const collection = db.firestore().collection('contacto');
