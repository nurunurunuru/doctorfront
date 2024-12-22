import React, { useContext } from 'react'
import Navbar from '../Pages/Shared/Navbar/Navbar'
import { Link, Outlet } from 'react-router-dom'
import useAdmin from '../hooks/useAdmin'
import { AuthContext } from '../Contexts/AuthProvider'

const Dashboardlayout = () => {
  const {user} =useContext(AuthContext)
  const[isAdmin,isAdminLoading] = useAdmin(user?.email); 
  return (
    <div>
        <Navbar></Navbar>
        <div className="drawer lg:drawer-open">
  <input 
  id="dashboard-drawer" 
  type="checkbox" 
  className="drawer-toggle" />
  <div className="drawer-content p-12 bg-[#F1F5F9]">
    {/* Page content here */}

        <Outlet></Outlet>
    
    <label 
    htmlFor="dashboard-drawer" 
    className="btn btn-primary drawer-button lg:hidden">
      Open drawer
    </label>
  </div>
  <div className="drawer-side">
    <label 
    htmlFor="dashboard-drawer" 
    aria-label="close sidebar" 
    className="drawer-overlay">
</label>
    <ul className="menu text-base-content min-h-full w-80">
      {/* Sidebar content here */}
      <li>
        <Link to='/dashboard'>MyAppointment</Link>
      </li>
     {
      isAdmin && <>
       <li>
        <Link to='/dashboard/all-users'>All Users</Link>
      </li>
      <li>
        <Link to='/dashboard/add-doctor'>Add A Doctor</Link>
      </li>
      <li>
        <Link to='/dashboard/manage-doctor'>Manage Doctor</Link>
      </li>
      
      </>
     }
      
      
      
    </ul>
  </div>
</div>
    </div>
  )
}

export default Dashboardlayout