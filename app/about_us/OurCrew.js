import styles from './page.module.css';


const crewMembers = [
  {
    name: 'Anousheh Ansari',
    role: 'Flight Engineer',
    image: '/crew/image-anousheh-ansari.png',
    description: 'Anousheh is the first female private space explorer. She brings unmatched expertise in engineering and leadership.',
  },
  {
    name: 'Douglas Hurley',
    role: 'Commander',
    image: '/crew/image-douglas-hurley.png',
    description: 'Doug is a veteran astronaut and pilot, responsible for leading crewed spaceflights with precision and skill.',
  },
  {
    name: 'Mark Shuttleworth',
    role: 'Mission Specialist',
    image: '/crew/image-mark-shuttleworth.png',
    description: 'Mark is an entrepreneur and space traveler, passionate about pushing the boundaries of private space travel.',
  },
  {
    name: 'Victor Glover',
    role: 'Pilot',
    image: '/crew/image-victor-glover.png',
    description: 'Victor is a skilled pilot with extensive experience in space missions, known for his calm under pressure.',
  },
];

const OurCrew = () => {
  return (
<div className={styles.crewSection}>
  {crewMembers.map((member) => (
    <div className={styles.crewCard} key={member.name}>
      <img src={member.image} alt={member.name} />
      <div className={styles.crewCardContent}>
        <h3>{member.name}</h3>
        <h5>{member.role}</h5>
        <p>{member.description}</p>
      </div>
    </div>
  ))}
</div>

  );
};

export default OurCrew;
