import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles'
import { App } from './App';
import { FirebaseContext } from './context/firebase'

// Uncomment to seed database with seed.js content
// import { seedDatabase } from './seed'

const firebaseConfig = {
    apiKey: "AIzaSyARkPY-aArTUHG3b-HSZPNLhIqU4MYdsYU",
    authDomain: "netflixfeature.firebaseapp.com",
    databaseURL: "https://netflixfeature.firebaseio.com",
    projectId: "netflixfeature",
    storageBucket: "netflixfeature.appspot.com",
    messagingSenderId: "646375904684",
    appId: "1:646375904684:web:e957817b46a6427a415609"
}

const firebase = window.firebase.initializeApp(firebaseConfig)

// Uncomment to seed database with seed.js content
// seedDatabase(firebase)

ReactDOM.render(
    <>
        <FirebaseContext.Provider value={{ firebase: window.firebase }} >
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>

    </>,
    document.getElementById('root'));
