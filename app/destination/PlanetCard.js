


const PlanetCard = ({ name, description, thumbnail, isSelected, onAddOrRemovePlanet }) => {
    return (
      <div className="planetCard">
        <img className="planetThumbnail" src={thumbnail} alt={name} />
        <div className="planetDescription">
          <h2>{name.toUpperCase()} {isSelected ? "- SELECTED" : ""}</h2>
          <p>{description}</p>
        </div>
        <button 
          className="roundButton" 
          onClick={onAddOrRemovePlanet}
        >
          {isSelected ? "REMOVE" : "ADD PLANET"}
        </button>
      </div>
    );
  };
  
  export default PlanetCard;
  