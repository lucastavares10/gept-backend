export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  version: process.env.API_VERSION || '2.0.0',
});
