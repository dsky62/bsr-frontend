import React, { useEffect, useState } from 'react';

// Mock API call to fetch team data
const fetchTeamData = async () => {
  // This would be replaced by an actual API call
  return {
    roster: ['Player 1', 'Player 2', 'Player 3'],
    stats: { wins: 10, losses: 2 },
    schedule: ['Opponent A', 'Opponent B', 'Opponent C'],
    systemInfo: 'Some system information here',
  };
};

const PublicTeamDetail = () => {
  const [teamData, setTeamData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchTeamData();
      setTeamData(data);
    };
    getData();
  }, []);

  if (!teamData) return <div>Loading...</div>;

  return (
    <div>
      <h1>Team Details</h1>
      <h2>Roster</h2>
      <ul>
        {teamData.roster.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
      <h2>Stats</h2>
      <p>Wins: {teamData.stats.wins}</p>
      <p>Losses: {teamData.stats.losses}</p>
      <h2>Schedule</h2>
      <ul>
        {teamData.schedule.map((match, index) => (
          <li key={index}>{match}</li>
        ))}
      </ul>
      <h2>System Info</h2>
      <p>{teamData.systemInfo}</p>
    </div>
  );
};

export default PublicTeamDetail;
