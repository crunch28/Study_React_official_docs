import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";

const Loading = <div>Loading...</div>
const ExApp1 = lazy(() => import("./ex/20240207/App1.js"));

const ex20240207Router = () => {
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
        }
    ];
};

export default ex20240207Router;