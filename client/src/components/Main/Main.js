import React from 'react'
import HeaderIndex from './header/HeaderIndex'
import { Outlet } from 'react-router-dom'
import FooterIndex from './footer/FooterIndex'

import '../../css/font.css'
import NavBar from './header/NavBar'

const Main = (props) => {
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";

  }
  return (
    <div>

      <div id="mySidenav" className="sidenav">
        <a  className="closebtn" onClick={closeNav}>&times;</a>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/products">Products</a>
        <a href="#">Contact</a>
        <div className="offcanvas-footer d-lg-none">
            <div>
              <a href="mailto:first.last@email.com" className="link-inverse">info@email.com</a>
              <br/> 00 (123) 456 78 90 <br/>
              <nav className="nav social social-white mt-4">
                <a href="https://sandbox.elemisthemes.com/blog-post2.html#"><i className="uil uil-twitter"></i></a>
                <a href="https://sandbox.elemisthemes.com/blog-post2.html#"><i className="uil uil-facebook-f"></i></a>
                <a href="https://sandbox.elemisthemes.com/blog-post2.html#"><i className="uil uil-dribbble"></i></a>
                <a href="https://sandbox.elemisthemes.com/blog-post2.html#"><i className="uil uil-instagram"></i></a>
                <a href="https://sandbox.elemisthemes.com/blog-post2.html#"><i className="uil uil-youtube"></i></a>
              </nav>
              {/* <!-- /.social --> */}
            </div>
          </div>
      </div>


      <div id='main' >


        <HeaderIndex/>
        <Outlet />
        <FooterIndex />
      </div>

    </div>
  )
}

export default Main