import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components";
import { EditorView, EmailToolsView, HomeView, RecentActivityView, SosialMediaToolsView } from "../pages";

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
            },
            {
                path: '/email-tools',
                element: <EmailToolsView />
            },
            {
                path: '/sosial-media-tools',
                element: <SosialMediaToolsView />
            },
            {
                path: '/recent-activity',
                element: <RecentActivityView />
            }
        ]
    }
])

export default router