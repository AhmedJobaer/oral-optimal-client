import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo1.jpg'
import { AuthContext } from '../../../context/UserContext';
import '../Header/Header.css'


const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const handelSignOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.error(error))
    }


    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/login'>Login</Link></li>
        <li className='font-semibold'><Link to='/services'>Services</Link></li>
        <li className='font-semibold'><Link to='/login'>Blogs</Link></li>
    </>
    const signOut = <>
        <li className='font-semibold'><Link to='/login'>SignOut</Link></li>
    </>

    return (
        <div className="navbar h-20 mb-4  bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>

                <img className='logo' src={logo} alt="" />
                <p>Oral-Optimal</p>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            {
                user?.uid ?
                    <div>
                        <button onClick={handelSignOut}>LogOut</button>
                    </div>
                    :
                    <Link to='/login'>Login</Link>
            }
            <div className="navbar-end">
                <button className="btn btn-outline btn-success">Review</button>
            </div>
        </div>
    );
};

export default Header;