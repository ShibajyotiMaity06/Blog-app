import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-10">
        <div className="flex-1">
          <Link to="/" className=" text-4xl font-bold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-red-200 to-red-600 rounded-lg">
              Maity's
            </span>
            {/* <span className="px-1 py-1 m-1 bg-gradient-to-r from-green-300 to-green-700 rounded-lg text-white">
              Maity's
            </span> */}
            <span>Blog</span>
          </Link>
          <p className="mt-5 text-sm text-gray-700">
            This is my blog app which helps you to edit add blogs and discover
            the world by also seeing other blogs
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your Username" />
              <TextInput type="text" placeholder="username" id="username" />
            </div>
            <div>
              <Label value="Your Email" />
              <TextInput type="text" placeholder="email" id="email" />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput type="text" placeholder="password" id="password" />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-3">
            <span className="">Have an Account ?</span>
            <Link to="/sign-in" className="text-blue-700">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
