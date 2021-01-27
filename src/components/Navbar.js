import { useState } from 'react'
import { VscMenu, VscTriangleDown } from 'react-icons/vsc'
import { GoX } from "react-icons/go"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <>
            <nav className="nav-container">
                <ul className="desktop-nav-items">
                    <li>
                        Log in
                    </li>
                    <li>
                        Products<VscTriangleDown />
                        <ul className="categories">
                            <li>All</li>true
                            <li>Scotch</li>
                            <li>Bourbon</li>
                            <li>Irish</li>
                            <li>Canadian</li>
                            <li>Other</li>
                        </ul>
                    </li>
                </ul>
                {
                    menuOpen ? (
                        <nav className="mobile-nav">
                            <ul className="mobile-nav-items">
                                <li>
                                    Log in
                                </li>
                                <li>
                                    Products<VscTriangleDown />
                                    <ul className="categories">
                                        <li>All</li>
                                        <li>Scotch</li>
                                        <li>Bourbon</li>
                                        <li>Irish</li>
                                        <li>Canadian</li>
                                        <li>Other</li>
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