import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/body";
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import About from "./components/About";
import Error from "./components/Error";

const Applayout = () => {
  return (
    <div className="app">
     
      <Header></Header>
      <Body></Body>
      
    </div>
  );
};

const router= createBrowserRouter([
  {
    path:"/",
    element:<Applayout/>,
    errorElement:<Error/>,
  },
  {
    path:"/about/",
    element:<About/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>);
