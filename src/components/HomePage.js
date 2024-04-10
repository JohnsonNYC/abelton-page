import React from "react";
import Image from "next/image";

// Image Assets
import MainImg from "../assets/Sample51.jpeg";
import Collage1 from "../assets/Sample52.jpeg";
import Collage2 from "../assets/Sample53.jpeg";
import PurpleSet from "../assets/Sample54.jpeg";
import Guitars from "../assets/Sample55.jpeg";
import Sample56 from "../assets/Sample56.jpeg";
import Sample57 from "../assets/Sample57.jpeg";
import Sample58 from "../assets/Sample58.jpeg";

//Components
import CollageSection from "src/components/CollageSection.js";

// Icons
import {
  Youtube,
  ChevronRight,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";

const HomePage = () => {
  return (
    <div>
      <div className="sticky top-0 z-20 bg-white bg-opacity-90 ">
        <ul className="flex px-10 py-5">
          <li className="font-medium mr-1.5 pr-2.5 cursor-pointer text-abelton-red">
            About
          </li>
          <li className="mr-1.5 pr-2.5 cursor-pointer">Jobs</li>
          <li className="mr-1.5 pr-2.5 cursor-pointer">Apprenticeships</li>
        </ul>
      </div>

      <section className="relative">
        <Image
          src={MainImg}
          alt="Main Banner"
          className=" h-[calc(100%-120px)] px-28 pb-28 object-cover"
        />

        <div className="absolute top-0 left-0 right-0 bottom-28 text-8xl flex items-center justify-center">
          Abelton
        </div>
      </section>

      <section className="mx-auto w-1/2 mb-[8vw]">
        <h1 className="text-3xl mb-5 font-semibold">
          We make{" "}
          <a
            className="text-abelton-blue"
            href="https://www.google.com"
            target="_blank"
          >
            Live
          </a>
          ,
          <a
            className="text-abelton-blue"
            href="https://www.google.com"
            target="_blank"
          >
            Push
          </a>{" "}
          and{" "}
          <a
            className="text-abelton-blue"
            href="https://www.google.com"
            target="_blank"
          >
            Link
          </a>{" "}
          — unique software and hardware for music creation and performance.
          With these products, our community of users creates amazing things.
        </h1>

        <p className="text-xl">
          Ableton was founded in 1999 and released the first version of Live in
          2001. Our products are used by a community of dedicated musicians,
          sound designers, and artists from across the world.
        </p>
      </section>

      <CollageSection
        imageA={Collage1}
        imageB={Collage2}
        color="yellow"
        backPosition="right"
      />

      <section className="mx-auto w-1/2 mb-[8vw]">
        <h1 className="text-3xl mb-5 font-semibold">
          Making music isn’t easy. It takes time, effort, and learning. But when
          you’re in the flow, it’s incredibly rewarding.
        </h1>

        <p className="text-xl">
          We feel the same way about making Ableton products. The driving force
          behind Ableton is our passion for what we make, and the people we make
          it for.
        </p>
      </section>

      {/* Quick Youtube  */}
      <div className="mx-auto mb-[8.3vw] w-fit">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9SbnhgjeyXA?si=KzshdO4pHQMQNIzh"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="mx-auto"
        ></iframe>

        <div className="text-xs">Why Ableton - Juanpe Bolivar</div>
      </div>

      <section className="mx-auto w-1/2 mb-[8vw]">
        <h1 className="text-3xl mb-5 font-semibold">
          We are more than 350 people from 30 different countries divided
          between our headquarters in Berlin and our offices in Los Angeles and
          Tokyo.
        </h1>

        <p className="text-xl">
          Most of us are active musicians, producers, and DJs, and many of us
          use Live and Push every day. We come from a wide range of cultural and
          professional backgrounds. Some of us have PhDs, some are self-taught,
          and most of us are somewhere in between. What connects us is the
          shared belief that each of us has the skills and knowledge to
          contribute to something big: helping to shape the future of music
          culture.
        </p>
      </section>

      <CollageSection
        imageA={Collage1}
        imageB={Collage2}
        imageC={PurpleSet}
        color="green"
        backPosition="left"
      />

      <section className="mx-auto w-1/2 mb-[8vw]">
        <h1 className="text-3xl mb-5 font-semibold">
          We believe it takes focus to create truly outstanding instruments. We
          only work on a few products and we strive to make them great.
        </h1>

        <p className="text-xl">
          Rather than having a one-size-fits-all process, we try to give our
          people what they need to work their magic and grow. We’ve learned that
          achieving the best results comes from building teams that are richly
          diverse, and thus able to explore problems from a wider set of
          perspectives. We don’t always agree with each other, but opinion and
          debate are valued and openly encouraged.
        </p>
      </section>

      <Image
        src={Guitars}
        alt="Collage 2"
        className="w-10/12 m-auto mb-[8.3vw] object-cover"
      />

      <section className="mx-auto w-1/2 mb-[8vw]">
        <h1 className="text-3xl mb-5 font-semibold">
          We’re passionate about what we do, but we’re equally passionate about
          improving who we are.
        </h1>

        <p className="text-xl">
          We work hard to foster an environment where people can grow both
          personally and professionally, and we strive to create a wealth of
          opportunities to learn from and with each other.
        </p>
        <br />
        <p className="text-xl">
          Alongside an internal training program, employees are actively
          supported in acquiring new knowledge and skills, and coached on
          applying these in their daily work. In addition, staff-organized
          development and music salons are a chance to discuss new technologies,
          production techniques and best practices.
        </p>
      </section>

      <CollageSection
        imageA={Sample56}
        imageB={Sample57}
        color="green"
        backPosition="center"
      />

      <section className="mx-auto w-1/2 mb-[8vw]">
        <h1 className="text-3xl mb-5 font-semibold">
          We want our employees to love it here. Since we’re looking for
          exceptional talent from around the world, we will do everything we can
          to make your transition as easy as possible.
        </h1>
        <p className="text-xl">
          If you&apos;re joining us in Berlin, we&apos;ll help with relocation
          and paperwork. We&apos;ll even provide you with free German or English
          lessons. Plus, working in Germany means you can expect comprehensive
          health insurance for you and your family, as well as generous
          maternity and paternity leave. Office hours are flexible, but
          it&apos;s not all work; we have several company and team outings
          throughout the year as well as a variety of fun, informal small-group
          activities.
        </p>
      </section>

      <div className="w-10/12 m-auto flex justify-center items-center bg-abelton-lightblue">
        <Image
          src={Sample58}
          alt="Collage 2"
          className="min-w-[50%] max-h-96 object-cover"
        />
        <div className="text-3xl p-14 flex flex-col justify-center">
          We’re really proud of the work we’ve done so far. But there’s so much
          more to come. If you’d like to be a part of it, please join us.
          <a className="mt-10 text-abelton-blue" href={"#"}>
            See Latest Jobs
          </a>
        </div>
      </div>

      <footer className="mt-14 p-20 border-t border-gray-300">
        <div className="text-4xl">Abelton</div>
        <div className="flex justify-between mt-1.5">
          <div>
            <div className="text-xl flex items-center ">
              Register Live or Push <ChevronRight size={16} />
            </div>
            <div className="text-xl flex items-center">
              About Abelton <ChevronRight size={16} />
            </div>
            <div className="text-xl flex items-center">
              Jobs <ChevronRight size={16} />
            </div>
            <div className="flex gap-2.5">
              <div className="w-10 h-10 bg-blue-500 flex justify-center items-center">
                <Facebook fill="white" stroke="none" />
              </div>

              <div className="w-10 h-10 bg-blue-400 flex justify-center items-center">
                <Twitter fill="white" stroke="none" />
              </div>

              <div className="w-10 h-10 bg-red-600 flex justify-center items-center">
                <Youtube fill="white" />
              </div>

              <div className="w-10 h-10 bg-yellow-500 flex justify-center items-center">
                <Instagram stroke="white" />
              </div>
            </div>
          </div>

          <div className="flex flex-col ">
            <div className="text-3xl ">Education</div>
            <div className="text-xl ">Offers for students and teachers</div>
            <div className="text-xl ">Abelton for the Classroom</div>
            <div className="text-xl ">
              Abelton for Colleges and Universities
            </div>
          </div>

          <div className="flex flex-col  max-w-[470px]">
            <div className="text-3xl ">Sign up to our news letter</div>
            <div className="text-xl">
              Enter your email address to stay up to date with the latest
              offers, tutorials, downloads, surverys, and more.
            </div>
            <form className="flex mt-4">
              <input className="w-full bg-slate-200" />
              <button className="w-[120px] text-white bg-abelton-blue py-2">
                Sign Up
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="text-3xl ">community</div>
          <div className="text-xl ">Find Abelton User Groups</div>
          <div className="text-xl ">Find Certified Training</div>
          <div className="text-xl ">Become a Certified Trainer</div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
