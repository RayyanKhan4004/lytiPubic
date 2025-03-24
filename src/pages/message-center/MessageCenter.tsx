import ChatScreen from './components/ChatScreen'
import MessageCenterSideBar from './components/MessageCenterSideBar'
// import MessageCenterSideBar from './components/messageCenterSideBar'

function MessageCenter() {
  return (
    <div className="flex flex-row ">
      <MessageCenterSideBar />
      <ChatScreen userName="sarah" />
    </div>
  );
}

export default MessageCenter