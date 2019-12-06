import users from './users';

const routes = (app) => {
  app.use('/api/v1', users);
};

export default routes;
