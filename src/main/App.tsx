import { act, useState } from "react";
import {
  Icon,
  MoonIcon,
  PhoneIcon,
  StackedIcon,
  UserIcon,
} from "../assets/icons/icons";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Authentication from "../pages/Authentication/Authentication";
import Home from "../pages/Home/Home";
import Orders from "../pages/Orders/Orders";
import Profile from "../pages/Profile/Profile";

function App() {
  return (
    <Layout>
      <SideBar />

      <Content>
        {/* <Home /> */}
        {/* <Profile /> */}
        <Orders />
      </Content>
      {/* <Authentication /> */}
      <MobileBar />
    </Layout>
  );
}

export default App;

function Layout({ children }: any) {
  return <div className="flex items-start mobile:pb-[65px]">{children}</div>;
}

function Content({ children }: any) {
  return (
    <div className="flex flex-col relative py-[25px] px-[25px] flex-1 overflow-hidden w-full">
      <NavBar />

      <main className="mt-16 ">{children}</main>
    </div>
  );
}

function MobileBar() {
  const [active, setActive] = useState("/");
  return (
    <div className="mobile:flex fixed z-10 bottom-0 h-[65px] w-full left-0 bg-main hidden justify-between px-8 items-center rounded-t-3xl">
      <div className="flex gap-4">
        <div
          onClick={() => setActive("/User")}
          className={` h-[44px] aspect-square rounded-[15px] backdrop-blur-[20px] flex justify-center items-center cursor-pointer transition-all ${
            active == "/User" ? "bg-white" : "bg-whiteBg"
          } backdrop-blur-[20px] flex justify-center items-center cursor-pointer transition-all ${
            active == "/User" ? "hover:opacity-90" : "hover:bg-whiteBgHover"
          }`}
        >
          <UserIcon
            className={`h-[22px] aspect-square ${
              active == "/User" ? "[&>path]:fill-main" : "[&>path]:fill-white"
            }`}
          />
        </div>
        <div
          onClick={() => setActive("/Orders")}
          className={` h-[44px] aspect-square rounded-[15px] backdrop-blur-[20px] flex justify-center items-center cursor-pointer transition-all ${
            active == "/Orders" ? "bg-white" : "bg-whiteBg"
          } backdrop-blur-[20px] flex justify-center items-center cursor-pointer transition-all ${
            active == "/Orders" ? "hover:opacity-90" : "hover:bg-whiteBgHover"
          }`}
        >
          <StackedIcon
            className={`h-[22px] aspect-square ${
              active == "/Orders" ? "[&>path]:fill-main" : "[&>path]:fill-white"
            }`}
          />
        </div>
      </div>
      <div className="flex gap-4">
        <div
          onClick={() => setActive("/")}
          className={` h-[44px] aspect-square rounded-[15px] backdrop-blur-[20px] flex justify-center items-center cursor-pointer transition-all ${
            active == "/" ? "bg-white" : "bg-whiteBg"
          } backdrop-blur-[20px] flex justify-center items-center cursor-pointer transition-all ${
            active == "/" ? "hover:opacity-90" : "hover:bg-whiteBgHover"
          }`}
        >
          <Icon
            className={`h-[22px] [&>rect]:transition-all aspect-square ${
              active == "/" ? "[&>rect]:fill-main" : "[&>rect]:fill-white"
            }`}
          />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="h-[44px] aspect-square rounded-[15px] bg-whiteBg backdrop-blur-[20px] flex justify-center items-center cursor-pointer transition-colors hover:bg-whiteBgHover active:bg-whiteBgActive">
          <PhoneIcon className="h-[22px] aspect-square [&>path]:stroke-white" />
        </div>
        <div className="h-[44px] aspect-square rounded-[15px] bg-whiteBg backdrop-blur-[20px] flex justify-center items-center cursor-pointer transition-colors hover:bg-whiteBgHover active:bg-whiteBgActive">
          <MoonIcon className="h-[22px] aspect-square [&>path]:fill-white" />
        </div>
      </div>
    </div>
  );
}
