import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import MainLayout from "./layout/MainLayout";
import SignUp from "./components/SignUp";
import Campaigns from "./pages/Campaigns";
import CampaignDetails from "./pages/CampaignDetails";
import MyCampaign from "./pages/MyCampaign";
import UpdateMyCampaign from "./pages/UpdateMyCampaign";
import AddCampaigns from "./pages/AddCampaigns";
import MyDonations from "./pages/MyDonations";
import LogIn from "./components/LogIn";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:3000/campaigns"),
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
        path: "/mycampaign",
        element: <MyCampaign />,
      },
      {
        path: "/campaigns",
        element: <Campaigns />,
        loader: () => fetch("http://localhost:3000/campaigns"),
      },
      {
        path: "/addcampaign",
        element: <AddCampaigns />,
      },
      {
        path: "/details/:id",
        element: <CampaignDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/campaigns/${params.id}`),
      },
      {
        path: "/updatecampaign/:id",
        element: <UpdateMyCampaign />,
        // loader: ({ params }) =>
        //   fetch(`http://localhost:3000/elements/${params.id}`),
      },
      {
        path: "/mydonations",
        element: <MyDonations />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
