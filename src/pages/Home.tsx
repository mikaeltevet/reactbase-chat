import Sidebar from '../components/Sidebar'
import MainChat from '../components/MainChat'

const Home = () => {
  return (
    <div className='home'>
      <div className="container">
        <Sidebar />
        <MainChat />
      </div>
    </div>
  )
}

export default Home