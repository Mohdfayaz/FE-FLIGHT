import { createBrowserRouter } from "react-router";
import App from "./App";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import authLoader from "./loaders/unit/authLoader";
import Logout from "./components/Logout";
import CandidateDashboard from "./pages/user/CandidateDashboard";
import jobsLoader from "./loaders/unit/jobsLoader";
import jobLoader from "./loaders/unit/jobLoader";
import AdminLayout from "./layouts/AdminLayout";
import CandidateLayout from "./layouts/CandidateLayout";

const routes = [
  {
    path: "/",
    element: <App />,
    loader: authLoader,
    children: [
      { path: "", element: <Home /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "logout", element: <Logout /> },
      {
        path: "candidate",
        element: <CandidateLayout />,
        loader: authLoader,
        children: [
          {
            path: "dashboard",
            element: <CandidateDashboard />,
            loader: jobsLoader,
          },
          {
            path: "jobs/:id",
            element: <CandidateDashboard />,
            loader: jobLoader,
          },
        ],
      },
      {
        path: "admin",
        element: <AdminLayout />,
        loader: authLoader,
        children: [
          {
            path: "dashboard",
            element: <div>Admin Dashboard</div>,
          },
        ],
      },
    ],
    hydrateFallbackElement: <p>Loading...</p>,
  },
];

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});

export default router;
