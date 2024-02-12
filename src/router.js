import { Suspense, lazy } from "react";
import ex20240207Router from './ex20240207Router';
import ex20240214Router from './ex20240214Router';

const { createBrowserRouter } = require("react-router-dom");

const Loading = <div>Loading...</div>;
const Main = lazy(() => import("./Main/index.js"));
const Ex20240117 = lazy(() => import("./ex/20240117/App.js"));
const Ex20240124 = lazy(() => import("./ex/20240124/App.js"));
const Ex20240207 = lazy(() => import("./ex/20240207/index.js"));
const Ex20240214 = lazy(() => import("./ex/20240214/Index.js"));

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={Loading}>
      <Main />
    </Suspense>,
  },
  {
    path: "20240117",
    element: <Suspense fallback={Loading}>
      <Ex20240117 />
    </Suspense>,
  },
  {
    path: "20240124",
    element: <Suspense fallback={Loading}>
      <Ex20240124 />
    </Suspense>,
  },
  {
    path: "20240207",
    element: <Suspense fallback={Loading}>
      <Ex20240207 />
    </Suspense>,
    children: ex20240207Router()
  },
  {
    path: "20240214",
    element: <Suspense fallback={Loading}>
      <Ex20240214 />
    </Suspense>,
    children: ex20240214Router()
  }
]);

export default Router;
