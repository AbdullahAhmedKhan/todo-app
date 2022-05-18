import React from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (
        <div class="navbar bg-base-100">
            <div class="flex-1">
                <Link to='/' class="btn btn-ghost normal-case text-xl">Todo App</Link>
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal p-0">
                    <li>{user ? <button onClick={logout} className="btn btn-ghost text-red-500">Sign Out</button> : <Link to="/login">Login</Link>}</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;