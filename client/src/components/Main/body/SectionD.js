import React from 'react'


const SectionD = () => {
  return (
    <section className="wrapper bg-light angled upper-start lower-start">
      <div className="container py-14 pt-md-17 pb-md-15">
        <div
          className="row gx-md-8 gx-xl-12 gy-10 mb-14 mb-md-18 align-items-center"
        >
          <div className="col-lg-6 order-lg-2">
            <div className="card shadow-lg me-lg-6">
              <div className="card-body p-6">
                <div className="d-flex flex-row">
                  <div>
                    <span
                      className="icon btn btn-circle btn-lg btn-soft-primary disabled me-4"
                    ><span className="number">01</span></span
                    >
                  </div>
                  <div>
                    <h4 className="mb-1">Collect Ideas</h4>
                    <p className="mb-0">
                      Nulla vitae elit libero pharetra augue dapibus.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!--/.card-body --> */}
            </div>
            {/* <!--/.card --> */}
            <div className="card shadow-lg ms-lg-13 mt-6">
              <div className="card-body p-6">
                <div className="d-flex flex-row">
                  <div>
                    <span
                      className="icon btn btn-circle btn-lg btn-soft-primary disabled me-4"
                    ><span className="number">02</span></span
                    >
                  </div>
                  <div>
                    <h4 className="mb-1">Data Analysis</h4>
                    <p className="mb-0">
                      Vivamus sagittis lacus vel augue laoreet.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!--/.card-body --> */}
            </div>
            {/* <!--/.card --> */}
            <div className="card shadow-lg mx-lg-6 mt-6">
              <div className="card-body p-6">
                <div className="d-flex flex-row">
                  <div>
                    <span
                      className="icon btn btn-circle btn-lg btn-soft-primary disabled me-4"
                    ><span className="number">03</span></span
                    >
                  </div>
                  <div>
                    <h4 className="mb-1">Finalize Product</h4>
                    <p className="mb-0">
                      Cras mattis consectetur purus sit amet.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!--/.card-body --> */}
            </div>
            {/* <!--/.card --> */}
          </div>
          {/* <!--/column --> */}
          <div className="col-lg-6">
            <h2 className="fs-16 text-uppercase text-muted mb-3">Our Strategy</h2>
            <h3 className="display-4 mb-5">
              Here are 3 working steps to organize our business projects.
            </h3>
            <p>
              Aenean eu leo quam. Pellentesque ornare sem lacinia quam
              venenatis vestibulum. Etiam porta sem malesuada magna mollis
              euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
              Nullam quis risus eget urna mollis.
            </p>
            <p className="mb-6">
              Nullam id dolor id nibh ultricies vehicula ut id elit.
              Vestibulum id ligula porta felis euismod semper. Aenean lacinia
              bibendum nulla sed consectetur.
            </p>
            <a
              href="https://sandbox.elemisthemes.com/demo1.html"
              className="btn btn-primary rounded-pill mb-0"
            >Learn More</a
            >
          </div>
          {/* <!--/column --> */}
        </div>
        {/* <!--/.row --> */}
        <div
          className="row gx-lg-8 gx-xl-12 gy-10 mb-lg-22 mb-xl-24 align-items-center"
        >
          <div className="col-lg-7">
            <figure>
              <img
                className="w-auto"
                src={require("../../../images/static/i6.png")}
                alt=""
              />
            </figure>
          </div>
          {/* <!--/column --> */}
          <div className="col-lg-5">
            <h2 className="fs-16 text-uppercase text-muted mb-3">
              Why Choose Us?
            </h2>
            <h3 className="display-4 mb-7">
              We bring solutions to make life easier for our clients.
            </h3>
            <div className="accordion accordion-wrapper" id="accordionExample">
              <div className="card plain accordion-item">
                <div className="card-header" id="headingOne">
                  <button
                    className="accordion-button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Professional Design
                  </button>
                </div>
                {/* <!--/.card-header --> */}
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="card-body">
                    <p>
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet
                      risus. Cras mattis consectetur purus sit amet fermentum.
                      Praesent commodo cursus magna, vel.
                    </p>
                  </div>
                  {/* <!--/.card-body --> */}
                </div>
                {/* <!--/.accordion-collapse --> */}
              </div>
              {/* <!--/.accordion-item --> */}
              <div className="card plain accordion-item">
                <div className="card-header" id="headingTwo">
                  <button
                    className="collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Top-Notch Support
                  </button>
                </div>
                {/* <!--/.card-header --> */}
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="card-body">
                    <p>
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet
                      risus. Cras mattis consectetur purus sit amet fermentum.
                      Praesent commodo cursus magna, vel.
                    </p>
                  </div>
                  {/* <!--/.card-body --> */}
                </div>
                {/* <!--/.accordion-collapse --> */}
              </div>
              {/* <!--/.accordion-item --> */}
              <div className="card plain accordion-item">
                <div className="card-header" id="headingThree">
                  <button
                    className="collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Header and Slider Options
                  </button>
                </div>
                {/* <!--/.card-header --> */}
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="card-body">
                    <p>
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet
                      risus. Cras mattis consectetur purus sit amet fermentum.
                      Praesent commodo cursus magna, vel.
                    </p>
                  </div>
                  {/* <!--/.card-body --> */}
                </div>
                {/* <!--/.accordion-collapse --> */}
              </div>
              {/* <!--/.accordion-item --> */}
            </div>
            {/* <!--/.accordion --> */}
          </div>
          {/* <!--/column --> */}
        </div>
        {/* <!--/.row --> */}
      </div>
      {/* <!-- /.container --> */}
    </section>
  )
}

export default SectionD