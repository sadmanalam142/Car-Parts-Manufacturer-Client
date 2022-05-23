import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    const menubar = <>
        <li><Link to='/'>Home</Link></li>
        {
            user ? <li><button onClick={handleSignOut} class="btn btn-active btn-ghost">Sign Out</button></li> : <li><Link to='/login'>Login</Link></li>
        }
    </>
    return (
        <div className='sticky top-0 z-50'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menubar}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Car Parts Manufacturer</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menubar}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;