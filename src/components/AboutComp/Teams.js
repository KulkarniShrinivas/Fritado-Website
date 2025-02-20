import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const TeamAreaOne = () => {
  return (
    <>
      {/*====================== team area start ======================*/}
      <div className='team-area bg-relative pd-top-90 pd-bottom-90'>
        <div className='container'>
          <div className='section-title text-center'>
            <h6 className='sub-title'>MEET OUR EXPERTS</h6>
            <h2 className='title'>
              Your Partner In <span>Digital</span> Success
            </h2>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-team-inner text-center'>
                <div className='thumb'>
                  <img src='assets/img/team/1.png' alt='img' />
                  <ul className='team-social-inner'>
                    <li>
                      <a href='#'>
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='details'>
                  <h5>
                  <Link to='/team-details'>Punit Kumar</Link>
                  </h5>
                  <p>Technology Experts</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-team-inner text-center'>
                <div className='thumb'>
                  <img src='assets/img/team/2.png' alt='img' />
                  <ul className='team-social-inner'>
                    <li>
                      <a href='#'>
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='details'>
                  <h5>
                  <Link to='/team-details'>Chandramohan Sharma</Link>
                  </h5>
                  <p>Product Strategist</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-team-inner text-center'>
                <div className='thumb'>
                  <img src='assets/img/team/3.png' alt='img' />
                  <ul className='team-social-inner'>
                    <li>
                      <a href='#'>
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='details'>
                  <h5>
                  <Link to='/team-details'>Anil Sudhanshu</Link>
                  </h5>
                  <p>Marketing Strategist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ====================== team area end ======================*/}
    </>
  );
};

export default TeamAreaOne;
