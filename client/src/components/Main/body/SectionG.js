import React from 'react'
import { BsCheck } from 'react-icons/bs'


const SectionG = () => {
  return (
    <section className="wrapper bg-light angled upper-end lower-end">
      <div className="container py-14 pt-md-14 pb-md-18">
        <div className="row gy-6 mb-14 mb-md-18">
          <div className="col-lg-4">
            <h2 className="fs-16 text-uppercase text-muted mt-lg-18 mb-3">
              Our Pricing
            </h2>
            <h3 className="display-4 mb-3">We offer great and premium prices.</h3>
            <p>
              Enjoy a
              <button

                className="hover"
              >free 30-day trial</button
              >
              and experience the full service. No credit card required!
            </p>
            <button
              className="btn btn-primary rounded-pill mt-2"
            >See All Prices</button
            >
          </div>
          {/* <!--/column --> */}
          <div className="col-lg-7 offset-lg-1 pricing-wrapper">
            <div
              className="pricing-switcher-wrapper switcher justify-content-start justify-content-lg-end"
            >
              <p className="mb-0 pe-3">Monthly</p>
              <div className="pricing-switchers">
                <div className="pricing-switcher pricing-switcher-active"></div>
                <div className="pricing-switcher"></div>
                <div className="switcher-button bg-primary"></div>
              </div>
              <p className="mb-0 ps-3">
                Yearly <span className="text-red">(Save 30%)</span>
              </p>
            </div>
            <div className="row gy-6 position-relative mt-5">
              <div
                className="shape bg-dot red rellax w-16 h-18"
                data-rellax-speed="1"
                style={{ bottom: "-0.5rem", right: "-1.6rem", transform: "translate3d(0px, 673px, 0px)" }}
              ></div>
              <div className="col-md-6">
                <div className="pricing card shadow-lg">
                  <div className="card-body pb-12">
                    <div className="prices text-dark">
                      <div className="price price-show">
                        <span className="price-currency">$</span
                        ><span className="price-value">19</span>
                        <span className="price-duration">month</span>
                      </div>
                      <div className="price price-hide price-hidden">
                        <span className="price-currency">$</span
                        ><span className="price-value">199</span>
                        <span className="price-duration">year</span>
                      </div>
                    </div>
                    {/* <!--/.prices --> */}
                    <h4 className="card-title mt-2">Premium Plan</h4>
                    <ul className="icon-list bullet-soft-primary mt-8 mb-9">
                      <li>
                        <i className="uil  fs-21"> <BsCheck /></i
                        ><span><strong>5</strong> Projects </span>
                      </li>
                      <li>
                        <i className="uil  fs-21"> <BsCheck /></i
                        ><span><strong>100K</strong> API Access </span>
                      </li>
                      <li>
                        <i className="uil  fs-21"> <BsCheck /></i><span><strong>200MB</strong> Storage </span>
                      </li>
                      <li>
                        <i className="uil  fs-21"> <BsCheck /></i
                        ><span> Weekly <strong>Reports</strong></span>
                      </li>
                      <li>
                        <i className="uil  fs-21"> <BsCheck /></i
                        ><span> 7/24 <strong>Support</strong></span>
                      </li>
                    </ul>
                    <button

                      className="btn btn-primary rounded-pill"
                    >Choose Plan</button
                    >
                  </div>
                  {/* <!--/.card-body --> */}
                </div>
                {/* <!--/.pricing --> */}
              </div>
              {/* <!--/column -->  */}
              <div className="col-md-6 popular">
                <div className="pricing card shadow-lg">
                  <div className="card-body pb-12">
                    <div className="prices text-dark">
                      <div className="price price-show">
                        <span className="price-currency">$</span
                        ><span className="price-value">49</span>
                        <span className="price-duration">month</span>
                      </div>
                      <div className="price price-hide price-hidden">
                        <span className="price-currency">$</span
                        ><span className="price-value">499</span>
                        <span className="price-duration">year</span>
                      </div>
                    </div>
                    {/* <!--/.prices --> */}
                    <h4 className="card-title mt-2">Corporate Plan</h4>
                    <ul className="icon-list bullet-soft-primary mt-8 mb-9">
                      <li>
                        <i className="uil  fs-21"> <BsCheck /></i
                        ><span><strong>20</strong> Projects </span>
                      </li>
                      <li>
                        <i className="uil  fs-21"> <BsCheck /></i
                        ><span><strong>300K</strong> API Access </span>
                      </li>
                      <li>
                        <i className="uil  fs-21"> <BsCheck /></i
                        ><span><strong>500MB</strong> Storage </span>
                      </li>
                      <li>
                        <i className="uil  fs-21"> <BsCheck /></i
                        ><span> Weekly <strong>Reports</strong></span>
                      </li>
                      <li>
                        <i className="uil  fs-21"> <BsCheck /></i
                        ><span> 7/24 <strong>Support</strong></span>
                      </li>
                    </ul>
                    <button

                      className="btn btn-primary rounded-pill"
                    >Choose Plan</button>

                  </div>
                  {/* <!--/.card-body --> */}
                </div>
                {/* <!--/.pricing --> */}
              </div>
              {/* <!--/column --> */}
            </div>
            {/* <!--/.row --> */}
          </div>
          {/* <!--/column --> */}
        </div>
        {/* <!--/.row --> */}
        <div
          className="row gx-lg-8 gx-xl-12 gy-10 mb-10 mb-md-14 align-items-center"
        >
          <div className="col-lg-7">
            <figure>
              <img
                className="w-auto"
                // src= {require("../../../images/static/i5.png")}
                alt=""
              />
            </figure>
          </div>
          {/* <!--/column --> */}

          {/* <!--/column --> */}
        </div>
        {/* <!--/.row --> */}


        {/* <!-- /div --> */}
      </div>
      {/* <!-- /.container --> */}
    </section>
  )
}

export default SectionG