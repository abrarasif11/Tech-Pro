import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Courses from './component/Courses/Courses';
import ErrorPage from './component/ErrorPage/ErrorPage';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
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
        path : '/courses',
        loader: () => fetch('http://localhost:5000/courses'),
        element : <Courses></Courses>
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
      }
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
