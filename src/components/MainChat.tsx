import Messages from './Messages'
import Input from './Input'

const MainChat = () => {
  return (
    <div className="mainchat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={''} alt="" />
          <img src={''} alt="" />
          <img src={''} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default MainChat