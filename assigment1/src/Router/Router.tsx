import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { routes } from './routes';
import Home from '../pages/Home';
import NewPost from '../pages/NewPost';
import AllNews from '../pages/AllNews';
import Layout from '../layouts/Layout';


  export const router= createBrowserRouter(
    createRoutesFromElements(
      <Route path={routes.root} element={<Layout/>}>
        <Route index element={<Home/>}></Route> 
        <Route path={routes.newPost} element={<NewPost/>}></Route> 
        <Route path={routes.allNews} element={<AllNews/>}></Route> 
     </Route> 
  ))
