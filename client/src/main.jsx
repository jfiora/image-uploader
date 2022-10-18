import React from 'react';
import ReactDOM from 'react-dom/client';
import UploaderPage from './pages/Uploader/UploaderPage';
import HomePage from './pages/Home/HomePage';
import './styles/index.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        //errorElement: <ErrorPage />,
    },
    {
        path: '/upload',
        element: <UploaderPage />,
        //errorElement: <ErrorPage />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
