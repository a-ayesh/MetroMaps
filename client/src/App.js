import { Outlet } from "react-router-dom";
import TopNavBar from "./components/TopNavbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div id="TopNavBar">
        <TopNavBar />
      </div>
      <Outlet />
      <div id="Footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
