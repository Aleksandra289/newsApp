import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import { routes } from "./routes";
import Home from "../pages/Home/Home";
import NewPost from "../pages/NewPost/NewPost";
import AllNews from "../pages/AllNews/AllNews";
import Layout from "../layout/Layout";
import NotFound from "../pages/NotFound/NotFound";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={routes.root} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={routes.newPost} element={<NewPost />} />
        <Route path={routes.allNews} element={<AllNews />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
