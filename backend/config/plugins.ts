module.exports = ({ env }) => ({
  documentation: {
    enabled: true,
    config: {
      info: {
        version: '1.0.0',
        title: 'API Docs',
        description: 'Generated API documentation',
      },
      'x-strapi-config': {
        plugins: ['upload', 'users-permissions'],
        path: '/documentation',
      },
    },
  },
});

