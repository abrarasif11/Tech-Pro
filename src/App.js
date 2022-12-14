import { Toaster } from 'react-hot-toast';
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
import Spinner from './Spinner/Spinner';

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
    ]
  },
  {
   path: '*',
   element : <ErrorPage></ErrorPage>
  }
 ])
  return (
    <div className="App">
    <RouterProvider fallbackElement={<Spinner></Spinner>} router={router}></RouterProvider>    
    <Toaster></Toaster>  
    </div>
  );
}

export default App;
