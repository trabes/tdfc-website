import teamInfo from '@/data/team-info.json';

export default function About() {
  return (
    <div className="page about-page">
      <h1>About {teamInfo.name}</h1>
      <section className="about-section">
        <h2>Our History</h2>
        <p>{teamInfo.history}</p>
      </section>
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>{teamInfo.mission}</p>
      </section>
    </div>
  );
}
