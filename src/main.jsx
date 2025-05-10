import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Page/Home/Home';
import MeditationCourse from './Page/MeditationCourse/MeditationCourse';
import YogaCourse from './Page/YogaCorse/YogaCourse';
import AboutYoga from './Page/AboutYoga/AboutYoga';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/meditationCourse",
        element: <MeditationCourse></MeditationCourse>
      },
      {
        path: "/yogaCourse",
        element: <YogaCourse></YogaCourse>
      },
      {
        path: "/aboutyoga",
        element: <AboutYoga></AboutYoga>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
