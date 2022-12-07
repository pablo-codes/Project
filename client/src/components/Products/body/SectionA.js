import React from 'react'

const SectionA = (props) => {

  // const picget = require(`../../../images/${pic}`)
  //   console.log(pic)
  function change() {
    let pics = props.image[0]
    const pic = require(`../../../images/dynamic/${pics}`)
    document.getElementById('images').style.backgroundImage = `url(${pic})`
  }
  const getDate = new Date(props.date).toLocaleString()


  return (
    <section id="images" className="wrapper image-wrapper bg-image bg-overlay text-white" onMouseEnter={change}  >

      <div className="container pt-18 pb-15 pt-md-20 pb-md-19 text-center">
        <div className="row">
          <div className="col-md-10 col-xl-8 mx-auto">
            <div className="post-header">
              <div className="post-category text-line text-white">
                <a href="https://sandbox.elemisthemes.com/blog-post2.html#" className="text-reset" rel="category">Teamwork</a>
              </div>
              {/* <!-- /.post-category --> */}
              <h1 className="display-1 mb-4 text-white">{props.title}</h1>
              <ul className="post-meta text-white">
                <li className="post-date"><i className="uil uil-calendar-alt"></i><span>{getDate}</span></li>
                <li className="post-author"><i className="uil uil-user"></i><a href="https://sandbox.elemisthemes.com/blog-post2.html#" className="text-reset"><span>By {props.author} </span></a></li>
                <li className="post-comments"><i className="uil uil-comment"></i><a href="https://sandbox.elemisthemes.com/blog-post2.html#" className="text-reset">3<span> Comments</span></a></li>
                <li className="post-likes"><i className="uil uil-heart-alt"></i><a href="https://sandbox.elemisthemes.com/blog-post2.html#" className="text-reset">3<span> Likes</span></a></li>
              </ul>
              {/* <!-- /.post-meta --> */}
            </div>
            {/* <!-- /.post-header --> */}
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