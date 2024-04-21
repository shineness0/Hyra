"use client";

import Image from "next/image";
import img from "../../../../public/auth-img1.png";
import googleLogo from "../../../../public/google-logo.png";

const page = () => {
  return (
    <div className="grid w-full grid-cols-2 gap-5 mx-auto md:flex-row md:w-3/4 min-h-[85vh]">
      <div className="col-span-2 p-4 rounded md:col-span-1">
        <h2>Create an account</h2>
        <form action="">
          <div className="my-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-input" placeholder="Aaisha" />
          </div>
          <div className="my-3">
            <label htmlFor="emailOrPhone" className="form-label">
              Email/Phone Number
            </label>
            <input
              type="text"
              className="form-input"
              placeholder="aaisha@gmail.com"
            />
          </div>
          <div className="my-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input type="text" className="form-input" placeholder="Aaisha" />
          </div>
          <div className="my-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-input"
              placeholder="sbc%%%%%qjvcjh((**&#"
            />
          </div>
          <div className="my-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm password
            </label>
            <input
              type="password"
              className="form-input"
              placeholder="sbc%%%%%qjvcjh((**&#"
            />
          </div>
          <div className="my-3">
            <button className="form-btn bg-secondary-100" type="submit">
              Sign Up
            </button>
            <button
              className="flex items-center justify-center mt-2 border form-btn border-secondary-100"
              type="submit"
            >
              <Image
                src={googleLogo}
                alt="Google Logo"
                width={15}
                className="mr-2"
              />
              Continue with Google
            </button>
          </div>
        </form>
      </div>
      <div className="items-center justify-center hidden md:flex">
        <Image src={img} alt="Picture of a Muslim girl" className="w-2/6" />
      </div>
    </div>
  );
};

export default page;
