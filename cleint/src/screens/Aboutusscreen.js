import React from "react";

function Aboutusscreen() {
  return (
    <div className="Aboutus-container">
      <div>
        <h1 className="AboutusH1"> ABOUT US</h1>
      </div>
      <div className="AboutusP-box">
        <div className="AboutusP-container">
          <p className="AboutusP">
            We at Inner peace yoga sanctuary we want to change the world
            perspective of yoga As some people think that Yoga is just another
            form of exercise to keep, your body healthy and flexible. It is much
            more than that.
          </p>
          <p className="AboutusP">
            Yoga is a way of life, a way of expressing your self and experience
            the world around you Yoga is the relationship that is built between
            the body and the mind. Yoga is a way to free the self from shackles
            of the world to be truly free to finally be able to breath to forget
            about your worry’s and calm the self. We are here to help others
            find this release so that they can comfortable and competently move
            their bodies through life.
          </p>
        </div>
        <div className="youtube-link-container">
          <iframe
            width="560"
            height="250"
            src="https://www.youtube.com/embed/nvFm30ZAZRY?si=K_RJ1nrYyQzXcbW6"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Aboutusscreen;
