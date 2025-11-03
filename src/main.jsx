import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.jsx'
import MainLayout from './layouts/MainLayout.jsx';
import Trending from './components/Trending.jsx';
import Apps from './pages/Apps.jsx';
import Installation from './pages/Installation.jsx';
import AppDetail from './pages/AppDetail.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import NoAppFound from './pages/NoAppFound.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Trending></Trending>
      },
      {
        path: 'apps',
        element: <Apps></Apps>
      },
      {
        path: 'apps/:id',
        loader: () => fetch(`/apps.json`),
        element: <AppDetail></AppDetail>
      },
      {
        path: 'installation',
        element: <Installation></Installation>
      },

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
