import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";




export const router = createBrowserRouter([
  {
    
    element: <App/>,
    path: "/",
    children: [
   
    ]
  },

]);