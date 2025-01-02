import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import configs from '../package.json';
import App from './App.jsx';
import ContactMePage from './contact/ContactMePage.js';
import PDFViewer from './document/PDFViewer';
import ExperiencePage from './educationExperience/ExperiencePage.js';
import Home from './home/Home';
import './index.scss';
import PageNotFound from './pageNotFound/PageNotFound';
import SkillsProjects from './skills/SkillsProjects.js';
import BackEndProjects from './skills/projectsByCategory/BackEndProjects.js';
import FrontEndProjects from './skills/projectsByCategory/FrontEndProjects.js';


const routesWithJSX = createBrowserRouter(
  createRoutesFromElements(
    <Route path={configs.homepage.substring(configs.homepage.lastIndexOf("/") + 1, configs.homepage.length)} element={<App />} >
      <Route path="" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="experience" element={<ExperiencePage />} />
      <Route path="skills_projects" element={<SkillsProjects />} />
      <Route path="skills_projects/frontEndsProjects" element={<FrontEndProjects />} />
      <Route path="skills_projects/backEndProjects" element={<BackEndProjects />} />
      <Route path="contact" element={<ContactMePage />} />
      <Route path="resume" element={<PDFViewer />} />
      <Route path='*' element={<PageNotFound />} />
    </Route>
  )
);


ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<RouterProvider router={routesWithJSX} />);