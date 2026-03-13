import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div style={styles.app}>
      <nav style={styles.navbar}>
        <h2 style={styles.logo}>React Router Demo</h2>

        <div>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/about" style={styles.link}>About</Link>
        </div>
      </nav>

      <div style={styles.pageContainer}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

const styles = {
  app: {
    fontFamily: "Segoe UI, sans-serif",
    minHeight: "100vh",
    background: "linear-gradient(to right, #eef2f3, #dfe9f3)"
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 40px",
    background: "#1e293b",
    color: "white",
    boxShadow: "0 3px 10px rgba(0,0,0,0.2)"
  },

  logo: {
    margin: 0,
    fontSize: "22px",
    fontWeight: "600"
  },

  link: {
    marginLeft: "25px",
    textDecoration: "none",
    color: "white",
    fontSize: "17px",
    fontWeight: "500"
  },

  pageContainer: {
    padding: "40px",
    maxWidth: "1000px",
    margin: "auto"
  }
};

export default App;