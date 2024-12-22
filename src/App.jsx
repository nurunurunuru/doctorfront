import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './Routes/Route/Router';
import { Toaster } from 'react-hot-toast';

function App()  {

  
  

  return (
    <>
       
       <RouterProvider router={router}></RouterProvider>
        <Toaster 
         position="bottom-right"
         reverseOrder={false}
        />
    </>
  );
};

export default App;
