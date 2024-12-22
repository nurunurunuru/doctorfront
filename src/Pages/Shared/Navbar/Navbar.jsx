import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const menuItems = (
    <React.Fragment>
      <li><Link to="/home" className="hover:text-blue-500 transition duration-200">Home</Link></li>
      <li><Link to="/about" className="hover:text-blue-500 transition duration-200">About</Link></li>
      <li><Link to="/appointment" className="hover:text-blue-500 transition duration-200">Appointment</Link></li>
      <li><Link to="/reviews" className="hover:text-blue-500 transition duration-200">Reviews</Link></li>
      <li><Link to="/contact" className="hover:text-blue-500 transition duration-200">Contact Us</Link></li>
      {user ? (
        <li>
          <button onClick={logOut} className="hover:text-red-500 transition duration-200">Sign Out</button>
        </li>
      ) : (
        <li><Link to='/login' className="hover:text-blue-500 transition duration-200">Login</Link></li>
      )}
      <li><Link to="/dashboard" className="hover:text-blue-500 transition duration-200">Dashboard</Link></li>
    </React.Fragment>
  );

  return (
    <div className="bg-white shadow-lg">
      <div className="navbar bg-white container mx-auto py-4 px-6 lg:px-12 flex justify-between items-center">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <button tabIndex={0} role="button" className="btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 p-2 shadow-lg bg-white rounded-lg w-48 text-gray-700"
            >
              {menuItems}
            </ul>
          </div>
          <a className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition duration-200">Doctors Portal</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-4 text-lg font-medium text-gray-700">
            {menuItems}
          </ul>
        </div>
        <div className="navbar-end lg:hidden">
          <Link to="/dashboard" className="btn btn-primary btn-sm rounded-full text-white hover:bg-blue-700">Dashboard</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
