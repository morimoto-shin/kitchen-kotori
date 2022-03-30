// eslint-disable-next-line import/default
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/analytics'

if (!firebase.apps.length) {
  let config = {}
  if (location.hostname === 'localhost') {
    console.log('🐸 ローカル開発環境')
    config = {
      apiKey: 'AIzaSyAiEEJY_NI2NUnrEoiY0a2-VztyijVGNfQ',
      authDomain: 'kitchen-kotori.firebaseapp.com',
      projectId: 'kitchen-kotori',
      storageBucket: 'kitchen-kotori.appspot.com',
      messagingSenderId: '770328082740',
      appId: '1:770328082740:web:95b10a604b656b49b2cd61',
      measurementId: 'G-ETLMGLD5KW',
    }
  } else {
    console.log('🔥 Firebase ホスティング環境')
    config = JSON.parse(
      loadTextFileAjaxSync('/__/firebase/init.json', 'application/json')
    )
  }
  const app = firebase.initializeApp(config)
  firebase.analytics(app)
}

export default firebase

export const auth = firebase.auth()
export const storage = firebase.storage()
export const db = firebase.firestore()
export const firestore = firebase.firestore

function loadTextFileAjaxSync(filePath, mimeType) {
  const xmlhttp = new XMLHttpRequest()
  xmlhttp.open('GET', filePath, false)
  if (mimeType != null) {
    if (xmlhttp.overrideMimeType) {
      xmlhttp.overrideMimeType(mimeType)
    }
  }
  xmlhttp.send()
  if (xmlhttp.status === 200) {
    return xmlhttp.responseText
  } else {
    throw new Error('loadTextFileAjaxSync() response error', xmlhttp.status)
  }
}
