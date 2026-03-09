import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Notfound from './views/Notfound.jsx';
import Index from './views/Index.jsx'
import Home from './views/Home.jsx';
import HomeLayout from './HomeLayout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Notfound />,
    children: [
      {
        index: true,
        element: <Index />,
      }
    ],
  },
  {
    path: "/home",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
    ]
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
