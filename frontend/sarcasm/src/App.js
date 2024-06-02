
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AllPosts from './components/Post/AllPosts';
import NavBar from './components/NavBar/NavBar';
import CreatePost from './components/Post/CreatePost';





function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<><NavBar/> <AllPosts/> </>
    },
    {
      path:"/create-post",
      element:<div><NavBar/><CreatePost/></div>
    }
  ])
  return (
    <>
      <RouterProvider router={router} />


    </>
  );
}

export default App;
