// import React from 'react';
import ReactCountUp from "react-countup";

const CountUp = ReactCountUp?.default || ReactCountUp;

const CountUpNumb = ({ contentNumber, duration = 2, className }) => {
  const isPuckEditMode = contentNumber && typeof contentNumber === "object";

  if (isPuckEditMode) {
    return (
      <span className={`block text-center w-full ${className}`}>
        {contentNumber}
      </span>
    );
  }

  const rawString = (contentNumber || "").toString().trim();
  const lastNumber = parseInt(rawString.replace(/\D/g, "")) || 0;
  const suffix = rawString.replace(/[0-9]/g, "") || "";

  if (!CountUp) {
    return (
      <span className={`block text-center w-full ${className}`}>
        {rawString}
      </span>
    );
  }

  return (
    <span className={`block text-center w-full ${className}`}>
      <CountUp
        start={0}
        end={lastNumber}
        duration={duration}
        suffix={suffix}
        enableScrollSpy={true}
        scrollSpyOnce={false}
        scrollSpyDelay={0}
      />
    </span>
  );
};

export default CountUpNumb;
