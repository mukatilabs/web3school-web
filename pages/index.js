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
        <section className="section-box mt-50 mb-20">
          <div className="container">
            <div className="box-newsletter">
              <div className="row">
                <div className="col-xl-3 col-12 text-center d-none d-xl-block">
                  <img
                    src="assets/imgs/template/newsletter-left.png"
                    alt="joxBox"
                  />
                </div>
                <div className="col-lg-12 col-xl-6 col-12">
                  <h2 className="text-md-newsletter text-center">
                    Free Web3 MasterClass is Coming Soon
                    <br /> Join the waitlist to get notified
                  </h2>

                  <div className="mt-30 text-center">
                    <a
                      href="https://forms.gle/FUQunWLRKrvdrx959"
                      target="_blank"
                      className="btn btn-default mr-15"
                    >
                      Join Waitlist{" "}
                    </a>
                  </div>
                </div>
                <div className="col-xl-3 col-12 text-center d-none d-xl-block">
                  <img
                    src="assets/imgs/template/newsletter-right.png"
                    alt="joxBox"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
