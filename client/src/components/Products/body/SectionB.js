import React, { useState } from 'react'

const SectionB = (props) => {
  const [picture,setPicture ] =useState("")
  
  
  function change (){
    
    setPicture( require(`../../../images/${props.image[1]}`))
    
  }
  
  return (
    <section className="wrapper bg-light" onMouseEnter={change}  >
      <div className="container py-14 py-md-16">
        <div className="row gx-lg-8 gx-xl-12">
          <div className="col-lg-8">
            <div className="blog single">
              <div className="card">
                <figure className="card-img-top"><img id='images' src={picture} alt=""/></figure>
                <div className="card-body">
                  <div className="classic-view">
                    <article className="post">
                      <div className="post-content mb-5">
                        <h2 className="h1 mb-4">{props.title}</h2>
                        <p>{props.description}</p>
                        <div className="row g-6 mt-3 mb-10">
                          <div className="col-md-6">
                            <figure className="hover-scale rounded cursor-dark"><a href="https://sandbox.elemisthemes.com/assets/img/photos/b8-full.jpg" data-glightbox="title: Heading; description: Purus Vulputate Sem Tellus Quam" data-gallery="post"> <img  src={require("../../../images/static/b8.jpg")} alt=""/></a></figure>
                          </div>
                          {/* <!--/column --> */}
                          <div className="col-md-6">
                            <figure className="hover-scale rounded cursor-dark"><a href="https://sandbox.elemisthemes.com/assets/img/photos/b9-full.jpg" data-glightbox="" data-gallery="post"> <img src={require("../../../images/static/b9.jpg")} alt=""/></a></figure>
                          </div>
                          {/* <!--/column --> */}
                          <div className="col-md-6">
                            <figure className="hover-scale rounded cursor-dark"><a href="https://sandbox.elemisthemes.com/assets/img/photos/b10-full.jpg" data-glightbox="" data-gallery="post"> <img src={require("../../../images/static/b10.jpg")} alt=""/></a></figure>
                          </div>
                          {/* <!--/column --> */}
                          <div className="col-md-6">
                            <figure className="hover-scale rounded cursor-dark"><a href="https://sandbox.elemisthemes.com/assets/img/photos/b11-full.jpg" data-glightbox="" data-gallery="post"> <img src={require("../../../images/static/b11.jpg")} alt=""/></a></figure>
                          </div>
                          {/* <!--/column --> */}
                        </div>
                        {/* <!-- /.row --> */}
                        <p>{props.features}</p>
                        <blockquote className="fs-lg my-8">
                          <p>Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula lacinia odio sem nec elit purus.</p>
                          <footer className="blockquote-footer">Very important person</footer>
                        </blockquote>
                        <h3 className="h2 mb-4">Sit Vulputate Bibendum Purus</h3>
                        <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper.</p>
                        <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                      </div>
                      {/* <!-- /.post-content --> */}
                      <div className="post-footer d-md-flex flex-md-row justify-content-md-between align-items-center mt-8">
                        <div>
                          <ul className="list-unstyled tag-list mb-0">
                            <li><a href="#" className="btn btn-soft-ash btn-sm rounded-pill mb-0">Still Life</a></li>
                            <li><a href="#" className="btn btn-soft-ash btn-sm rounded-pill mb-0">Urban</a></li>
                            <li><a href="#" className="btn btn-soft-ash btn-sm rounded-pill mb-0">Nature</a></li>
                          </ul>
                        </div>
                        <div className="mb-0 mb-md-2">
                          <div className="dropdown share-dropdown btn-group">
                            <button className="btn btn-sm btn-red rounded-pill btn-icon btn-icon-start dropdown-toggle mb-0 me-0" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="uil uil-share-alt"></i> Share </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#"><i className="uil uil-twitter"></i>Twitter</a>
                              <a className="dropdown-item" href="#"><i className="uil uil-facebook-f"></i>Facebook</a>
                              <a className="dropdown-item" href="#"><i className="uil uil-linkedin"></i>Linkedin</a>
                            </div>
                            {/* <!--/.dropdown-menu --> */}
                          </div>
                          {/* <!--/.share-dropdown --> */}
                        </div>
                      </div>
                      {/* <!-- /.post-footer --> */}
                    </article>
                    {/* <!-- /.post --> */}
                  </div>
                  {/* <!-- /.classic-view --> */}
                  <hr/>
                  <div className="author-info d-md-flex align-items-center mb-3">
                    <div className="d-flex align-items-center">
                      <figure className="user-avatar"><img className="rounded-circle"  src={require("../../../images/static/u5.jpg")} alt=""/></figure>
                      <div>
                        <h6><a href="#" className="link-dark">Nikolas Brooten</a></h6>
                        <span className="post-meta fs-15">Sales Manager</span>
                      </div>
                    </div>
                    <div className="mt-3 mt-md-0 ms-auto">
                      <a href="#" className="btn btn-sm btn-soft-ash rounded-pill btn-icon btn-icon-start mb-0"><i className="uil uil-file-alt"></i> All Posts</a>
                    </div>
                  </div>
                  {/* <!-- /.author-info --> */}
                  <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac. Maecenas faucibus mollis interdum.</p>
                  <nav className="nav social">
                    <a href="#"><i className="uil uil-twitter"></i></a>
                    <a href="#"><i className="uil uil-facebook-f"></i></a>
                    <a href="#"><i className="uil uil-dribbble"></i></a>
                    <a href="#"><i className="uil uil-instagram"></i></a>
                    <a href="#"><i className="uil uil-youtube"></i></a>
                  </nav>
                  {/* <!-- /.social --> */}
                  <hr/>
                  <h3 className="mb-6">You Might Also Like</h3>
                  <div className="swiper-container blog grid-view mb-16 swiper-container-0" data-margin="30" data-dots="true" data-items-md="2" data-items-xs="1">
                    <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                      <div className="swiper-wrapper" id="swiper-wrapper-46cb5266cb17a4f3" aria-live="off" style={{cursor: "grab", transform: "translate3d(0px, 0px, 0px)"}}>
                        <div className="swiper-slide swiper-slide-active" role="group" aria-label="1 / 4" style={{width: "343.5px", marginright: "30px"}}>
                          <article>
                            <figure className="overlay overlay-1 hover-scale rounded mb-5"><a href="#"> <img src={require("../../../images/static/b4.jpg")} alt=""/><span className="bg"></span></a>
                              <figcaption>
                                <h5 className="from-top mb-0">Read More</h5>
                              </figcaption>
                            </figure>
                            <div className="post-header">
                              <div className="post-category text-line">
                                <a href="#" className="hover" rel="category">Coding</a>
                              </div>
                              {/* <!-- /.post-category --> */}
                              <h2 className="post-title h3 mt-1 mb-3"><a className="link-dark" href="https://sandbox.elemisthemes.com/blog-post.html">Ligula tristique quis risus</a></h2>
                            </div>
                            {/* <!-- /.post-header --> */}
                            <div className="post-footer">
                              <ul className="post-meta mb-0">
                                <li className="post-date"><i className="uil uil-calendar-alt"></i><span>14 Apr 2022</span></li>
                                <li className="post-comments"><a href="#"><i className="uil uil-comment"></i>4</a></li>
                              </ul>
                              {/* <!-- /.post-meta --> */}
                            </div>
                            {/* <!-- /.post-footer --> */}
                          </article>
                          {/* <!-- /article --> */}
                        </div>
                        {/* <!--/.swiper-slide --> */}
                        <div className="swiper-slide swiper-slide-next" role="group" aria-label="2 / 4" style={{width: "343.5px", marginRight: "30px"}}>
                          <article>
                            <figure className="overlay overlay-1 hover-scale rounded mb-5"><a href="#"> <img src={require("../../../images/static/b5.jpg")} alt=""/><span className="bg"></span></a>
                              <figcaption>
                                <h5 className="from-top mb-0">Read More</h5>
                              </figcaption>
                            </figure>
                            <div className="post-header">
                              <div className="post-category text-line">
                                <a href="#" className="hover" rel="category">Workspace</a>
                              </div>
                              {/* <!-- /.post-category --> */}
                              <h2 className="post-title h3 mt-1 mb-3"><a className="link-dark" href="https://sandbox.elemisthemes.com/blog-post.html">Nullam id dolor elit id nibh</a></h2>
                            </div>
                            {/* <!-- /.post-header --> */}
                            <div className="post-footer">
                              <ul className="post-meta mb-0">
                                <li className="post-date"><i className="uil uil-calendar-alt"></i><span>29 Mar 2022</span></li>
                                <li className="post-comments"><a href="#"><i className="uil uil-comment"></i>3</a></li>
                              </ul>
                              {/* <!-- /.post-meta --> */}
                            </div>
                            {/* <!-- /.post-footer --> */}
                          </article>
                          {/* <!-- /article --> */}
                        </div>
                        {/* <!--/.swiper-slide --> */}
                        <div className="swiper-slide" role="group" aria-label="3 / 4" style={{width: "343.5px", marginRight: "30px"}}>
                          <article>
                            <figure className="overlay overlay-1 hover-scale rounded mb-5"><a href="#"> <img src={require("../../../images/static/b6.jpg")} alt=""/><span className="bg"></span></a>
                              <figcaption>
                                <h5 className="from-top mb-0">Read More</h5>
                              </figcaption>
                            </figure>
                            <div className="post-header">
                              <div className="post-category text-line">
                                <a href="#" className="hover" rel="category">Meeting</a>
                              </div>
                              {/* <!-- /.post-category --> */}
                              <h2 className="post-title h3 mt-1 mb-3"><a className="link-dark" href="https://sandbox.elemisthemes.com/blog-post.html">Ultricies fusce porta elit</a></h2>
                            </div>
                            {/* <!-- /.post-header --> */}
                            <div className="post-footer">
                              <ul className="post-meta mb-0">
                                <li className="post-date"><i className="uil uil-calendar-alt"></i><span>26 Feb 2022</span></li>
                                <li className="post-comments"><a href="#"><i className="uil uil-comment"></i>6</a></li>
                              </ul>
                              {/* <!-- /.post-meta --> */}
                            </div>
                            {/* <!-- /.post-footer --> */}
                          </article>
                          {/* <!-- /article --> */}
                        </div>
                        {/* <!--/.swiper-slide --> */}
                        <div className="swiper-slide" role="group" aria-label="4 / 4" style={{width: "343.5px", marginRight: "30px"}}>
                          <article>
                            <figure className="overlay overlay-1 hover-scale rounded mb-5"><a href="#"> <img src={require("../../../images/static/b7.jpg")} alt=""/><span className="bg"></span></a>
                              <figcaption>
                                <h5 className="from-top mb-0">Read More</h5>
                              </figcaption>
                            </figure>
                            <div className="post-header">
                              <div className="post-category text-line">
                                <a href="#" className="hover" rel="category">Business Tips</a>
                              </div>
                              {/* <!-- /.post-category --> */}
                              <h2 className="post-title h3 mt-1 mb-3"><a className="link-dark" href="https://sandbox.elemisthemes.com/blog-post.html">Morbi leo risus porta eget</a></h2>
                            </div>
                            <div className="post-footer">
                              <ul className="post-meta mb-0">
                                <li className="post-date"><i className="uil uil-calendar-alt"></i><span>7 Jan 2022</span></li>
                                <li className="post-comments"><a href="#"><i className="uil uil-comment"></i>2</a></li>
                              </ul>
                              {/* <!-- /.post-meta --> */}
                            </div>
                            {/* <!-- /.post-footer --> */}
                          </article>
                          {/* <!-- /article --> */}
                        </div>
                        {/* <!--/.swiper-slide --> */}
                      </div>
                      {/* <!--/.swiper-wrapper --> */}
                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                    {/* <!-- /.swiper --> */}
                  <div className="swiper-controls"><div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex="0" role="button" aria-label="Go to slide 1" aria-current="true"></span><span className="swiper-pagination-bullet" tabIndex="0" role="button" aria-label="Go to slide 2"></span><span className="swiper-pagination-bullet" tabIndex="0" role="button" aria-label="Go to slide 3"></span></div></div></div>
                  {/* <!-- /.swiper-container --> */}
                  <hr/>
                  <div id="comments">
                    <h3 className="mb-6">5 Comments</h3>
                    <ol id="singlecomments" className="commentlist">
                      <li className="comment">
                        <div className="comment-header d-md-flex align-items-center">
                          <div className="d-flex align-items-center">
                            <figure className="user-avatar"><img className="rounded-circle"  src={require("../../../images/static/u1.jpg")} alt=""/></figure>
                            <div>
                              <h6 className="comment-author"><a href="#" className="link-dark">Connor Gibson</a></h6>
                              <ul className="post-meta">
                                <li><i className="uil uil-calendar-alt"></i>14 Jan 2022</li>
                              </ul>
                              {/* <!-- /.post-meta --> */}
                            </div>
                            {/* <!-- /div --> */}
                          </div>
                          {/* <!-- /div --> */}
                          <div className="mt-3 mt-md-0 ms-auto">
                            <a href="#" className="btn btn-soft-ash btn-sm rounded-pill btn-icon btn-icon-start mb-0"><i className="uil uil-comments"></i> Reply</a>
                          </div>
                          {/* <!-- /div --> */}
                        </div>
                        {/* <!-- /.comment-header --> */}
                        <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis integer posuere erat ante.</p>
                      </li>
                      <li className="comment">
                        <div className="comment-header d-md-flex align-items-center">
                          <div className="d-flex align-items-center">
                            <figure className="user-avatar"><img className="rounded-circle"  src={require("../../../images/static/u2.jpg")} alt=""/></figure>
                            <div>
                              <h6 className="comment-author"><a href="#" className="link-dark">Nikolas Brooten</a></h6>
                              <ul className="post-meta">
                                <li><i className="uil uil-calendar-alt"></i>21 Feb 2022</li>
                              </ul>
                              {/* <!-- /.post-meta --> */}
                            </div>
                            {/* <!-- /div --> */}
                          </div>
                          {/* <!-- /div --> */}
                          <div className="mt-3 mt-md-0 ms-auto">
                            <a href="#" className="btn btn-soft-ash btn-sm rounded-pill btn-icon btn-icon-start mb-0"><i className="uil uil-comments"></i> Reply</a>
                          </div>
                          {/* <!-- /div --> */}
                        </div>
                        {/* <!-- /.comment-header --> */}
                        <p>Quisque tristique tincidunt metus non aliquam. Quisque ac risus sit amet quam sollicitudin vestibulum vitae malesuada libero. Mauris magna elit, suscipit non ornare et, blandit a tellus. Pellentesque dignissim ornare faucibus mollis.</p>
                        <ul className="children">
                          <li className="comment">
                            <div className="comment-header d-md-flex align-items-center">
                              <div className="d-flex align-items-center">
                                <figure className="user-avatar"><img className="rounded-circle"  src={require("../../../images/static/u3.jpg")} alt=""/></figure>
                                <div>
                                  <h6 className="comment-author"><a href="#" className="link-dark">Pearce Frye</a></h6>
                                  <ul className="post-meta">
                                    <li><i className="uil uil-calendar-alt"></i>22 Feb 2022</li>
                                  </ul>
                                  {/* <!-- /.post-meta --> */}
                                </div>
                                {/* <!-- /div --> */}
                              </div>
                              {/* <!-- /div --> */}
                              <div className="mt-3 mt-md-0 ms-auto">
                                <a href="#" className="btn btn-soft-ash btn-sm rounded-pill btn-icon btn-icon-start mb-0"><i className="uil uil-comments"></i> Reply</a>
                              </div>
                              {/* <!-- /div --> */}
                            </div>
                            {/* <!-- /.comment-header --> */}
                            <p>Cras mattis consectetur purus sit amet fermentum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis.</p>
                            <ul className="children">
                              <li className="comment">
                                <div className="comment-header d-md-flex align-items-center">
                                  <div className="d-flex align-items-center">
                                    <figure className="user-avatar"><img className="rounded-circle"  src={require("../../../images/static/u2.jpg")}alt=""/></figure>
                                    <div>
                                      <h6 className="comment-author"><a href="#" className="link-dark">Nikolas Brooten</a></h6>
                                      <ul className="post-meta">
                                        <li><i className="uil uil-calendar-alt"></i>4 Apr 2022</li>
                                      </ul>
                                      {/* <!-- /.post-meta --> */}
                                    </div>
                                    {/* <!-- /div --> */}
                                  </div>
                                  {/* <!-- /div --> */}
                                  <div className="mt-3 mt-md-0 ms-auto">
                                    <a href="#" className="btn btn-soft-ash btn-sm rounded-pill btn-icon btn-icon-start mb-0"><i className="uil uil-comments"></i> Reply</a>
                                  </div>
                                  {/* <!-- /div --> */}
                                </div>
                                {/* <!-- /.comment-header --> */}
                                <p>Nullam id dolor id nibh ultricies vehicula ut id. Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia aenean bibendum nulla consectetur.</p>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="comment">
                        <div className="comment-header d-md-flex align-items-center">
                          <div className="d-flex align-items-center">
                            <figure className="user-avatar"><img className="rounded-circle"  src={require("../../../images/static/u4.jpg")}alt=""/></figure>
                            <div>
                              <h6 className="comment-author"><a href="#" className="link-dark">Lou Bloxham</a></h6>
                              <ul className="post-meta">
                                <li><i className="uil uil-calendar-alt"></i>3 May 2022</li>
                              </ul>
                              {/* <!-- /.post-meta --> */}
                            </div>
                            {/* <!-- /div --> */}
                          </div>
                          {/* <!-- /div --> */}
                          <div className="mt-3 mt-md-0 ms-auto">
                            <a href="#" className="btn btn-soft-ash btn-sm rounded-pill btn-icon btn-icon-start mb-0"><i className="uil uil-comments"></i> Reply</a>
                          </div>
                          {/* <!-- /div --> */}
                        </div>
                        {/* <!-- /.comment-header --> */}
                        <p>Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                      </li>
                    </ol>
                  </div>
                  {/* <!-- /#comments --> */}
                  <hr/>
                  <h3 className="mb-3">Would you like to share your thoughts?</h3>
                  <p className="mb-7">Your email address will not be published. Required fields are marked *</p>
                  <form className="comment-form">
                    <div className="form-floating mb-4">
                      <input type="text" className="form-control" placeholder="Name*" id="c-name"/>
                      <label htmlFor="c-name">Name *</label>
                    </div>
                    <div className="form-floating mb-4">
                      <input type="email" className="form-control" placeholder="Email*" id="c-email"/>
                      <label htmlFor="c-email">Email*</label>
                    </div>
                    <div className="form-floating mb-4">
                      <input type="text" className="form-control" placeholder="Website" id="c-web"/>
                      <label htmlFor="c-web">Website</label>
                    </div>
                    <div className="form-floating mb-4">
                      <textarea name="textarea" className="form-control" placeholder="Comment" style={{height: "200px"}}></textarea>
                      <label>un fuctional*</label>
                    </div>
                    <button type="submit" className="btn btn-primary rounded-pill mb-0">Submit</button>
                  </form>
                  {/* <!-- /.comment-form --> */}
                </div>
                {/* <!-- /.card-body --> */}
              </div>
              {/* <!-- /.card --> */}
            </div>
            {/* <!-- /.blog --> */}
          </div>
          {/* <!-- /column --> */}
          <aside className="col-lg-4 sidebar mt-11 mt-lg-6">
            <div className="widget">
              <form className="search-form">
                <div className="form-floating mb-0">
                  <input id="search-form" type="text" className="form-control" placeholder="Search"/>
                  <label htmlFor="search-form">Search</label>
                </div>
              </form>
              {/* <!-- /.search-form --> */}
            </div>
            {/* <!-- /.widget --> */}
            <div className="widget">
              <h4 className="widget-title mb-3">About Us</h4>
              <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.</p>
              <nav className="nav social">
                <a href="#"><i className="uil uil-twitter"></i></a>
                <a href="#"><i className="uil uil-facebook-f"></i></a>
                <a href="#"><i className="uil uil-dribbble"></i></a>
                <a href="#"><i className="uil uil-instagram"></i></a>
                <a href="#"><i className="uil uil-youtube"></i></a>
              </nav>
              {/* <!-- /.social --> */}
            </div>
            {/* <!-- /.widget --> */}
            <div className="widget">
              <h4 className="widget-title mb-3">Popular Posts</h4>
              <ul className="image-list">
                <li>
                  <figure className="rounded"><a href="https://sandbox.elemisthemes.com/blog-post.html"><img src={require("../../../images/static/a1.jpg")} alt=""/></a></figure>
                  <div className="post-content">
                    <h6 className="mb-2"> <a className="link-dark" href="https://sandbox.elemisthemes.com/blog-post.html">Magna Mollis Ultricies</a> </h6>
                    <ul className="post-meta">
                      <li className="post-date"><i className="uil uil-calendar-alt"></i><span>26 Mar 2022</span></li>
                      <li className="post-comments"><a href="#"><i className="uil uil-comment"></i>3</a></li>
                    </ul>
                    {/* <!-- /.post-meta --> */}
                  </div>
                </li>
                <li>
                  <figure className="rounded"> <a href="https://sandbox.elemisthemes.com/blog-post.html"><img src={require("../../../images/static/a2.jpg")} alt=""/></a></figure>
                  <div className="post-content">
                    <h6 className="mb-2"> <a className="link-dark" href="https://sandbox.elemisthemes.com/blog-post.html">Ornare Nullam Risus</a> </h6>
                    <ul className="post-meta">
                      <li className="post-date"><i className="uil uil-calendar-alt"></i><span>16 Feb 2022</span></li>
                      <li className="post-comments"><a href="#"><i className="uil uil-comment"></i>6</a></li>
                    </ul>
                    {/* <!-- /.post-meta --> */}
                  </div>
                </li>
                <li>
                  <figure className="rounded"><a href="https://sandbox.elemisthemes.com/blog-post.html"><img src={require("../../../images/static/a3.jpg")} alt=""/></a></figure>
                  <div className="post-content">
                    <h6 className="mb-2"> <a className="link-dark" href="https://sandbox.elemisthemes.com/blog-post.html">Euismod Nullam Fusce</a> </h6>
                    <ul className="post-meta">
                      <li className="post-date"><i className="uil uil-calendar-alt"></i><span>8 Jan 2022</span></li>
                      <li className="post-comments"><a href="#"><i className="uil uil-comment"></i>5</a></li>
                    </ul>
                    {/* <!-- /.post-meta --> */}
                  </div>
                </li>
              </ul>
              {/* <!-- /.image-list --> */}
            </div>
            {/* <!-- /.widget --> */}
            <div className="widget">
              <h4 className="widget-title mb-3">Categories</h4>
              <ul className="unordered-list bullet-primary text-reset">
                <li><a href="#">Teamwork (21)</a></li>
                <li><a href="#">Ideas (19)</a></li>
                <li><a href="#">Workspace (16)</a></li>
                <li><a href="#">Coding (7)</a></li>
                <li><a href="#">Meeting (12)</a></li>
                <li><a href="#">Business Tips (14)</a></li>
              </ul>
            </div>
            {/* <!-- /.widget --> */}
            <div className="widget">
              <h4 className="widget-title mb-3">Tags</h4>
              <ul className="list-unstyled tag-list">
                <li><a href="#" className="btn btn-soft-ash btn-sm rounded-pill">Still Life</a></li>
                <li><a href="#" className="btn btn-soft-ash btn-sm rounded-pill">Urban</a></li>
                <li><a href="#" className="btn btn-soft-ash btn-sm rounded-pill">Nature</a></li>
                <li><a href="#" className="btn btn-soft-ash btn-sm rounded-pill">Landscape</a></li>
                <li><a href="#" className="btn btn-soft-ash btn-sm rounded-pill">Macro</a></li>
                <li><a href="#" className="btn btn-soft-ash btn-sm rounded-pill">Fun</a></li>
                <li><a href="#" className="btn btn-soft-ash btn-sm rounded-pill">Workshop</a></li>
                <li><a href="#" className="btn btn-soft-ash btn-sm rounded-pill">Photography</a></li>
              </ul>
            </div>
            {/* <!-- /.widget --> */}
            <div className="widget">
              <h4 className="widget-title mb-3">Archive</h4>
              <ul className="unordered-list bullet-primary text-reset">
                <li><a href="#">February 2019</a></li>
                <li><a href="#">January 2019</a></li>
                <li><a href="#">December 2018</a></li>
                <li><a href="#">November 2018</a></li>
                <li><a href="#">October 2018</a></li>
              </ul>
            </div>
            {/* <!-- /.widget --> */}
          </aside>
          {/* <!-- /column .sidebar --> */}
        </div>
        {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.container --> */}
    </section>
  )
}

export default SectionB