"use client";

import React, { useState, useEffect } from 'react';
import styles from './page.module.css';

const API_KEY = 'DEMO_KEY'; 

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`,
};

const RoverPhoto = ({ src, date, roverName }) => {
  return (
    <div className={styles.roverPhoto}>
      <img src={src} alt={`Rover: ${roverName}`} className={styles.roverImage} />
      <p><strong>{roverName}</strong> - {date}</p>
    </div>
  );
};

export const NasaCollaboration = () => {
  const [dailyImg, setDailyImg] = useState({});
  const [roverPhoto, setRoverPhoto] = useState({});

  useEffect(() => {
    const fetchDailyImg = async () => {
      const response = await fetch(NASA_URLs.astronomyPicOfTheDay);
      const data = await response.json();
      setDailyImg(data);
    };

    const fetchRoverPhotos = async () => {
      const response = await fetch(NASA_URLs.marsRoverPhoto);
      const data = await response.json();
      setRoverPhoto(data);
    };

    fetchDailyImg();
    fetchRoverPhotos();
  }, []);

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Collaboration with NASA</h1>

        <section className="card">
          <h2>Astronomy Picture of the Day</h2>
          {dailyImg?.url ? (
            <>
              <h3>{dailyImg.title}</h3>
              <img
                className={styles.nasaPicOfTheDayImg}
                src={dailyImg.url}
                alt={dailyImg.title}
              />
              <p>{dailyImg.explanation}</p>
            </>
          ) : (
            <p>Loading APOD...</p>
          )}
        </section>

        <section className="card">
          <h2>Rover Photos</h2>
          {roverPhoto?.photos?.length ? (
            <div className={styles.roverGallery}>
              {roverPhoto.photos.map((photo) => (
                <RoverPhoto
                  key={photo.id}
                  src={photo.img_src}
                  date={photo.earth_date}
                  roverName={photo.rover.name}
                />
              ))}
            </div>
          ) : (
            <p>Loading rover photos...</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default NasaCollaboration;
