import React from 'react';
import Image from 'next/image';
const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl">
        {/* Image Section */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="Login Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Đăng nhập</h2>
          <form>
            {/* Email Input */}
          
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Nhập email của bạn"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Mật khẩu
              </label>
              <input
                type="password"
                id="password"
                placeholder="Nhập mật khẩu của bạn"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Đăng nhập
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 text-center text-gray-500">Hoặc đăng nhập bằng</div>

          {/* Social Buttons */}
          <div className="flex justify-center gap-4">
            <button className="p-2 rounded-full text-white hover:bg-blue-700">
            <Image
                  src={`https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png`}
                  alt={"đăng nhập"}
                  
                  width={30}
                  height={30}
                  className="object-cover"
                  priority />
            </button>
            <button className="p-2 rounded-full hover:bg-white-600">
            <Image
                  src={`https://t4.ftcdn.net/jpg/03/91/79/25/360_F_391792593_BYfEk8FhvfNvXC5ERCw166qRFb8mYWya.jpg`}
                  alt={"đăng nhập"}
                  
                  width={30}
                  height={30}
                  className="object-cover"
                  priority />
            </button>
            <button className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-900">
              <i className="fab fa-github"></i>
            </button>
          </div>

          {/* Additional Links */}
          <div className="mt-6 text-center">
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Quên mật khẩu?
            </a>
            <a href="/register" className="text-sm text-blue-500 hover:underline px-3">đăng ký</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
