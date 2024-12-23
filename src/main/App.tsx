import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Authentication from "../pages/Authentication/Authentication";
import Home from "../pages/Home/Home";
import Orders from "../pages/Orders/Orders";
import Profile from "../pages/Profile/Profile";
import { Outlet, Route, Routes } from "react-router-dom";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import RecoverPassword from "../pages/Authentication/RecoverPassword";
import WebOrder from "../pages/WebOrder/WebOrder";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<SideBarLayout />}>
          <Route path="" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<Orders />} />
          <Route path="weborder" element={<WebOrder />} />
        </Route>
        <Route path="auth/" element={<Authentication />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="recover" element={<RecoverPassword />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;

function SideBarLayout() {
  return (
    <>
      <SideBar />
      <div className="flex flex-col relative py-[25px] px-[25px] flex-1 overflow-hidden w-full mobile:px-[10px]">
        <NavBar />
        <main className="mt-16 ">
          <Outlet />
        </main>
      </div>
    </>
  );
}
function Layout({ children }: any) {
  return <div className="flex items-start ">{children}</div>;
}
