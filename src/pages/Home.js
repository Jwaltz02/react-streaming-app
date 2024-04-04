import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import { PreviewPhotos } from "../helpers/PreviewPhotos.js";
import Genres from "../components/Genres.js";
import { FaPlay } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";

// Horror movies/shows
import Image1 from "../assets/thumbnailPhotos/hauntingHillHouse.jpeg";
import Image2 from "../assets/thumbnailPhotos/IT.jpeg";
import Image3 from "../assets/thumbnailPhotos/smile.jpeg";
import Image4 from "../assets/thumbnailPhotos/Veronica.jpeg";
import Image5 from "../assets/thumbnailPhotos/insidiousLastKey.jpeg";
import Image6 from "../assets/thumbnailPhotos/american-psycho.jpeg";
import Image7 from "../assets/thumbnailPhotos/conjuring1.jpeg";
import Image8 from "../assets/thumbnailPhotos/annabelle.jpeg";
import Image9 from "../assets/thumbnailPhotos/halloween-kills.jpeg";
import Image10 from "../assets/thumbnailPhotos/conjuring2.jpeg";
import Image11 from "../assets/thumbnailPhotos/archive81.jpeg";
import Image12 from "../assets/thumbnailPhotos/nightmare-elm-street.jpeg";
import Image13 from "../assets/thumbnailPhotos/grudge.jpeg";

// Popular movies/shows
import Image14 from "../assets/thumbnailPhotos/venom-carnage.jpeg";
import Image15 from "../assets/thumbnailPhotos/top-gun-maverick.jpeg";
import Image16 from "../assets/thumbnailPhotos/spiderman-no-way-home.jpeg";
import Image17 from "../assets/thumbnailPhotos/rush-hour.jpeg";
import Image18 from "../assets/thumbnailPhotos/run.jpeg";
import Image19 from "../assets/thumbnailPhotos/inception.jpeg";
import Image20 from "../assets/thumbnailPhotos/hangover.jpeg";
import Image21 from "../assets/thumbnailPhotos/death-note.jpeg";
import Image22 from "../assets/thumbnailPhotos/coraline.jpeg";
import Image23 from "../assets/thumbnailPhotos/conjuring1.jpeg";
import Image24 from "../assets/thumbnailPhotos/IT.jpeg";
import Image25 from "../assets/thumbnailPhotos/Dune1.jpeg";
import Image26 from "../assets/thumbnailPhotos/22-jump-street.jpeg";

//Matched To You
import Image27 from "../assets/thumbnailPhotos/Interstellar.jpeg";
import Image28 from "../assets/thumbnailPhotos/better-call-saul.jpeg";
import Image29 from "../assets/thumbnailPhotos/breaking-bad.jpeg";
import Image30 from "../assets/thumbnailPhotos/you.jpeg";
import Image31 from "../assets/thumbnailPhotos/travelers.jpeg";
import Image32 from "../assets/thumbnailPhotos/ozark.jpeg";
import Image33 from "../assets/thumbnailPhotos/night-agent.jpeg";
import Image34 from "../assets/thumbnailPhotos/mind-hunter.jpeg";
import Image35 from "../assets/thumbnailPhotos/manifest.jpeg";
import Image36 from "../assets/thumbnailPhotos/witcher.jpeg";
import Image37 from "../assets/thumbnailPhotos/hangover.jpeg";
import Image38 from "../assets/thumbnailPhotos/archive81.jpeg";
import Image39 from "../assets/thumbnailPhotos/Dune1.jpeg";

function Home() {
  const Popular = [
    Image14,
    Image15,
    Image16,
    Image17,
    Image18,
    Image19,
    Image20,
    Image21,
    Image22,
    Image23,
    Image24,
    Image25,
    Image26,
  ];

  const Horror = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
    Image13,
  ];

  const MatchedMovies = [
    Image27,
    Image28,
    Image29,
    Image30,
    Image31,
    Image32,
    Image33,
    Image34,
    Image35,
    Image36,
    Image37,
    Image38,
    Image39,
  ];

  const [slide, updateSlide] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      if (slide === 2) {
        updateSlide(0);
      } else {
        updateSlide(slide + 1);
      }
    }, 10000);
    return () => clearTimeout(interval);
  }, [slide]);

  return (
    <div className="homepage">
      <div className="preview-photos-wrapper">
        <div
          className="preview-photos"
          style={{ backgroundImage: `url(${PreviewPhotos[slide].image})` }}>
          <div className={PreviewPhotos[slide].styles}>
            <h1 className="preview-title text-5xl mb-5">
              {PreviewPhotos[slide].title}
            </h1>
            <h3></h3>
            <p className="mb-6">{PreviewPhotos[slide].content}</p>
            <div className="flex gap-x-4">
              <div className="play-button h-11 text-xl rounded-md bg-white text-black flex items-center cursor-pointer hover:bg-gray-300">
                <FaPlay className="play-icon text-black mr-2 ml-5" />
                Play
              </div>
              <div className="info-button w-40 h-11 md:h-11 text-xl rounded-md bg-gray-500/50 hover:bg-gray-500/25 text-white flex items-center cursor-pointer ">
                <IoIosInformationCircleOutline className="info-icon text-white text-3xl mr-2 ml-4" />
                More Info
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4 className="row-titles">New & Popular </h4>
      <Genres imageData={Popular} />
      <h4 className="row-titles">Horror Movies</h4>
      <Genres imageData={Horror} />
      <h4 className="row-titles">Matched To You</h4>
      <Genres imageData={MatchedMovies} />
    </div>
  );
}

export default Home;
