import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/body";
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurentMenu";

const Applayout = () => {
  return (
    <div className="app">
     
      <Header></Header>
      <Outlet/>
      
    </div>
  );
};

const router= createBrowserRouter([
  {
    path:"/",
    element:<Applayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about/",
        element:<About/>
      },
      {
        path:"/restaurent/:restid",
        element:<RestaurantMenu/>
      }

    ],
    errorElement:<Error/>,
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>);
