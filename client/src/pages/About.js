import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to Smart Shop, your one-stop destination for an exceptional online shopping experience. Powered by the robust MERN stack (MongoDB, Express.js, React, and Node.js), Smart Shop offers a seamless and dynamic platform where users can effortlessly browse and purchase a diverse range of products. Our intuitive filtering system allows you to refine your search by gender and kids' categories, ensuring that you find exactly what you're looking for. The user-friendly cart feature makes shopping convenient and efficient, while our advanced admin page built with React Vite provides comprehensive control over product management. Stay updated with our new arrivals section, meticulously designed to bring you the latest trends and deals, much like the leading e-commerce giants Flipkart and Amazon. At Smart Shop, we are committed to delivering a superior shopping experience, combining cutting-edge technology with a customer-centric approach.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
