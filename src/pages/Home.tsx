import newsData from '@/data/news.json';

export default function Home() {
  return (
    <div className="page home-page">
      <section className="hero">
        <h1>Welcome to TDFC</h1>
        <p>Join us for competitive and recreational soccer</p>
      </section>

      <section className="news-section">
        <h2>Latest News</h2>
        <div className="news-grid">
          {newsData.map((item) => (
            <article key={item.id} className="news-card">
              <h3>{item.title}</h3>
              <time>{item.date}</time>
              <p>{item.content}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
