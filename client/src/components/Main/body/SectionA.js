import React from 'react'


const SectionA = () => {
  return (
    <section className="wrapper bg-gradient-primary">
      <div className="container pt-10 pt-md-14 pb-8 text-center">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-lg-7">
            <figure>
              <img
                className="w-auto"
                src={require("../../../images/static/i2.png")}
                alt=""
              />
            </figure>
          </div>
          {/* <!-- /column --> */}
          <div
            className="col-md-10 offset-md-1 offset-lg-0 col-lg-5 text-center text-lg-start"
          >
            <h1 className="display-1 mb-5 mx-md-n5 mx-lg-0">
              Grow Your Business with Our Solutions.
            </h1>
            <p className="lead fs-lg mb-7">
              We help our clients to increase their website traffic, rankings
              and visibility in search results.
            </p>
            <span
            ><a href='/null' className="btn btn-primary rounded-pill me-2"
            >Try It For Free</a
              ></span>
          </div>
          {/* <!-- /column --> */}
        </div>
        {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.container --> */}
    </section>
  )
}

export default SectionA