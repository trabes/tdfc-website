import teamInfo from '@/data/team-info.json';

export default function Contact() {
  return (
    <div className="page contact-page">
      <h1>Contact Us</h1>
      <section className="contact-info">
        <h2>Get in Touch</h2>
        <div className="contact-details">
          <p>
            <strong>Email:</strong> {teamInfo.contact.email}
          </p>
          {teamInfo.contact.phone && (
            <p>
              <strong>Phone:</strong> {teamInfo.contact.phone}
            </p>
          )}
          {teamInfo.contact.address && (
            <p>
              <strong>Address:</strong> {teamInfo.contact.address}
            </p>
          )}
        </div>
        {teamInfo.contact.socialMedia && (
          <div className="social-media">
            <h3>Follow Us</h3>
            {teamInfo.contact.socialMedia.facebook && (
              <a href={teamInfo.contact.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            )}
            {teamInfo.contact.socialMedia.instagram && (
              <a href={teamInfo.contact.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            )}
            {teamInfo.contact.socialMedia.twitter && (
              <a href={teamInfo.contact.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
