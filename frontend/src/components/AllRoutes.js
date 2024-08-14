import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { Tasks } from '../pages/Tasks';
import AboutUs from '../pages/About';
import Contact from '../components/Contact'
import AdminDashboard from '../pages/AdminDashboard';
import NewTask from '../pages/NewTask';
import UserPage from '../pages/UserPage';


export const AllRoutes = () => {
  const { isAuthenticated } = useSelector(state => state.user);
  const newdata=useSelector(state=>state);
  console.log(newdata)
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/about' element={<AboutUs />}/>        
        <Route path='/task' element={isAuthenticated ?<Tasks/>:<Login/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/dashboard' element={<AdminDashboard/>}/>
        <Route path='/newtask' element={<NewTask/>}/>
        <Route path='/UserPage' element={<UserPage/>}/>

        

      </Routes>
    </div>
  );
};
