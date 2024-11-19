import Navbar from "../assets/components/Navbar";
import SideBar from "../assets/components/SideBar";

function App() {
  return (
    <Layout>
      <SideBar />
      <Content></Content>
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
      <Navbar />
      {children}
    </div>
  );
}
