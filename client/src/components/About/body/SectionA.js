import React from 'react'

const SectionA = () => {
  return (
    <section className="wrapper bg-gray">
      <div className="container pt-10 pt-md-14 text-center">
        <div className="row">
          <div className="col-xl-6 mx-auto">
            <h1 className="display-1 mb-4">Hello! This is Sandbox</h1>
            <p className="lead fs-lg mb-0">A company turning ideas into beautiful things.</p>
          </div>
          {/* <!-- /column --> */}
        </div>
        {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.container --> */}
      <figure className="position-absoute" style={{bottom: "0",left: "0", zIndex: "2"}}><img src={require("../../../images/static/bg12.jpg")} alt=""/></figure>
    </section>
  )
}

export default SectionA