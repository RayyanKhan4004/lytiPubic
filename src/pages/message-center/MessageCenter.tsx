import Breadcrumb from '../../components/common/BreadCrumb';
import ChatScreen from './components/ChatScreen'
import MessageCenterSideBar from './components/MessageCenterSideBar'
// import MessageCenterSideBar from './components/messageCenterSideBar'

function MessageCenter() {
  return (
    <div className="pt-4 ">
      <div className="p-4 ">
        <Breadcrumb items={["Account", "Change Password"]} />
      </div>
      <div className="flex flex-row ">
        <MessageCenterSideBar />
        <ChatScreen userName="sarah" />
      </div>
    </div>
  );
}

export default MessageCenter