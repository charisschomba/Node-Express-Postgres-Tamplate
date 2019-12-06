import swagger from 'swagger-node-express';

const url = process.env.DOMAIN || 'http:127.0.0.1';
const apiDocs = (app, port) => {
  swagger.setAppHandler(app);
  swagger.configureSwaggerPaths('', '/api-docs', '');
  swagger.configure(`${url}:${port}`, '1.0.0');
};

export default apiDocs;
