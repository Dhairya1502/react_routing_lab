function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to the Home Page</h1>

      <p style={styles.text}>
        This is a simple React application demonstrating the concept of
        navigation using React Router. React Router enables developers to
        create Single Page Applications where different components render
        based on the URL without refreshing the entire page.
      </p>

      <div style={styles.cardContainer}>

        <div style={styles.card}>
          <h3>Fast Navigation</h3>
          <p>
            React Router allows smooth navigation between different
            components without reloading the page, improving user experience.
          </p>
        </div>

        <div style={styles.card}>
          <h3>Component Based</h3>
          <p>
            Each page in React is a component. This makes the application
            modular, reusable, and easier to maintain.
          </p>
        </div>

        <div style={styles.card}>
          <h3>Modern Web Apps</h3>
          <p>
            Most modern web applications like dashboards, social media
            platforms, and SaaS tools use this Single Page Application
            architecture.
          </p>
        </div>

      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center"
  },

  title: {
    color: "#1e293b",
    marginBottom: "20px"
  },

  text: {
    fontSize: "18px",
    color: "#334155",
    maxWidth: "700px",
    margin: "auto",
    marginBottom: "40px",
    lineHeight: "1.6"
  },

  cardContainer: {
    display: "flex",
    gap: "25px",
    justifyContent: "center",
    flexWrap: "wrap"
  },

  card: {
    background: "white",
    padding: "25px",
    borderRadius: "10px",
    width: "250px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "left"
  }
};

export default Home;