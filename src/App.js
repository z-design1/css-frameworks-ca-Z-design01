import AppNavbar from "./components/App Header/AppNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
// import AppCarousel from "./components/App Header/AppCarousel";
import AppFooter from "./components/App Footer/AppFooter";
import HomeBody from "./components/AppBody/Home/HomeBody";
import NewsList from "./components/AppBody/News/NewsList";
import { Route, Routes } from "react-router-dom";
import AppContact from "./components/AppBody/ContactUs/AppContact";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.wrapper}>
      {/* <AppNavbar /> */}
      {/* <AppCarousel />
      <HomeBody /> */}
      {/* <NewsList />
      <AppFooter /> */}

      <AppNavbar />
      <Routes>
        <Route exact path="/" element={<HomeBody />} />
        <Route path="/NewsList" element={<NewsList />} />
        <Route path="/AppContact" element={<AppContact />} />
      </Routes>
      {/* <HomeBody /> */}
      {/* <NewsList /> */}
      <AppFooter />
    </div>
  );
}

export default App;
