import { sendContactForm } from "@/lib/api";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

const initvalues = {
  email: "",
};
const initState = {
  values: initvalues,
  errorMsg: "",
};

const CommingSoonPage = () => {
  const [state, setState] = useState(initState);
  const { values, isloading } = state;
  const [isActive, setIsActive] = useState(false);

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
        <title>Create Next App</title>
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
            <nav class="navbar my-4">
              <div class="container-fluid">
                <a class="navbar-brand" href="#" id="BYC">
                  <img src="/logo.png" alt="Logo" class="d-inline-block" />
                  <span id="BYCtext">BYC</span>
                </a>
                <span class="navbar-text d-flex justify-center">
                  <div class="dropdown">
                    <button class="dropbtn"> Theme</button>
                    <div class="dropdown-content">
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
          <div className="row" >
            <div className="col-12" id="tooglebtnrow">
              
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
                        Something big is on
                        the horizon!
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
                          placeholder="Enter your email"
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
            <div className="col-lg-4 col-12 p-3 ">
              <img src="/tool.png" alt="" />
              <h4 id="h4first">First and Biggest AI tool set</h4>
              <p className="paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempora quasi nihil, ducimus ut ea exercitationem velit.
                Repellendus delectus voluptatum iusto, alias id.
              </p>
            </div>
            <div className="col-lg-4 col-12 p-3">
              <img src="/ease.png" alt="" />
              <h4 id="h4second">Computation with Ease</h4>
              <p className="paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempora quasi nihil, ducimus ut ea exercitationem velit.
                Repellendus delectus voluptatum iusto, alias id.
              </p>
            </div>
            <div className="col-lg-4 col-12 p-3">
              <img src="/cost.png" alt="" />
              <h4 id="h4third">No Minimum Cost Limit</h4>
              <p className="paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempora quasi nihil, ducimus ut ea exercitationem velit.
                Repellendus delectus voluptatum iusto, alias id.
              </p>
            </div>
          </div>

          <div className="row " id="footer">
            <div className="col-lg-6 col-12 pt-3 " id="footerimg">
              <a href="#">
                <img
                  src="/Twitter.png"
                  alt=""
                  id="imgfooter"
                  width={100}
                  height={100}
                />
              </a>
            </div>
            <div className="col-lg-6 col-12 pt-2 " id="footerparas">
              <p id="footerp1">©2023 All rights reserved.</p>
              <p id="footerp2">Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CommingSoonPage;
