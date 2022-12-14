import React from 'react'
import { BsDribbble, BsFacebook, BsTwitter } from 'react-icons/bs'


const SectionE = () => {
  return (
    <section className="wrapper bg-gradient-primary">
      <div className="container py-14 pt-md-16 pb-md-18">
        <div className="position-relative mt-8 mt-lg-n23 mt-xl-n25">
          <div className="row text-center">
            <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto">
              <h2 className="fs-16 text-uppercase text-muted mb-3">Our Team</h2>
              <h3 className="display-4 mb-10 px-md-13 px-lg-4 px-xl-0">
                Think unique and be innovative. Make a difference with
                Sandbox.
              </h3>
            </div>
            {/* <!-- /column --> */}
          </div>
          {/* <!-- /.row --> */}
          <div className="position-relative">
            <div
              className="shape bg-dot blue rellax w-16 h-17"
              data-rellax-speed="1"
              style={{ bottom: "0.5rem2", right: "-1.7rem", zIndex: "0", transform: "translate3d(0px, 422px, 0px)" }}
            ></div>
            <div
              className="shape rounded-circle bg-line red rellax w-16 h-16"
              data-rellax-speed="1"
              style={{ top: "0.5rem", left: "-1.7rem", zIndex: "0", transform: "translate3d(0px, 406px, 0px)" }}
            ></div>
            <div className="row grid-view gy-6 gy-xl-0">
              <div className="col-md-6 col-xl-3">
                <div className="card shadow-lg">
                  <div className="card-body">
                    <img
                      className="rounded-circle w-15 mb-4"
                      src={require("../../../images/static/te1.jpg")}
                      srcSet="./assets/img/avatars/te1@2x.jpg 2x"
                      alt=""
                    />
                    <h4 className="mb-1">Coriss Ambady</h4>
                    <div className="meta mb-2">Financial Analyst</div>
                    <p className="mb-2">
                      Fermentum massa justo sit amet risus morbi leo.
                    </p>
                    <nav className="nav social mb-0">
                      <a href='http://twitter.com'
                      ><i className="uil "> <BsTwitter /> </i></a>
                      <a href='http://facebook.com'
                      ><i className="uil "><BsFacebook /></i
                      ></a>
                      <a href='http://dribble.com'
                      ><i className="uil "><BsDribbble /></i
                      ></a>
                    </nav>
                    {/* <!-- /.social --> */}
                  </div>
                  {/* <!--/.card-body --> */}
                </div>
                {/* <!-- /.card --> */}
              </div>
              {/* <!--/column --> */}
              <div className="col-md-6 col-xl-3">
                <div className="card shadow-lg">
                  <div className="card-body">
                    <img
                      className="rounded-circle w-15 mb-4"
                      src={require("../../../images/static/te2.jpg")}
                      srcSet="./assets/img/avatars/te2@2x.jpg 2x"
                      alt=""
                    />
                    <h4 className="mb-1">Cory Zamora</h4>
                    <div className="meta mb-2">Marketing Specialist</div>
                    <p className="mb-2">
                      Fermentum massa justo sit amet risus morbi leo.
                    </p>
                    <nav className="nav social mb-0">
                      <a href='http://twitter.com'
                      ><i className="uil "> <BsTwitter /> </i></a>
                      <a href='http://facebook.com'
                      ><i className="uil "><BsFacebook /></i
                      ></a>
                      <a href='http://dribble.com'
                      ><i className="uil "><BsDribbble /></i
                      ></a>
                    </nav>
                    {/* <!-- /.social --> */}
                  </div>
                  {/* <!--/.card-body --> */}
                </div>
                {/* <!-- /.card --> */}
              </div>
              {/* <!--/column --> */}
              <div className="col-md-6 col-xl-3">
                <div className="card shadow-lg">
                  <div className="card-body">
                    <img
                      className="rounded-circle w-15 mb-4"
                      src={require("../../../images/static/te3.jpg")}
                      srcSet="./assets/img/avatars/te3@2x.jpg 2x"
                      alt=""
                    />
                    <h4 className="mb-1">Nikolas Brooten</h4>
                    <div className="meta mb-2">Sales Manager</div>
                    <p className="mb-2">
                      Fermentum massa justo sit amet risus morbi leo.
                    </p>
                    <nav className="nav social mb-0">
                      <a href='http://twitter.com'
                      ><i className="uil "> <BsTwitter /> </i></a>
                      <a href='http://facebook.com'
                      ><i className="uil "><BsFacebook /></i
                      ></a>
                      <a href='http://dribble.com'
                      ><i className="uil "><BsDribbble /></i
                      ></a>
                    </nav>
                    {/* <!-- /.social --> */}
                  </div>
                  {/* <!--/.card-body --> */}
                </div>
                {/* <!-- /.card --> */}
              </div>
              {/* <!--/column --> */}
              <div className="col-md-6 col-xl-3">
                <div className="card shadow-lg">
                  <div className="card-body">
                    <img
                      className="rounded-circle w-15 mb-4"
                      src={require("../../../images/static/te4.jpg")}
                      srcSet="./assets/img/avatars/te4@2x.jpg 2x"
                      alt=""
                    />
                    <h4 className="mb-1">Jackie Sanders</h4>
                    <div className="meta mb-2">Investment Planner</div>
                    <p className="mb-2">
                      Fermentum massa justo sit amet risus morbi leo.
                    </p>
                    <nav className="nav social mb-0">
                      <a href='http://twitter.com'
                      ><i className="uil "> <BsTwitter /> </i></a>
                      <a href='http://facebook.com'
                      ><i className="uil "><BsFacebook /></i
                      ></a>
                      <a href='http://dribble.com'
                      ><i className="uil "><BsDribbble /></i
                      ></a>
                    </nav>
                    {/* <!-- /.social --> */}
                  </div>
                  {/* <!--/.card-body --> */}
                </div>
                {/* <!-- /.card --> */}
              </div>
              {/* <!--/column --> */}
            </div>
            {/* <!--/.row --> */}
          </div>
          {/* <!-- /.position-relative --> */}
        </div>
        {/* <!-- /div --> */}
      </div>
      {/* <!-- /.container --> */}
    </section>
  )
}

export default SectionE