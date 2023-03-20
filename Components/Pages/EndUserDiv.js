import { useState } from "react";
import { sendContactForm } from "@/lib/api";

const initvalues = {
  email: "",
};
const initState = {
  values: initvalues,
};
const EndUserDiv = () => {
  const [state, setState] = useState(initState);
  const { values, isloading } = state;

  const onSubmit = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(values.email)) {
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
  return (
    <>
      <div className="row my-5" id="middlerow1">
            <div className="col-lg-12 col-12">
              <div className="row">
                <div
                  className="col-lg-6 col-12 order-2 order-lg-1"
                  id="imgmain1">
                  <img src="/Dsideimage.svg" alt="" />
                </div>

                <div
                  className="col-lg-6 col-12 py-2 order-1 order-lg-2"
                  id="midimgbackground1">
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
                      <img src="/Dsideimage.svg" alt="" />
                    </div>
                  </div>
                  <div className="row" id="imgmain22">
                    <div className="col-12" id="imgcolmain2">
                      <img src="/Lsideimage.svg" alt="" />
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
          {/* ________________________________________For Light Mode__________________________________________ */}
          <div className="row my-5 " id="middlerow2">
            <div className="col-lg-12 col-12">
              <div className="row">
                <div
                  className="col-lg-6 col-12 order-2 order-lg-1"
                  id="imgmain12">
                  <img src="/Lsideimage.svg" alt="" />
                </div>

                <div
                  className="col-lg-6 col-12 py-2 order-1 order-lg-2"
                  id="midimgbackground2">
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
                      <img src="/Dsideimage.svg" alt="" />
                    </div>
                  </div>
                  <div className="row" id="imgmain22">
                    <div className="col-12" id="imgcolmain2">
                      <img src="/Lsideimage.svg" alt="" />
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
    </>
  );
};
export default EndUserDiv;
