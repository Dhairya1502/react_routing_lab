function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About This Application</h1>

      <p style={styles.text}>
        This application demonstrates how React Router can be used to
        implement client-side routing in a React project. Instead of
        loading new HTML pages, React dynamically renders components
        based on the current URL.
      </p>

      <div style={styles.section}>
        <h3>Technologies Used</h3>
        <ul>
          <li>React for building UI components</li>
          <li>React Router for page navigation</li>
          <li>Vite for fast project setup and development</li>
          <li>Modern JavaScript (ES6+)</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h3>Key Features</h3>
        <ul>
          <li>Simple and clean navigation bar</li>
          <li>Multiple pages inside a Single Page Application</li>
          <li>Reusable and modular components</li>
          <li>Fast rendering without full page reload</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h3>Future Improvements</h3>
        <ul>
          <li>Add a 404 Not Found page</li>
          <li>Implement protected routes for authentication</li>
          <li>Use lazy loading to improve performance</li>
          <li>Add animations for page transitions</li>
        </ul>
      </div>

    </div>
  );
}

const styles = {
  container: {
    background: "white",
    padding: "35px",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
  },

  title: {
    color: "#1e293b",
    marginBottom: "20px"
  },

  text: {
    fontSize: "18px",
    color: "#334155",
    lineHeight: "1.6",
    marginBottom: "25px"
  },

  section: {
    marginBottom: "25px"
  }
};

export default About;