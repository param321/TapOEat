import * as firebase from 'firebase';

//Intitialize Firebase
const firebaseConfig = {
	apiKey: "AIzaSyAxgBSA-IV810M9ihhIOh3CfU4Zbtgg114",
	authDomain: "tapoeat.firebaseapp.com",
	databseURL: "https://tapoeat.firebaseio.com",
	projectId: "tapoeat",
	storageBucket: "tapoeat.appspot.com",
	messagingSenderId: "984697872157",
	appId: "1:984697872157:android:f887141ab4095e0c298bf4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebaseApp.auth();