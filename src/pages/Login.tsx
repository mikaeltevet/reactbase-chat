const LogIn = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Reactbase Chat</span>
        <span className='title'>Log into your account</span>
        <form>
          <input type='email' placeholder='email' />
          <input type='password' placeholder='password' />
          <button>Submit</button>
        </form>
        <p>Don't have an account? Click here to sign up.</p>
      </div>
    </div>
  )
}

export default LogIn
