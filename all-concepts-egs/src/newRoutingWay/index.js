import React from 'react';
import { createRoot } from 'react-dom/client';
import { Link, Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Contact from './contact/Contact';
import Dashboard from './dashboard/Dashboard';
import About from './about/About';
import Root from './home/Root';
import './index.css';

document.title = "Health Companion";

/* const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]); */



const routesWithJSX = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={
      <div>
        <h2><Link to="">Home</Link> | <Link to="about">About Us</Link> | <Link to="contact">Contact</Link> | <Link to="app">App</Link></h2>
        <Outlet /> {/* Where the nested route element render's */}
      </div>
    }>
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />,
      <Route path="app" element={
        <div>
          App
          <h2><Link to="">App Home</Link> | <Link to="./about" relative='path' >App About Us</Link> | <Link to="contact">App Contact</Link></h2>
          <Outlet /> {/* Where the nested route element render's */}
        </div>}>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Route>
  )

);

// const root = ReactDOM.createRoot(document.getElementById('root'));
const root = createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routesWithJSX} />
);


// OR
function indexJSX() {
  return <RouterProvider router={routesWithJSX} />
}
export { indexJSX };