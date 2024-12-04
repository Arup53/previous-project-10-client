import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import MainLayout from "./layout/MainLayout";
import SignUp from "./components/SignUp";
import Users from "./pages/Users";
import LogIn from "./components/LogIn";
import AddElements from "./pages/AddElements";

import UpdateElements from "./pages/UpdateElements";
import Campaigns from "./pages/Campaigns";

import CampaignDetails from "./pages/CampaignDetails";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch("http://localhost:3000/users"),
      },
      {
        path: "/campaigns",
        element: <Campaigns />,
        loader: () => fetch("http://localhost:3000/campaigns"),
      },
      {
        path: "/addcampaign",
        element: <AddElements />,
      },
      {
        path: "/details/:id",
        element: <CampaignDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/campaigns/${params.id}`),
      },
      {
        path: "/updateelements/:id",
        element: <UpdateElements />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/elements/${params.id}`),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
