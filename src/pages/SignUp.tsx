import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, storage, db } from '../firebase'
import { useState } from 'react'
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage'
import { doc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      displayName: { value: string }
      email: { value: string }
      password: { value: string }
      file: { files: FileList }
    }
    const displayName = target.displayName.value
    const email = target.email.value
    const password = target.password.value
    const file = target.file.files[0]

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      const storageRef = ref(storage, displayName)
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log('Upload is ' + progress + '% done')
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused')
              break
            case 'running':
              console.log('Upload is running')
              break
          }
        },
        (error) => {
          setError(true)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            await updateProfile(res.user,{
              displayName,
              photoURL: downloadURL,
            })
            await setDoc(doc(db, 'users', res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            })
            await setDoc(doc(db, 'userChats', res.user.uid), {
            })
            navigate('/')
          })
        }
      )
    } catch (error) {
      setError(true)
    }
  }

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Reactbase Chat</span>
        <span className='title'>Create account</span>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='display name' />
          <input type='email' placeholder='email' />
          <input type='password' placeholder='password' />
          <input style={{ display: 'none' }} type='file' id='file' />
          <label htmlFor='file'>
            <FileUploadOutlinedIcon sx={{ color: 'tomato', fontSize: 40 }} />
            <span>Upload avatar</span>
          </label>
          <button>Submit</button>
          {error && <span>Something went wrong!</span>}
        </form>
        <p>Already have an account? Click here to log in.</p>
      </div>
    </div>
  )
}

export default SignUp
