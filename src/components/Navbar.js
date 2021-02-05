import { useState } from 'react'
import { VscMenu, VscTriangleDown } from 'react-icons/vsc'
import { GoX } from "react-icons/go"
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import axios from 'axios'

const Navbar = ({ user, setIsLoggedIn }) => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const logOut = () => {
        axios({
            method: 'get',
            url: 'https://infinite-refuge-27306.herokuapp.com/users/logout',
            withCredentials: true
        })
        .then(res => {
            setIsLoggedIn(false)
        })
        .catch(err => console.log('err: ', err))
    }

    return (
        <>
            <nav className="nav-container">
                <Link to="/">
                    <div className="wsky">wsky</div>
                </Link>
                <ul className="desktop-nav-items">
                    <Link to="/cart">
                        <li className="nav-item">
                            <FaShoppingCart />
                        </li>
                    </Link>
                        {user ? (
                            <Link to="/">
                                <li className="nav-item">
                                <div onClick={logOut} className="log-button">
                                    Log out
                                </div>
                            </li>
                            </Link>
                        ) : (
                            <Link to="/login">
                                <li className="nav-item">
                                        <div className="log-button">
                                            Log in
                                        </div>
                                </li>
                            </Link>
                        )}
                    <li className="products nav-item">
                        Products<VscTriangleDown />
                        <ul className="categories">
                            <Link to="/products">
                                <li>All</li>
                            </Link>
                            <Link to="/products/1">
                                <li>Scotch</li>
                            </Link>
                            <Link to="/products/2">
                                <li>Bourbon</li>
                            </Link>
                            <Link to="/products/3">
                                <li>Irish</li>
                            </Link>
                            <Link to="/products/4">
                                <li>Canadian</li>
                            </Link>
                            <Link to="/products/5">
                                <li>Other</li>
                            </Link>
                        </ul>
                    </li>
                </ul>
                {
                    menuOpen ? (
                        <nav className="mobile-nav">
                            <ul className="mobile-nav-items">
                                {user ? (
                                    <div onClick={logOut} className="log-button">
                                        Log out
                                    </div>
                                ) : (
                                    <Link to="/login" className="log-button">
                                        Log in
                                    </Link>
                                )}
                                <li className="nav-item">
                                    <Link to="/cart">
                                        <li className="nav-item">
                                            <FaShoppingCart />
                                        </li>
                                    </Link>
                                </li>
                                <li>
                                    Products<VscTriangleDown />
                                    <ul className="categories">
                                        <Link to="/products">
                                            <li>All</li>
                                        </Link>
                                        <Link to="/products/1">
                                            <li>Scotch</li>
                                        </Link>
                                        <Link to="/products/2">
                                            <li>Bourbon</li>
                                        </Link>
                                        <Link to="/products/3">
                                            <li>Irish</li>
                                        </Link>
                                        <Link to="/products/4">
                                            <li>Canadian</li>
                                        </Link>
                                        <Link to="/products/5">
                                            <li>Other</li>
                                        </Link>
                                    </ul>
                                </li>
                            </ul>
                            <GoX className="menu-close-button" onClick={() => toggleMenu()} />
                        </nav>
                    ) : (
                        <VscMenu className="menu-button" onClick={() => toggleMenu()} />
                    )
                }
            </nav>
        </>
    )
}

export default Navbar