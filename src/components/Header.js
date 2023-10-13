/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";

const Header = () => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  return (
    <>
      <header className="border py-5 px-10">
        <nav>
          <ul className="flex items-center ">
            <li>
              <svg
                aria-hidden="true"
                focusable="false"
                className="main-nav__logo__image mr-8"
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="28"
                viewBox="0 0 45 21"
              >
                <path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path>
              </svg>
            </li>

            <li className="cursor-pointer text-black pr-2.5 mx-1.5 text-lg font-bold">
              Live
            </li>
            <li className="cursor-pointer text-black px-2.5 mx-1.5 text-lg font-bold">
              Push
            </li>
            <li className="cursor-pointer text-black px-2.5 mx-1.5 text-lg font-bold">
              Note
            </li>
            <li className="cursor-pointer text-black px-2.5 mx-1.5 text-lg font-bold">
              Link
            </li>
            <li className="cursor-pointer text-black px-2.5 mx-1.5 text-lg font-bold">
              Shop
            </li>
            <li className="cursor-pointer text-black px-2.5 mx-1.5 text-lg font-bold">
              Packs
            </li>
            <li className="cursor-pointer text-black px-2.5 mx-1.5 text-lg font-bold">
              Help
            </li>
            <li
              className="cursor-pointer text-abelton-red px-2.5 mx-1.5 text-lg font-bold"
              onClick={() => setIsMoreOpen(!isMoreOpen)}
            >
              More {isMoreOpen ? "-" : "+"}
            </li>
            <li className="cursor-pointer text-abelton-blue ml-auto text-lg font-bold">
              Try Live for Free
            </li>
            <li className="cursor-pointer text-black ml-2.5 pl-2.5 text-base font-bold">
              Log in or register
            </li>
          </ul>
        </nav>
      </header>
      {isMoreOpen && (
        <section className="flex flex-col pt-6 pb-14 px-10">
          <div className="pr-2.5 mb-1 text-3xl">More on Abelton.com: </div>
          <div className="flex mb-11">
            <div className="cursor-pointer text-black pr-2.5 mr-1.5 text-lg ">
              blog
            </div>
            <div className="cursor-pointer text-black px-2.5 mx-1.5 text-lg ">
              Abelton for the Classroom
            </div>
            <div className="cursor-pointer text-black px-2.5 mx-1.5 text-lg ">
              Abelton for Colleges and Universities{" "}
            </div>
            <div className="cursor-pointer text-black px-2.5 mx-1.5 text-lg ">
              Certified Training
            </div>
            <div className="cursor-pointer text-black px-2.5 mx-1.5 text-lg ">
              About Abelton
            </div>
            <div className="cursor-pointer text-black px-2.5 mx-1.5 text-lg ">
              Jobs
            </div>
            <div className="cursor-pointer text-black px-2.5 mx-1.5 text-lg ">
              Apprenticeships
            </div>
          </div>

          <div className="pr-2.5 mb-1 text-3xl">More from Abelton </div>
          <div className="grid grid-cols-4">
            <div>
              <ul>
                <li className="font-bold">Loop</li>
                <li>Watch Talks, Performances and</li>
                <li>Features from Abelton's Summit for</li>
                <li>Music Makers</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="font-bold">Learning Music</li>
                <li>Learn the fundamentals of music making</li>
                <li>right in your browser.</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="font-bold">Learning Synths</li>
                <li>Get started with synthesis using a web-</li>
                <li>based synth and accompanying</li>
                <li>lessons.</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="font-bold">Making Music</li>
                <li>Some tips from 74 Creative Strategies</li>
                <li>for Electronic Producers.</li>
              </ul>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Header;
