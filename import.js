const firestoreService = require('firestore-export-import');
const firebaseConfig = require('./config.js');
const serviceAccount = require('./serviceAccount.json');

const jsonToFirestore = async() => {
    try{
        console.log('Initializing Firebase');
        await firestoreService.initializeApp(serviceAccount, firebaseConfig.databaseURL);
        console.log('Firebase Initialized');

        
        await firestoreService.restore('./FoodData.json');
        console.log("upload suceess");
    } catch (error){
        console.log(error);
    }
};

jsonToFirestore();