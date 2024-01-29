import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { routes } from './routes';
import Home from '../pages/Home';
import NewPost from '../pages/NewPost';
import AllNews from '../pages/AllNews';
import RootLayout from '../layouts/RootLayout';


  export const router= createBrowserRouter(
    createRoutesFromElements(
      <Route path={routes.home} element={<RootLayout/>}>
        <Route index element={<Home/>}></Route> 
        <Route path={routes.newPost} element={<NewPost/>}></Route> 
        <Route path={routes.allNews} element={<AllNews/>}></Route> 
     </Route> 
  ))
