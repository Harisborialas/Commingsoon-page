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
export default function Home() {
  const [state, setState] = useState(initState);
  const { values, isloading } = state;

  const onSubmit = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(values.email)) {
      errorMsg: "Please enter a valid email address.";
      // alert("Please enter a valid email address.");
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
      </Head>
      <div className="container-fluid" id="mainpage">
        <nav class="navbar" id="Navcol2">
          <div class="container">
            <a class="navbar-brand d-flex" href="#">
              <img
                src="/logo.png"
                alt="Logo"
                width="50"
                height="50"
                class="d-inline-block align-text-top"
              />
              <h5 id="BYC">BYC</h5>
            </a>
            <div className="col-6 d-flex justify-content-end">
              <div class="dropdown">
                <button class="dropbtn">Theme</button>
                <div class="dropdown-content">
                  <a href="#" id="dark-theme-link" onClick={darktheme}>
                    dark
                  </a>
                  <a href="#" id="light-theme-link" onClick={lighttheme}>
                    light
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="row" id="row2">
          <div className="col-lg-6 col-md-6 col-sm-12" id="col2">
            <div className="row" id="backgroundimg">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h1 id="headingmain">
                  Something big is on
                  <br /> The horizon!
                </h1>
                <p id="para">Join us for the next big thing</p>
              </div>

              <div className="col-lg-12 col-md-12 col-sm-12 " id="col3">
                <form>
                  <input
                    type={"email"}
                    className="form-control my-2 mt-5"
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
                    disabled={!values.email}
                    onClick={onSubmit}
                    isloading={isloading}
                    className="btn btn-outline-primary"
                    id="btn">
                    Get Notified
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mt-3 mx-5" id="imagesdiv">
            <Image
              src="/sideimage.png"
              alt=""
              width={500}
              height={700}
              id="image1"
            />
          </div>
        </div>
        <footer id="footer">
          <div className="col-lg-6 float-left">
            <a href="">
              <img
                src="/Twitter.png"
                alt=""
                width={100}
                height={100}
                id="twitter"
                className="mt-5 mx-5"
              />
            </a>
          </div>
          <div className="col-lg-6 d-flex justify-content-end float-right">
            <p className="mt-5 text-sm  mx-2" id="allrightrese">
              All right reserved
            </p>
            <p className="mt-5 text-sm  mx-2" id="privacy">
              Privacy Policy
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
