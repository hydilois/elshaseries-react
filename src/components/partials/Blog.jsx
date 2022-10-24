import React from 'react'

function Blog() {
  return (
    <>
    <section className="blog" id="blog">
            <div className="container">
                <div className="main-title">
                    <h2>My Blog</h2>
                    <span>07.</span>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="post wow fadeInLeft" data-wow-duration="1.7s">
                            <div className="post-img">
                                <img src="./assets/images/blog/1.jpg" className="img-responsive" alt=""/>
                            </div>
                            <div className="post-content">
                                <div className="post-title">
                                    <a href="#"><h4>Post Title Goes Here</h4></a>
                                </div>
                                <ul className="post-info list-unstyled">
                                    <li>
                                        <i className="fa fa-calendar"></i>
                                        <span>10 Jan 19</span>
                                    </li>
                                     <li>
                                        <i className="fa fa-commenting-o"></i>
                                        <a href="#"><span>2 Comment</span></a>
                                    </li>
                                </ul>
                                <div className="post-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut...</p>
                                </div>
                                <div className="post-footer">
                                    <a href="#" className="post-more">Read more <i className="fa fa-angle-double-right"></i></a>
                                    <div className="post-category">
                                        <a href="#">Design</a>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                    <div className="col-md-12">
                        <div className="post wow fadeInRight" data-wow-duration="1.7s">
                            <div className="post-img">
                                <img src="./assets/images/blog/2.jpg" className="img-responsive" alt=""/>
                            </div>
                            <div className="post-content">
                                <div className="post-title">
                                    <a href="#"><h4>Post Title Goes Here</h4></a>
                                </div>
                                <ul className="post-info list-unstyled">
                                    <li>
                                        <i className="fa fa-calendar"></i>
                                        <span>23 Jan 19</span>
                                    </li>
                                     <li>
                                        <i className="fa fa-commenting-o"></i>
                                        <a href="#"><span>4 Comment</span></a>
                                    </li>
                                </ul>
                                <div className="post-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut...</p>
                                </div>
                                <div className="post-footer">
                                    <a href="#" className="post-more">Read more <i className="fa fa-angle-double-right"></i></a>
                                    <div className="post-category">
                                        <a href="#">Logo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="post wow fadeInLeft" data-wow-duration="1.7s">
                            <div className="post-img">
                                <img src="./assets/images/blog/3.jpg" className="img-responsive" alt=""/>
                            </div>
                            <div className="post-content">
                                <div className="post-title">
                                    <a href="#"><h4>Post Title Goes Here</h4></a>
                                </div>
                                <ul className="post-info list-unstyled">
                                    <li>
                                        <i className="fa fa-calendar"></i>
                                        <span>28 Feb 19</span>
                                    </li>
                                     <li>
                                        <i className="fa fa-commenting-o"></i>
                                        <a href="#"><span>4 Comment</span></a>
                                    </li>
                                </ul>
                                <div className="post-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut...</p>
                                </div>
                                <div className="post-footer">
                                    <a href="#" className="post-more">Read more <i className="fa fa-angle-double-right"></i></a>
                                    <div className="post-category">
                                        <a href="#">Branding</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>         
                </div>
            </div>
        </section>
    </>
  )
}

export default Blog