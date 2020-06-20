import express, { Request, Response } from 'express';
// import bodyParser from 'body-parser';

export default () => {
  const app = express();
  // app.use(bodyParser.json());

  app.get('/health', (req: Request, res: Response) => res.send('OK'));
  // app.use('/api/v1/', routes);

  return app;
};
