/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import BrandSlider2 from "./../components/sliders/Brand2";
import CategoryTab2 from "../components/elements/CategoryTab2";
import CategorySlider4 from "../components/sliders/Category4";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="bg-homepage1" />
        <section className="section-box mb-70">
          <div className="banner-hero hero-1">
            <div className="banner-inner">
              <div className="row">
                <div className="col-xl-12 col-lg-12">
                  <div className="block-banner text-center pb-40 pt-40">
                    <h1 className="heading-banner wow animate__animated animate__fadeInUp">
                      Learn <span className="color-brand-2">Web3 </span>
                      Free
                      <br className="d-none d-lg-block" />
                      The Future of the Internet
                    </h1>
                    <p className="font-lg color-text-paragraph mt-20">
                    Get learning, Build dApps, Get Certified &amp; Get Hired
                    </p>
                    <div className="mt-30">
                      <a
                        href=""
                        target="_blank"
                        className="btn btn-default mr-15"
                      >
                        Start Learning for Free
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div
                  className="list-tags-banner list-tags-banner-2 mt-20 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".3s"
                >
                  <strong>Hot Learning Topics </strong>
                  <br></br>
                  <Link legacyBehavior href="#">
                    <a>zkProofs, </a>
                  </Link>
                  <Link legacyBehavior href="#">
                    <a>Web, </a>
                  </Link>
                  <Link legacyBehavior href="#">
                    <a>IOS, </a>
                  </Link>
                  <Link legacyBehavior href="#">
                    <a>Developer, </a>
                  </Link>
                  <Link legacyBehavior href="#">
                    <a>PHP, </a>
                  </Link>
                  <Link legacyBehavior href="#">
                    <a>Senior, </a>
                  </Link>
                  <Link legacyBehavior href="#">
                    <a>Engineer, </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box overflow-visible mt-100 mb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <div className="box-image-job">
                                    <img className="img-job-1" alt="jobBox" src="assets/imgs/page/homepage1/img-chart.png" />
                                    <img className="img-job-2" alt="jobBox" src="assets/imgs/page/homepage1/controlcard.png" />
                                    <figure className="wow animate__animated animate__fadeIn">
                                        <img alt="jobBox" src="assets/imgs/page/homepage1/img1.png" />
                                    </figure>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <div className="content-job-inner">
                                    <span className="color-text-mutted text-32">Millions Of Jobs. </span>
                                    <h2 className="text-52 wow animate__animated animate__fadeInUp">
                                        Find The One That’s <span className="color-brand-2">Right</span> For You
                                    </h2>
                                    <div className="mt-40 pr-50 text-md-lh28 wow animate__animated animate__fadeInUp">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide. The right job is out there.</div>
                                    <div className="mt-40">
                                        <div className="wow animate__animated animate__fadeInUp">
                                            <Link legacyBehavior href="/jobs-grid">
                                                <a className="btn btn-default">Search Jobs</a>
                                            </Link>

                                            <Link legacyBehavior href="/page-about">
                                                <a className="btn btn-link">Learn More</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        <section className="section-box mt-70 mb-40">
                        <div className="container">
                            <div className="text-start">
                                <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">How It Works</h2>
                                <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Just via some simple steps, you will find your ideal candidates you are looking for!</p>
                            </div>
                            <div className="mt-70">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="box-step step-1">
                                            <h1 className="number-element">1</h1>
                                            <h4 className="mb-20">
                                                Register an
                                                <br className="d-none d-lg-block" />
                                                account to start
                                            </h4>
                                            <p className="font-lg color-text-paragraph-2">
                                                Lorem ipsum dolor sit amet,
                                                <br className="d-none d-lg-block" />
                                                consectetur adipisicing elit, sed do{" "}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="box-step step-2">
                                            <h1 className="number-element">2</h1>
                                            <h4 className="mb-20">
                                                Explore over
                                                <br className="d-none d-lg-block" />
                                                thousands of resumes
                                            </h4>
                                            <p className="font-lg color-text-paragraph-2">
                                                Lorem ipsum dolor sit amet,
                                                <br className="d-none d-lg-block" />
                                                consectetur adipisicing elit, sed do{" "}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="box-step">
                                            <h1 className="number-element">3</h1>
                                            <h4 className="mb-20">
                                                Find the most
                                                <br className="d-none d-lg-block" />
                                                suitable candidate
                                            </h4>
                                            <p className="font-lg color-text-paragraph-2">
                                                Lorem ipsum dolor sit amet,
                                                <br className="d-none d-lg-block" />
                                                consectetur adipisicing elit, sed do{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-50 text-center">
                                <a className="btn btn-default">Get Started</a>
                            </div>
                        </div>
                    </section>
 

                    <section className="section-box mt-50 mb-30 bg-brand-2 pt-60 pb-60">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-5">
                                    <div className="pt-70">
                                        <h2 className="color-black mb-20">Explore the Marketplace</h2>
                                        <p className="color-black mb-30">Search and connect with the right candidates faster. Tell us what you are looking for and we will get to work for you.</p>
                                        <div className="mt-20">
                                            <a className="btn btn-brand-1 btn-icon-more hover-up">Explore</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-7">
                                    <div className="box-swiper mt-50 layout-brand-1">
                                        <CategorySlider4 />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
        <div className="section-box mb-30">
          <div className="container">
            <div className="box-we-hiring">
              <div className="text-1">
                <span className="text-we-are">Looking for</span>
                <span className="text-hiring">Blockchain Training</span>
              </div>
              <div className="text-2">
                Let’s <span className="color-brand-1">Work</span> Together
                <br /> &amp; <span className="color-brand-1">Get it</span> Done
              </div>
              <div className="text-3">
                <a
                  href="https://calendar.app.google/j7DaYh4dnvSBdsVp8"
                  target="_blank"
                  className="btn btn-default"
                >
                  Let's Connect
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <section className="section-box mt-30">
                        <div className="container">
                            <div className="text-start">
                                <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Sharing Knowledge with Masterclasses.</h2>
                                <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Explore and choose right one.</p>
                            </div>
                            <div className="mt-50">
                                <CategoryTab2 />
                            </div>
                        </div>
                    </section> */}
      </Layout>
    </>
  );
}
