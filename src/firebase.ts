import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBMDUSNRrPznj7dx0SmZgLCw9VkfDR_M_w',
  authDomain: 'reactbase-chat.firebaseapp.com',
  projectId: 'reactbase-chat',
  storageBucket: 'reactbase-chat.appspot.com',
  messagingSenderId: '798153580520',
  appId: '1:798153580520:web:af8f8196c03e42ac2a0e5d',
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()