import styles from './page.module.css'; 

const OurPartners = () => {
  const partners = [
    {
      name: 'Alphabet',
      logo: '/business_partners/alphabet-logo.png',
      description: 'Providing AI-driven navigation systems and data analysis for our missions.',
    },
    {
      name: 'Amazon',
      logo: '/business_partners/amazon_logo.png',
      description: 'Supporting us with cloud infrastructure and smart logistics solutions.',
    },
    {
      name: 'CBC',
      logo: '/business_partners/CBC_Logo_White.png',
      description: 'Broadcasting our missions and sharing our story with the world.',
    },
    {
      name: 'Microsoft',
      logo: '/business_partners/Microsoft-Logo-white.png',
      description: 'Partnering in software development and security for interstellar systems.',
    },
    {
      name: 'NYU',
      logo: '/business_partners/nyu-logo.png',
      description: 'Collaborating on space education and research programs.',
    },
    {
      name: 'Queen’s University',
      logo: '/business_partners/QueensLogo_white.png',
      description: 'Conducting joint research in space science and exploration.',
    },
    {
      name: 'Samsung',
      logo: '/business_partners/samsung-logo.png',
      description: 'Providing cutting-edge hardware and display technology.',
    },
    {
      name: 'Sodexo',
      logo: '/business_partners/sodexo-logo.png',
      description: 'Ensuring quality life support services for long-term missions.',
    },
  ];

  return (
    <div className={styles.partnersSection}>
      <p>
        We collaborate with world-class companies and institutions to make space exploration smarter, safer, and more inspiring.
      </p>
      <div className={styles.partnerGrid}>
        {partners.map((partner) => (
          <div className={styles.partnerCard} key={partner.name}>
            <img src={partner.logo} alt={partner.name} />
            <h4>{partner.name}</h4>
            <p>{partner.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPartners;
