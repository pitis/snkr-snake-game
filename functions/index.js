const functions = require('firebase-functions')
const firebase = require('firebase')
const app = require('express')()
const admin = require('firebase-admin')

firebase.initializeApp({
  apiKey: 'AIzaSyASWtlnDy6xqt9a-y-uzxjQ3tTgggkilB8',
  authDomain: 'snkr-snake-game.firebaseapp.com',
  databaseURL: 'https://snkr-snake-game.firebaseio.com',
  projectId: 'snkr-snake-game',
  storageBucket: 'snkr-snake-game.appspot.com',
  messagingSenderId: '912990742387',
  appId: '1:912990742387:web:419ea949fbe52461e68706'
})

admin.initializeApp()
const db = admin.firestore()

app.get('/scores', (req, res) => {
  db.collection('scores')
    .get()
    .then(data => {
      let scores = []
      data.forEach(doc => {
        scores.push({
          scoreId: doc.id,
          name: doc.data().name,
          score: doc.data().score
        })
      })
      return res.json(scores)
    })
    .catch(err => console.log(err))
})

exports.api = functions.https.onRequest(app)
