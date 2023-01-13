import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components";
import { EditorView, HomeView } from "../pages";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <HomeView />
            },
            {
                path: '/long-from-editor',
                element: <EditorView />
            }
        ]
    }
])

export default router