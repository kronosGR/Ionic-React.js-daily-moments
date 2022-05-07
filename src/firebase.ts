import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCUbZNxqEQDRpT0fmKwovE8MQfgG0NZxD0',
  authDomain: 'daily-moments-fb105.firebaseapp.com',
  projectId: 'daily-moments-fb105',
  storageBucket: 'daily-moments-fb105.appspot.com',
  messagingSenderId: '1031706155407',
  appId: '1:1031706155407:web:0334a5f5f80b2d2221d3fa',
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
