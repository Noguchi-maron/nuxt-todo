import firebase from 'firebase'

const config = {
  projectId: process.env.FIREBASE_PROJECT_ID
}

if (!firebase.apps.legth) {
  firebase.initializeApp(config)
}

export default firebase
