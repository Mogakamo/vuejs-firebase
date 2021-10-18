import { createApp } from 'vue'
import firebase from 'firebase/compat/app'
import App from './App.vue'
import { firebaseConfig } from './firebase-config.js'
import 'firebase/compat/firestore'

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

db.collection('messages').get().then(r => {
    r.docs.map(doc => {
        console.log(doc.data())
    })
})

createApp(App).mount('#app')
