const fetch = require('node-fetch');

module.exports = {
  Query: {
    getStartups: async (_, { category }) => {
      // Simulated fetch - replace with actual API + preprocessing logic
      const mockData = [
        { id: 1, name: 'AI Nova', category: 'AI', description: 'AI startup', trendScore: 9.1 },
        { id: 2, name: 'GreenGo', category: 'ClimateTech', description: 'Eco startup', trendScore: 8.7 },
      ];
      return category ? mockData.filter(s => s.category === category) : mockData;
    },
  },
};
