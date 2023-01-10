import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components";
import { HomeView } from "../pages";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <HomeView />
            }
        ]
    }
])

export default router