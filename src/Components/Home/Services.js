import React from "react";
import img1 from '../../Assets/1.png'
import img2 from '../../Assets/images.jpeg'
import img3 from '../../Assets/3.png'
import { Link } from 'react-router-dom/umd/react-router-dom.development'


function Services() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="fs-1">Our Services</h2>
              <p className="mb-3">Unlock Limitless Learning: Explore Our Services</p>
            </div>
          </div>
          <div className="tab-content" id="course-pills-tabContent container">
            <div className="tab-pane fade show active container" id="course-pills-tabs-1" role="tabpanel" aria-labelledby="course-pills-tab-1">
              <div className="row g-3 ">
                <div className="col-sm-6 col-lg-4 col-xl-3 container">
                  <div className="card shadow h-100">
                    <img src={img1} className="card-img-top" alt="course image" />
                    <div className="card-body pb-0">
                      <div className="d-flex justify-content-between mb-2">
                        <a href="#" className="badge bg-purple bg-opacity-10 text-purple">All level</a>
                        <a href="#" className="h6 mb-0"><i className="far fa-heart" /></a>
                      </div>
                      <h5 className="card-title fw-normal"><Link to='/text-to-sign' className='nav-link'>Text to sign</Link></h5>
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                        <li className="list-inline-item ms-2 h6 fw-light mb-0">4.0/5.0</li>
                      </ul>
                    </div>
                    <div className="card-footer pt-0 pb-3">
                      <hr />
                      <div className="d-flex justify-content-between">
                        <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2" />Unlimited</span>
                        <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2" />Trial</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 container">
                  <div className="card shadow h-100">
                    <img src={img2} className="card-img-top" alt="course image" />
                    <div className="card-body pb-0">
                      <div className="d-flex justify-content-between mb-2">
                        <a href="#" className="badge bg-success bg-opacity-10 text-success">Beginner</a>
                        <a href="#" className="text-danger"><i className="fas fa-heart" /></a>
                      </div>
                      <h5 className="card-title fw-normal"><Link to='/sign-to-text' className='nav-link'>Sign to text</Link></h5>
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning" /></li>
                        <li className="list-inline-item ms-2 h6 fw-light mb-0">4.5/5.0</li>
                      </ul>
                    </div>
                    <div className="card-footer pt-0 pb-3">
                      <hr />
                      <div className="d-flex justify-content-between ">
                        <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2" />Limited Access</span>
                        <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2" />Trial</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 container">
                  <div className="card shadow h-100">
                    <img src={img3} className="card-img-top" alt="course image" />
                    <div className="card-body pb-0">
                      <div className="d-flex justify-content-between mb-2">
                        <a href="#" className="badge bg-success bg-opacity-10 text-success">Beginner</a>
                        <a href="#" className="h6 fw-light mb-0"><i className="far fa-heart" /></a>
                      </div>
                      <h5 className="card-title fw-normal"><a href="/learn-sign">Learn Sign</a></h5>
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning" /></li>
                        <li className="list-inline-item ms-2 h6 fw-light mb-0">4.5/5.0</li>
                      </ul>
                    </div>
                    <div className="card-footer pt-0 pb-3">
                      <hr />
                      <div className="d-flex justify-content-between">
                        <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2" />Unlimited</span>
                        <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2" />Premium</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div></div>
      </section>
      <div className="back-top"><i className="bi bi-arrow-up-short position-absolute top-50 start-50 translate-middle" /></div>
    </div>
  );
}
export default Services;
