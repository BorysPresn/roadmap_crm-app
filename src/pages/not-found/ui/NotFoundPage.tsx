import React from "react";

const NotExistPage: React.FC = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "50px",
    }}
  >
    <h1>Sorry</h1>
    <h3>Page not exist</h3>
  </div>
);

export default NotExistPage;
