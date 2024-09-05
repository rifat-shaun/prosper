import { Outlet } from "react-router-dom";
import ChatButton from "../common/chat/ChatButton";

const Layout = () => {
  return (
    <div className="relative min-h-screen">
      <Outlet />
      <ChatButton />
    </div>
  );
};
export default Layout;
