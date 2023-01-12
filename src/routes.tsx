import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import Game from "./pages/GamePage";
import { Home } from "./pages/HomePage";




export const router = createBrowserRouter([
  { 
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "wordle",
        element: <Game/>
      },
    ]
  },

]);