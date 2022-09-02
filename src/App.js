// Components and Pages
import Header, {
  BackButton,
  Hamburger,
  Header2,
} from "./components/global/Header";
import Sidebar, { SidebarOverlay } from "./components/global/Sidebar";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";

// Routing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

// State Mangement
import { useRecoilState } from "recoil";
import homePageStatusAtom from "./recoil/misc/homePageStatusAtom";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";

function App() {
  //   Global variable
  const [homeIsActive, setHomeIsActive] = useRecoilState(homePageStatusAtom);

  // detecting current location
  const location = useLocation();
  const path = location.pathname;

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
        <Route exact path="/category" element={<CategoryPage />} />
        <Route exact path="/product" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
