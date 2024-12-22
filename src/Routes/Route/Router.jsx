import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import About from "../../Pages/About/About";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Appointment from "../../Pages/Appointment/Appointment";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Dashboardlayout from "../../Layout/Dashboardlayout";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "../AdminRoute/AdminRoute";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import ManageDoctors from "../../Pages/Dashboard/ManageDoctors/ManageDoctors";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import CheckoutForm from "../../Pages/Dashboard/Payment/CheckoutForm";





const router =createBrowserRouter([
    {
      path:"/",
      element: <Main/>,
      children:[
        {
          path:'/home',
          element: <Home/>,
        },
        {
          path:'/about',
          element: <About/>,
        },
        {
          path:'/login',
          element: <Login/>,
        },
        {
          path:'/sign-up',
          element: <SignUp/> ,
        },
        {
          path:'/appointment',
          element: <Appointment/> ,
        },  
       
      ],
    },
      
    {
      path:'/dashboard',
      element: (
          <PrivateRoute> <Dashboardlayout></Dashboardlayout> </PrivateRoute>
        ), 
        children:[
          {
            path:'/dashboard',
            element: <MyAppointment></MyAppointment>
          },
          {
            path:"/dashboard/all-users",
            element: <AdminRoute>
              <AllUsers></AllUsers>
            </AdminRoute>
          },
          {
            path:"/dashboard/add-doctor",
            element: <AdminRoute>
              <AddDoctor></AddDoctor>
            </AdminRoute>
          },
          {
            path:"/dashboard/manage-doctor",
            element: <AdminRoute>
             <ManageDoctors></ManageDoctors>
            </AdminRoute>
          },
          {
            path:"/dashboard/payment/:id",
            loader:({params})=>fetch(`http://localhost:7001/bookings/${params.id}`),
            element: <AdminRoute>
             <Payment>
             
             </Payment>
            </AdminRoute>
          },
         
        ]
    },  
   
    
  ]);
  export default router;