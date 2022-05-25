import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content text-center">
                <h1>Dasboard</h1>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="my-drawer" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li><Link to='/dashboard/addReview'>Add Review</Link></li>
                    <li><Link to='/dashboard/myProfile'>My Profile</Link></li>

                </ul>
            </div>
        </div>
    );
};

export default Dashboard;