import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";

const Loading = <div>Loading...</div>
const ExApp1 = lazy(() => import("./ex/20240214/App1.js"));
const ExApp2 = lazy(() => import("./ex/20240214/App2.js"));
const ExApp3 = lazy(() => import("./ex/20240214/App3.js"));
const ExApp4 = lazy(() => import("./ex/20240214/App4.js"));

const ex20240214Router = () => {
    return [
        {
            path: "",
            element: <Navigate replace to="" />
        },
        {
            path: "ex1",
            element: <Suspense fallback={Loading}>
                <ExApp1 />
            </Suspense>
        },
        {
            path: "ex2",
            element: <Suspense fallback={Loading}>
                <ExApp2 />
            </Suspense>
        },
        {
            path: "ex3",
            element: <Suspense fallback={Loading}>
                <ExApp3 />
            </Suspense>
        },
        {
            path: "ex4",
            element: <Suspense fallback={Loading}>
                <ExApp4 />
            </Suspense>
        }
    ];
};

export default ex20240214Router;