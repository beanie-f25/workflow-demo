"use client";

import Image from "next/image";
import ReactFullpage from '@fullpage/react-fullpage';

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    credits={{ enabled: false }}
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section text-center bg-emerald-300">
            <p>Section 1 (welcome to fullpage.js)</p>
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button>
          </div>
          <div className="section bg-yellow-100 flex items-center justify-center text-center">
            <p>Section 2</p>
          </div>
          <div className="section bg-gray-200 flex flex-col items-center justify-center text-center p-8">
            <div className="max-w-xl">
              <p className="mt-4 text-lg font-semibold">A funny meme in the middle</p>
            </div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default function Home() {
  return (
    <Fullpage />
  );
}
