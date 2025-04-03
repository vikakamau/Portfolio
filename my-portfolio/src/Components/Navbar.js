import React, { useState,useRef  } from 'react';
import './Navbar.css';
import underline from '../../src/images/underline.jpg';
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from '../../src/images/menu_open.jpg';
import menu_close from '../../src/images/menu_close.gif';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const menuRef = useRef();

    const openMenu = () =>{
        menuRef.current.style.right="0";
}
const closeMenu = () =>{
    menuRef.current.style.right="-350px";
}

    return (
        <div className='navbar'>
            <h1 className="nav-logo">Victor<span style={{ color: '#ff0080' }}>K</span></h1>
            <img src={menu_open} onClick={openMenu} alt='' className="nav-mob-open" />
            <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} onClick={closeMenu} alt='' className='nav-mob-close' />
                <li><AnchorLink className="anchor-link" offset={50} href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <img src={underline} alt='' /> : <></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href='#about'><p onClick={() => setMenu("about")}>About Me</p></AnchorLink>{menu === "about" ? <img src={underline} alt='' /> : <></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href='#services'><p onClick={() => setMenu("services")}>Services</p></AnchorLink>{menu === "services" ? <img src={underline} alt='' /> : <></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href='#work'><p onClick={() => setMenu("work")}>Portfolio</p></AnchorLink>{menu === "work" ? <img src={underline} alt='' /> : <></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <img src={underline} alt='' /> : <></>}</li>
                </ul>
            <div className='nav-connect'><AnchorLink className="anchor-link" offset={50} href='#contact'>Connect with me</AnchorLink></div>
        </div>
    );
};

export default Navbar;
