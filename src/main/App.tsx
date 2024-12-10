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
        <Home />
        {/* <Profile /> */}
        {/* <Orders /> */}
      </Content>
      {/* <Authentication /> */}
    </Layout>
  );
}

export default App;

function Layout({ children }: any) {
  return <div className="flex items-start">{children}</div>;
}

function Content({ children }: any) {
  return (
    <div className="flex flex-col relative py-[25px] px-[25px] flex-1 overflow-hidden w-full">
      <NavBar />

      <main className="mt-16 ">{children}</main>
    </div>
  );
}
