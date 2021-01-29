import { useState } from 'react'
import { VscMenu, VscTriangleDown } from 'react-icons/vsc'
import { GoX } from "react-icons/go"
import { Link } from 'react-router-dom'

const Navbar = ({ user, logOut }) => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <>
            <nav className="nav-container">
                <ul className="desktop-nav-items">
                    <li className="nav-item">
                        {user ? (
                            <div onClick={logOut}>
                                Log out
                            </div>
                        ) : (
                            <Link to="/login">
                                Log in
                            </Link>
                        )}
                    </li>
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
                                <div>
                                    Log out
                                </div>
                            ) : (
                                <Link to="/login">
                                    Log in
                                </Link>
                            )}
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