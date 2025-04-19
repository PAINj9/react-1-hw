"use client";

import { useState } from 'react';
import styles from '@/components/destination/destination.module.css';

import PlanetCard from './PlanetCard';
import PlanetWishlistItem from './PlanetWishlistItem';
import AddWishlistItem from '@/components/destination/AddWishlistItem';


export const Destinations = () => {
  const planetData = [
    {
      name: "Europa",
      description: "Europa is a moon of Jupiter with a frozen surface and a possible subsurface ocean.",
      thumbnail: "/destination/image-europa.png",
    },
    {
      name: "Moon",
      description: "The Moon is Earth’s only natural satellite and the first destination in space exploration history.",
      thumbnail: "/destination/image-moon.png",
    },
    {
      name: "Mars",
      description: "Mars is the fourth planet from the Sun, known for its red surface and potential for colonization.",
      thumbnail: "/destination/image-mars.png",
    },
    {
      name: "Titan",
      description: "Titan, Saturn’s largest moon, has a thick atmosphere and lakes of liquid methane.",
      thumbnail: "/destination/image-titan.png",
    }
  ];

  const [selectedPlanets, setSelectedPlanets] = useState([]);

  const onAddOrRemovePlanet = (name) => {
    if (selectedPlanets.some(p => p.name === name)) {
      setSelectedPlanets(selectedPlanets.filter(p => p.name !== name));
    } else {
      const planet = planetData.find(p => p.name === name);
      setSelectedPlanets([...selectedPlanets, planet]);
    }
  };

  const onAddWishlistItem = ({ name, thumbnail }) => {
    const newPlanet = { name: name || "Unnamed", thumbnail };
    setSelectedPlanets([...selectedPlanets, newPlanet]);
  };

  const onRemoveFromWishlist = (name) => {
    setSelectedPlanets(selectedPlanets.filter(p => p.name !== name));
  };

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>

        <section className="card">
          <h2>Wishlist</h2>

          {selectedPlanets.length === 0 ? (
            <p>No planets in wishlist :(</p>
          ) : (
            <>
              <p>You have {selectedPlanets.length} planet(s) in your wishlist</p>
              <div className={styles.wishlistList}>
                {selectedPlanets.map((planet) => (
                  <PlanetWishlistItem
                    key={planet.name}
                    name={planet.name}
                    thumbnail={planet.thumbnail}
                    onRemove={() => onRemoveFromWishlist(planet.name)}
                  />
                ))}
              </div>
            </>
          )}

          {}
          <AddWishlistItem onAddWishlistItem={onAddWishlistItem} />
        </section>

        <section className="card">
          <h2>Possible destinations</h2>
          <div className={styles.planetCardContainer}>
            {planetData.map((planet) => (
              <PlanetCard
                key={planet.name}
                name={planet.name}
                description={planet.description}
                thumbnail={planet.thumbnail}
                isSelected={selectedPlanets.some(p => p.name === planet.name)}
                onAddOrRemovePlanet={() => onAddOrRemovePlanet(planet.name)}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Destinations;
