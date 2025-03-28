import React from "react";

const QuoteSuccess = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Quote Request Sent!</h1>
      <p style={styles.message}>
        Thank you for your request. We have successfully received your quote
        request and will get back to you shortly.
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    padding: "20px",
  },
  heading: {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "1rem",
  },
  message: {
    fontSize: "1.2rem",
    color: "#555",
  },
};

export default QuoteSuccess;
