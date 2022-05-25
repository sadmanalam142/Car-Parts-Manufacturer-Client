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
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='addReview' element={<AddAReview></AddAReview>}></Route>
          <Route path='myProfile' element={<MyProfile></MyProfile>}></Route>
        </Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
