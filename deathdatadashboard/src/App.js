import SideBar from "./Components/SideBar";
import Layout from "./Layout";

export default function App() {

  return (
    <div className="App">
      <title>Death Data</title>
      <div className="flex">
        <div className="basis-[15%] h-[100vh]">
          <SideBar />
        </div>
        <div className="basis-[85%] h-[100vh] overflow-y-auto">
          <Layout />
        </div>
      </div>
    </div>
  );
}
