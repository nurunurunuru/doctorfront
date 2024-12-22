import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';

import { AuthContext } from '../../Contexts/AuthProvider';
import Loading from '../../components/Loading/Loading';

const AdminRoute = ({ children }) => {

    const location = useLocation()

    const { user, loading } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)

    if (loading || isAdminLoading) {
        return <Loading></Loading>
    }

    if (user && isAdmin) {
        return children;

    }

    return <Navigate to='/home' state={{ from: location }} replace></Navigate>

};

export default AdminRoute;