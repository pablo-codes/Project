
import React from 'react'
import HeaderIndex from './header/HeaderIndex'
import { Outlet } from 'react-router-dom'
import FooterIndex from './footer/FooterIndex'
import { BsFacebook, BsDribbble, BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs'
import '../../css/font.css'

{/* eslint-disable jsx-a11y/anchor-is-valid */ }
const Main = (props) => {
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";

  }
  return (
    <div>

      <div id="mySidenav" className="sidenav">
        <a className="closebtn" onClick={closeNav}>&times;</a>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/products">Products</a>
        <a >Contact</a>
        <div className="offcanvas-footer d-lg-none">
          <div>
            <a href="mailto:francisokpani570@email.com" className="link-inverse">francisokpani570@email.com</a>
            <br /> +234 90 365 43366<br />
            <nav className="nav social social-white mt-4">
              <a ><i className="uil "><BsTwitter /></i></a>
              <a ><i className="uil "><BsFacebook /></i></a>
              <a ><i className="uil "><BsDribbble /></i></a>
              <a ><i className="uil "> <BsInstagram /></i></a>
              <a ><i className="uil "><BsYoutube /></i></a>
            </nav>
            {/* <!-- /.social --> */}
          </div>
        </div>
      </div>


      <div id='main' >


        <HeaderIndex />
        <Outlet />
        <FooterIndex />
      </div>

    </div>
  )
}

export default Main