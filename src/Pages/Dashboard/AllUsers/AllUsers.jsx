import React from 'react'
import Loading from '../../../components/Loading/Loading';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const AllUsers = () => {

  const {
    data:users, 
    isLoading, 
    refetch
   } =useQuery({
    queryKey:['users'],
    queryFn:async () => {
      const res = await fetch("https://doctors-sigma.vercel.app/users");
      const data = await res.json();
      return data;
    },
  });


  const handleMakeAdmin = (id) => {
   fetch(`https://doctors-sigma.vercel.app/users/admin/${id}`,{
       method:"PUT",
   })
    .then(res=>res.json())
    .then((data) => {
        if(data.modifiedCount > 0){
          toast.success("Admin Created Successfully");
          refetch();
        }
    });
  }

  const handleCancelAdmin = (id) => {
    fetch(`https://doctors-sigma.vercel.app/users/remove-admin/${id}`,{
        method:"PUT",
    })
     .then(res=>res.json())
     .then((data) => {
         if(data.modifiedCount > 0){
           toast.success("Admin role removed successfully");
           refetch();
         }
     });
   }

   const handleDeleteUser = (id) => {
    fetch(`https://doctors-sigma.vercel.app/users/delete-user/${id}`, {
        method: "DELETE",
    })
    .then(res => res.json())
    .then((data) => {
        if (data.deletedCount > 0) {
            toast.success("User deleted successfully");
            refetch();
        }
    })
    .catch(error => {
        console.error("Error deleting user:", error);
        toast.error("Failed to delete user");
    });
};



  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div>
         <h1 className='text-3xl font-semibold'>AllUsers </h1>
         <div className="overflow-x-auto">
  <table className="table w-full bg-white mt-6">
    {/* head */}
    <thead className='bg-base-200'>
      <tr className='text-black '>
        <th>Serial</th>
        <th>Name</th>
        <th>Email</th>
        <th>Job</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user,i) => (
        <tr key={user._id}>
          <th>{i + 1}</th>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            {
              user?.role === 'admin' ? <button onClick={() => handleCancelAdmin(user._id)} className='btn btn-error bg-red-500 text-white'>Cancel Admin</button> :
               <button onClick={() => handleMakeAdmin(user._id) } className="btn btn-neutral">Make Admin</button>
            }
          </td>
          <td><button onClick={() => handleDeleteUser(user._id)} className="btn btn-error bg-red-500 text-white">Delete User</button></td>
         
        </tr> 
      ))}
     
     
    </tbody>
  </table>
</div>

    </div>
  )
}

export default AllUsers