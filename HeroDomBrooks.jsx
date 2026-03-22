import React from "react";

const HeroDomBrooks = ({ hero }) => {
  const defaultHero = {
    title: "Brooks Scouting Report",
    videoUrl: "/videos/dom-brooks.mp4",
    description: "Built by Dom Brooks. Powered by the players.",
    hasMusicRightsDisclaimer: true,
  };

  const data = hero || defaultHero;

  return (
    <section className="w-full bg-black text-white flex flex-col items-center justify-center py-10 px-4">
      <div className="max-w-3xl w-full flex flex-col items-center text-center">

        {/* Hero Title */}
        {data.title && (
          <h1 className="text-4xl font-bold mb-4">
            {data.title}
          </h1>
        )}

        {/* Hero Video */}
        {data.videoUrl && (
          <div className="w-full mb-6">
            <video
              src={data.videoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        )}

        {/* Hero Description */}
        {data.description && (
          <p className="text-lg text-gray-300 mb-6">
            {data.description}
          </p>
        )}

        {/* Music Rights Disclaimer */}
        {data.hasMusicRightsDisclaimer && (
          <p className="music-disclaimer text-sm text-gray-400 mt-4">
            Music in this video is the property of its respective owners. Brooks
            Scouting Report does not claim ownership and uses this audio strictly
            for highlight and educational purposes.
          </p>
        )}

      </div>
    </section>
  );
};

export default HeroDomBrooks;

