import { ENV } from './env';
import * as express from 'express';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';
import { server } from './server';

const app = express();
app.use(cors());
app.use(cookieParser());

app.use('/healthy', async (req, res) => {
  res.send({
    message: 'Marketplace Gateway Healthy',
  });
});

(async () => {
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });
  app.listen({ port: ENV.PORT }, () => {
    console.log(`listening at :${ENV.PORT}...`);
  });
})();
