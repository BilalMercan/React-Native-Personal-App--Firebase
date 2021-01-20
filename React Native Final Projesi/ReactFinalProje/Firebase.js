/* eslint-disable prettier/prettier */
import firebase from 'firebase';

const FB = firebase.initializeApp({
    apiKey: 'AIzaSyBYr8H0glz_GKE2xoBl64DDSsPynTcgWEM',
    authDomain: 'myapp-project-123.firebaseapp.com',
    databaseURL: 'https://persondb-7ca2c-default-rtdb.firebaseio.com/',
    projectId: 'myapp-project-123',
    storageBucket: 'myapp-project-123.appspot.com',
    messagingSenderId: '65211879809',
    appId: '1:65211879909:web:3ae38ef1cdcb2e01fe5f0c',
    measurementId: 'G-8GSGZQ44ST',
  }
  );

export default FB;
