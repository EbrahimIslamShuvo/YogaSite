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
import Blog from './Page/Blog/Blog';
import SingleBlog from './Page/Blog/SingleBlog';
import Shop from './Page/Shop/Shop';
import SingleShop from './Page/Shop/SingleShop';
import Course from './Page/Course/Course';
import SingleCourse from './Page/Course/SingleCourse';

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
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/blog/:id",
        element: <SingleBlog></SingleBlog>
      },
      {
        path: "/shop",
        element: <Shop></Shop>
      },
      {
        path: "/shop/:id",
        element: <SingleShop></SingleShop>
      },
      {
        path: "/course",
        element: <Course></Course>
      },
      {
        path: "/course/:id",
        element: <SingleCourse></SingleCourse>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
