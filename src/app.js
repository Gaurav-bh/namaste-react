import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/body";



const Applayout = () => {
  return (
    <div className="app">
     
      <Header></Header>
      <Body></Body>
      
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
