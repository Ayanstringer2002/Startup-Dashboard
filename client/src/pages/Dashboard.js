import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_STARTUPS = gql`
  query GetStartups($category: String) {
    getStartups(category: $category) {
      id
      name
      category
      description
      trendScore
    }
  }
`;

export default function Dashboard() {
  const { loading, error, data } = useQuery(GET_STARTUPS, {
    variables: { category: "AI" },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div>
      <h1>Startup Trends (AI)</h1>
      <ul>
        {data.getStartups.map(startup => (
          <li key={startup.id}>
            <strong>{startup.name}</strong> - {startup.trendScore}
            <p>{startup.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
