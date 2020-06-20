import serverless from 'serverless-http';

import App from './app';

// eslint-disable-next-line import/prefer-default-export
export const handler = serverless(App());
