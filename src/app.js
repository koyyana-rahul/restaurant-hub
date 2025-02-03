import React from "react";
import ReactDOM from "react-dom/client";

const AppLayout = () => {
  return <div className="font-bold bg-blue-500">app layout</div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
