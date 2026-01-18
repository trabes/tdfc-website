import playersData from '@/data/players.json';

export default function Players() {
  return (
    <div className="page players-page">
      <h1>Our Players</h1>
      <div className="players-grid">
        {playersData.map((player) => (
          <div key={player.id} className="player-card">
            <div className="player-number">#{player.jerseyNumber}</div>
            <h3>{player.name}</h3>
            <p className="player-position">{player.position}</p>
            {player.bio && <p className="player-bio">{player.bio}</p>}
            {player.stats && (
              <div className="player-stats">
                <span>Games: {player.stats.gamesPlayed}</span>
                <span>Goals: {player.stats.goals}</span>
                <span>Assists: {player.stats.assists}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
