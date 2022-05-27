import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../../CustomHooks/useAdmin';
import auth from '../../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h1 className='text-4xl font-semi-bold text-secondary text-center'>Dasboard</h1>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="my-drawer" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    <li>{!admin && <Link to='/dashboard/myOrders'>My Orders</Link>}</li>
                    <li>{!admin && <Link to='/dashboard/addReview'>Add Review</Link>}</li>
                    <li><Link to='/dashboard'>My Profile</Link></li>
                    <li>{admin && <Link to='/dashboard/users'>Make Admin</Link>}</li>
                    <li>{admin && <Link to='/dashboard/manageOrders'>Manage All Orders</Link>}</li>
                    <li>{admin && <Link to='/dashboard/addProduct'>Add A Product</Link>}</li>
                    <li>{admin && <Link to='/dashboard/manageProducts'>Manage Products</Link>}</li>

                </ul>
            </div>
        </div>
    );
};

export default Dashboard;