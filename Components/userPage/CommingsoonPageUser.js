
import { sendContactForm } from "@/lib/api";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Toogle from "../toogle/Toogle";

const initvalues = {
  email: "",
};
const initState = {
  values: initvalues,
  errorMsg: "",
};

const CommingSoonPageUser = () => {
  const [state, setState] = useState(initState);
  const { values, isloading } = state;

  const onSubmit = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(values.email)) {
      // errorMsg: "Please enter a valid email address.";
      // alert("Please enter a valid email address.");
      // return;
      setState((prev) => ({
        ...prev,
        errorMsg: "Please enter a valid email address.",
      }));
      return;
    }
    setState((prev) => ({
      ...prev,
      errorMsg: "Please enter a valid email address.",
      isloading: true,
      errorMsg: "",
    }));
    try {
      await sendContactForm(values);
      setState(initState);
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isloading: false,
        error: error.message,
      }));
    }
  };

  const handleChange = ({ target }) => {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  };

  const darktheme = () => {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  };
  const lighttheme = () => {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  };

  return (
    <>
      <Head>
        <title>BYC-UpComming</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;800&display=swap"
          rel="stylesheet"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap"
          rel="stylesheet"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
          rel="stylesheet"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap"
          rel="stylesheet"></link>
      </Head>
      <div className="container-fluid" id="body">
        <div className="container" id="maincontainer">
          <div className="row">
            <nav className="navbar my-4">
              <div className="container-fluid">
                <a className="navbar-brand" href="#" id="BYC">
                  <img src="/logo.png" alt="Logo" className="d-inline-block" />
                  <span id="BYCtext">BYC</span>
                </a>
                <span className="navbar-text d-flex justify-center">
                  <div className="dropdown">
                    <button className="dropbtn">
                      <img
                        src="/mode.png"
                        alt=""
                        width={20}
                        height={20}
                        className="mx-2 "
                      />
                      <span id="Dark">Dark</span>
                      <img
                        src="/arrow.png"
                        alt=""
                        width={20}
                        height={20}
                        className="mx-2 mt-1"
                      />
                    </button>
                    <div className="dropdown-content">
                      <a href="#" id="dark-theme-link" onClick={darktheme}>
                        dark
                      </a>
                      <a href="#" id="light-theme-link" onClick={lighttheme}>
                        light
                      </a>
                    </div>
                  </div>
                </span>
              </div>
            </nav>
          </div>
          <div className="row my-3 d-flex justify-center">
            <div className="col-12" id="tooglebtncol">
              <Toogle/>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-lg-12 col-12">
              <div className="row">
                <div
                  className="col-lg-6 col-12 py-2 order-2 order-lg-1"
                  id="imgmain1">
                  <img src="/sideimage.png" alt="" width={600} height={500} />
                </div>
                <div
                  className="col-lg-6 col-12 py-2 order-1 order-lg-2"
                  id="midimgbackground">
                  <div className="row" id="rowheading">
                    <div className="col-12 pt-5">
                      <h1 className=" font-bold " id="heading">
                        User Something big is on the horizon!
                      </h1>
                      <p className="text-2xl font-bold " id="paragraph">
                        Join us for the next big thing
                      </p>
                    </div>
                  </div>
                  <div className="row" id="imgmain2">
                    <div className="col-12" id="imgcolmain2">
                      <img src="/sideimage.png" alt="" />
                    </div>
                  </div>
                  <div className="row" id="rowform">
                    <div className="col-12 pt-3 px-3" id="colform">
                      <form>
                        <input
                          type={"email"}
                          className="form-control my-2"
                          id="email"
                          placeholder="Email Address"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          required
                          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        />
                        <div>
                          {state.errorMsg && (
                            <p style={{ color: "red" }}>{state.errorMsg}</p>
                          )}
                        </div>
                        <button
                          type="submit"
                          onClick={onSubmit}
                          isloading={isloading}
                          className="btn mb-3 "
                          id="btn">
                          Get Notified
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-5" id="threedivrow">
            <div className="col-lg-4 col-12 p-5" id="threedivcol1">
              <img src="/tool.png" alt="" width={52} height={52} />
              <h4 id="h4first">
                <span className="textgradientcols">First</span> and
                <span className="textgradientcols"> Biggest</span> AI tool set
              </h4>
              <p className="paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempora quasi nihil, ducimus ut ea exercitationem velit.
                Repellendus delectus voluptatum iusto, alias id.
              </p>
            </div>
            <div className="col-lg-4 col-12 p-5" id="threedivcol2">
              <img src="/ease.png" alt="" width={52} height={52} />
              <h4 id="h4second">
                <span className="textgradientcols">Computation</span> with Ease
              </h4>
              <p className="paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempora quasi nihil, ducimus ut ea exercitationem velit.
                Repellendus delectus voluptatum iusto, alias id.
              </p>
            </div>
            <div className="col-lg-4 col-12 p-5">
              <img src="/cost.png" alt="" width={52} height={52} />
              <h4 id="h4third">
                <span className="textgradientcols">No Minimum</span> Cost Limit
              </h4>
              <p className="paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempora quasi nihil, ducimus ut ea exercitationem velit.
                Repellendus delectus voluptatum iusto, alias id.
              </p>
            </div>
          </div>

          <div className="row " id="footer">
            <div className="col-lg-6 col-12 pt-2" id="footerimg">
              <div className="d-flex justify-start">
                <h4 id="followus">Follow US</h4>
                <img
                  src="/DTwitter.svg"
                  id="imgfollowus1"
                  alt=""
                  width={15}
                  height={15}
                />
                <img
                  src="/Twitter.svg"
                  alt=""
                  width={15}
                  height={15}
                  id="imgfollowus2"
                />
              </div>
            </div>
            <div className="col-lg-6 col-12 pt-3 " id="footerparas">
              <p id="footerp1">©2023 All rights reserved.</p>
              <p id="footerp2">Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CommingSoonPageUser;
