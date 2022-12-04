import React from 'react'

const SectionC = () => {
  return (
    <section className="wrapper bg-soft-primary">
      <div className="container pt-16 pb-14 pb-md-0">
        <div className="row gx-lg-8 gx-xl-0 align-items-center">
          <div className="col-md-5 col-lg-5 col-xl-4 offset-xl-1 d-none d-md-flex position-relative align-self-end">
            <div className="shape rounded-circle bg-pale-primary rellax w-21 h-21 d-md-none d-lg-block" data-rellax-speed="1" style={{top: "7rem", left: "21rem", transform: "translate3d(0px, -68px, 0px)"}}></div>
            <figure><img src={require("../../../images/static/co1.png")} srcSet="./assets/img/photos/co1@2x.png 2x" alt=""/></figure>
          </div>
          {/* <!--/column --> */}
          <div className="col-md-7 col-lg-6 col-xl-6 col-xxl-5 offset-xl-1">
            <div className="swiper-container dots-start dots-closer mt-md-10 mb-md-15 swiper-container-0" data-margin="30" data-dots="true">
              <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                <div className="swiper-wrapper" id="swiper-wrapper-ee10f6a89bccf7923" aria-live="off" style={{cursor: "grab", transform: "translate3d(0px, 0px, 0px)"}}>
                  <div className="swiper-slide swiper-slide-active" role="group" aria-label="1 / 3" style={{width: "538px", marginRight: "30px"}}>
                    <blockquote className="icon fs-lg">
                      <p>“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio consectetur nulla dapibus curabitur blandit.”</p>
                      <div className="blockquote-details">
                        <div className="info ps-0">
                          <h5 className="mb-1">Coriss Ambady</h5>
                          <p className="mb-0">Financial Analyst</p>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                  {/* <!--/.swiper-slide --> */}
                  <div className="swiper-slide swiper-slide-next" role="group" aria-label="2 / 3" style={{width: "538px", marginRight: "230px"}}>
                    <blockquote className="icon fs-lg">
                      <p>“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio consectetur adipiscing dapibus curabitur blandit.”</p>
                      <div className="blockquote-details">
                        <div className="info ps-0">
                          <h5 className="mb-1">Cory Zamora</h5>
                          <p className="mb-0">Marketing Specialist</p>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                  {/* <!--/.swiper-slide --> */}
                  <div className="swiper-slide" role="group" aria-label="3 / 3" style={{width: "538px", marginRight: "30px"}}>
                    <blockquote className="icon fs-lg">
                      <p>“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum ligula porta felis euismod semper. Cras justo odio consectetur adipiscing dapibus curabitur blandit.”</p>
                      <div className="blockquote-details">
                        <div className="info ps-0">
                          <h5 className="mb-1">Nikolas Brooten</h5>
                          <p className="mb-0">Sales Manager</p>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                  {/* <!--/.swiper-slide --> */}
                </div>
                {/* <!--/.swiper-wrapper --> */}
              <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
              {/* <!-- /.swiper --> */}
            <div className="swiper-controls"><div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex="0" role="button" aria-label="Go to slide 1" aria-current="true"></span><span className="swiper-pagination-bullet" tabIndex="0" role="button" aria-label="Go to slide 2"></span><span className="swiper-pagination-bullet" tabIndex="0" role="button" aria-label="Go to slide 3"></span></div></div></div>
            {/* <!-- /.swiper-container --> */}
          </div>
          {/* <!--/column --> */}
        </div>
        {/* <!--/.row --> */}
      </div>
      {/* <!-- /.container --> */}
    </section>
  )
}

export default SectionC