import PhotoCamera from '@mui/icons-material/PhotoCamera'

const SignUp = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className="logo">Reactbase Chat</span>
        <span className="title">Create account</span>
        <form>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{display:"none"}} type="file" id="file" />
          <label htmlFor="file">
            <PhotoCamera />
          </label>
          <button>Submit</button>
        </form>
        <p>Already have an account? Click here to log in.</p>
      </div>
    </div>
  )
}

export default SignUp