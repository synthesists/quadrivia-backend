import request from 'supertest';

import App from '../../src/app';

describe('/health', () => {
  const basePath = '/health';
  let app: any;
  beforeEach(() => {
    app = App();
  });

  it('should return 200 and text should be "OK"', async () => {
    const response = await request(app).get(basePath);
    expect(response.status).toBe(200);
    expect(response.text).toEqual('OK');
  });
});
