import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Img1 from '../Assets/HomeAssets/Img1.png'

const BannerFive = () => {

  return (
    <>
      {/* ================== BannerFive Start ==================*/}
      <div
        className='banner-area bg-relative banner-area-2 pb-0 bg-cover'
        style={{ backgroundImage: 'url("./assets/img/banner-5/5.png")' }}
      >
        <div className='container pt-20'>
          <div className='row'>
            <div className='col-lg-6 pb-xl-5 align-self-center'>
              <div className='banner-inner pe-xl-4 pb-5'>
                <h6
                  className='bg-base-2 text-white subtitle'
                  data-aos='fade-right'
                  data-aos-delay='100'
                  data-aos-duration='1500'
                >
                  Unlocking Your Busineses's Potential
                </h6>
                <h2
                  className='title text-white'
                  data-aos='fade-right'
                  data-aos-delay='250'
                  data-aos-duration='1500'
                >
                  Empowering Your Business With Artificial Intelligence.
                </h2>
                <p
                  className='content pe-xl-4'
                  data-aos='fade-right'
                  data-aos-delay='350'
                  data-aos-duration='1500'
                >
                  Fritado AI optimizes SEO for enterprises, automating up to 90% of tasks using advanced AI and machine learning, resulting in increased website traffic and profitability.
                </p>
                <div>

                
                <Link
                  className='btn btn-border-base-2'
                  data-aos='fade-right'
                  data-aos-delay='450'
                  data-aos-duration='1500'
                  to='/about'
                >
                  Register now <FaPlus />
                </Link>
                
                  
                </div>
                
              </div>
            </div>
            <div className='col-lg-6 col-md-9 align-self-end'>
              <div className='banner-thumb-2 mt-4 mt-lg-0'>
                <div className='main-img-wrap'>
                  <img
                    className='banner-animate-img banner-animate-img-1 left_image_bounce'
                    src="assets/img/banner-5/4.png"
                    alt='img'
                  />
                  <img
                    className='banner-animate-img banner-animate-img-3 top_image_bounce'
                    src='assets/img/banner-5/3.png'
                    alt='img'
                  />
                  <div>
                    <img
                      className='main-img'
                      src={Img1}
                      alt='img'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================== BannerFive End ==================*/}
    </>
  );
};

export default BannerFive;
