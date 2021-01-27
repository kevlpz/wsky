import { VscMenu, VscTriangleDown } from "react-icons/vsc";

const Navbar = () => {
    return (
        <nav className="nav-container">
            <ul>
                <li>
                    Log in
                </li>
                <li>
                    Products<VscTriangleDown />
                </li>
            </ul>
            <VscMenu className="menu-button" />
        </nav>
    )
}

export default Navbar