import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Authentication/Login/Login';
import Registration from './Pages/Authentication/Registration/Registration';
import Home from './Pages/Home/Home/Home';
import Header from './Shared/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './Shared/NotFound/NotFound';
import RequireAuth from './Pages/Authentication/RequireAuth/RequireAuth';
import Purchase from './Pages/Purchase/Purchase';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import AddAReview from './Pages/Dashboard/AddAReview/AddAReview';
import MyProfile from './Pages/Dashboard/MyProfile/MyProfile';
import Alluser from './Pages/Dashboard/AllUser/Alluser';
import RequireAdmin from './Pages/Authentication/RequireAdmin/RequireAdmin';
import ManageOrders from './Pages/Dashboard/ManageOrders/ManageOrders';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import ManageProducts from './Pages/Dashboard/ManageProducts/ManageProducts';
import Payment from './Pages/Dashboard/Payment/Payment';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Registration></Registration>}></Route>
        <Route path='/purchase/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>

        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myOrders' element={<MyOrders></MyOrders>}></Route>
          <Route path='addReview' element={<AddAReview></AddAReview>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='users' element={<RequireAdmin><Alluser></Alluser></RequireAdmin>}></Route>
          <Route path='manageOrders' element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>}></Route>
          <Route path='addProduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='manageProducts' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
        </Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
