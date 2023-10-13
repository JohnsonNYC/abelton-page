import React from "react";
import Image from "next/image";
import { PropTypes } from "prop-types";

const CollageSection = ({ imageA, imageB, imageC, color, backPosition }) => {
  const bgColor = color == "yellow" ? "bg-abelton-yellow" : "bg-abelton-yellow";
  const bgPosition =
    backPosition == "right"
      ? "right-0"
      : backPosition == "center"
      ? "right-0 left-0 m-auto"
      : "left-0";

  const adjustHeight = Boolean(imageC) ? "20vw" : "40vw";
  const adjustWidth = Boolean(imageC) ? "max-w-[33vw]" : "";

  return (
    <section className="relative flex py-[8vw] mb-[8.3vw]">
      <div
        className={`w-[58.3vw] h-[58.3vw] top-0 absolute z-0 ${bgColor} ${bgPosition}`}
      ></div>
      <div className="max-w-[40vw] max-h-[40vw] z-10 ml-[8vw] object-cover">
        <Image
          src={imageA}
          alt="Collage 1"
          className={`max-h-[${adjustHeight}] object-cover mb-[8vw] z-10  ${adjustWidth}`}
        />

        {imageC ? (
          <Image
            src={imageC}
            alt="Collage 2"
            className={`max-h-[20vw] object-cover z-10 max-w-[33vw]`}
          />
        ) : null}
      </div>
      <Image
        src={imageB}
        alt="Collage 2"
        className=" max-w-[33vw] max-h-[25vw] z-10 ml-[8vw] m-auto object-cover"
      />
    </section>
  );
};

CollageSection.propTypes = {
  imageA: PropTypes.object,
  imageB: PropTypes.object,
  backPosition: PropTypes.string,
  color: PropTypes.color,
};
export default CollageSection;
