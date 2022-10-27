import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Checkout from './component/Checkout/Checkout';
import CourseDetails from './component/CourseDetails/CourseDetails';
import Courses from './component/Courses/Courses';
import ErrorPage from './component/ErrorPage/ErrorPage';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import RightSideNav from './component/RightSideNav/RightSideNav';
import RightSite from './component/RightSite/RightSite';
import Blog from './FAQ/Blog/Blog';
import FAQ from './FAQ/FAQ';
import Main from './layout/Main';

function App() {
 const router = createBrowserRouter([
  {
    path : '/',
    element : <Main></Main>,
    children : [
      {
      path: '/',
      element: <Home></Home>
      },
      {
        path : '/courses',
        loader: () => fetch('https://tech-pro-server.vercel.app/courses'),
        element : <Courses></Courses>
      },
      {
        path: '/courses/:id',
        loader: async ({ params })  => fetch(`https://tech-pro-server.vercel.app/courses/${params.id}`),
        element: <RightSite></RightSite> 
      },
      {
        path : '/faq',
        element : <FAQ></FAQ>
      },
      {
        path : '/blog',
        element : <Blog></Blog>
      },
      {
        path : '/register',
        element : <Register></Register>
      },
      {
        path : '/login',
        element : <Login></Login>
      },
      // {
      //   path: "/checkout/:courseID",
      //   loader: async ({ params }) =>
      //     fetch (`https://tech-pro-server.vercel.app/courses/${params.id}`),
      //   element: <PrivateRoute>
      //       <Checkout></Checkout>
      //     </PrivateRoute>
      // },
    ]
  },
  {
   path: '*',
   element : <ErrorPage></ErrorPage>
  }
 ])
  return (
    <div className="App">
    <RouterProvider router={router}></RouterProvider>      
    </div>
  );
}

export default App;
