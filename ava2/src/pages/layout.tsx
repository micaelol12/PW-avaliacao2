import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Layout = () => {
  return (
    <div >
      <Header/>
      <main style={{margin:'10px'}}><Outlet/></main>
      <Footer/>
    </div>
  );
};

export default Layout;
