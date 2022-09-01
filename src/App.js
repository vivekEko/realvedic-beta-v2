// Components and Pages
import Header, {
  BackButton,
  Hamburger,
  Header2,
} from "./components/global/Header";
import Sidebar, { SidebarOverlay } from "./components/global/Sidebar";
import HomePage from "./pages/HomePage";

// Routing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage";

// Routing
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  // detecting current location
  const location = useLocation();
  const path = location.pathname;

  //   local variable
  const [homeIsActive, setHomeIsActive] = useState();

  // checking if current page is homepage
  useEffect(() => {
    setHomeIsActive(path == "/" ? true : false);
  }, [path]);

  return (
    <div className="cursor-default font-helveticaRegular relative">
      {/* Misc */}
      <SidebarOverlay />
      <Hamburger />
      <BackButton />

      {/* Main Components */}
      {homeIsActive ? <Header /> : <Header2 />}
      <Sidebar />

      {/* Routes */}
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about_us" element={<AboutUsPage />} />
      </Routes>
    </div>
  );
}

export default App;
