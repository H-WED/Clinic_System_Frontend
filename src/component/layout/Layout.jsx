import Header from "./Header.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import "./Layout.scss";

function Layout(props) {
  return (
    <div className="layout">
      <div className="content">
        <div className="sidebar">
          <Header loggedInUser={props.loggedInUser} />

          <Navbar />
        </div>
        <main>{props.children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
