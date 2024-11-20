import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Home from "../pages/Home/Home";

function App() {
  return (
    <Layout>
      <SideBar />
      <Content>
        <Home />
      </Content>
    </Layout>
  );
}

export default App;

function Layout({ children }: any) {
  return <div className="flex items-start">{children}</div>;
}

function Content({ children }: any) {
  return (
    <div className="flex flex-col py-[25px] px-[25px] flex-1">
      <NavBar />
      {children}
    </div>
  );
}
