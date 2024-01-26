import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './routes';
import Home from '../pages/Home';
import NewPost from '../pages/NewPost';
import AllNews from '../pages/AllNews';

function Router(){
    return <BrowserRouter>   
    <Routes>
      <Route path={routes.home} element={<Home/>}></Route> 
      <Route path={routes.newPost} element={<NewPost/>}></Route> 
      <Route path={routes.allNews} element={<AllNews/>}></Route> 
     </Routes>  
    </BrowserRouter>
}
export default Router;