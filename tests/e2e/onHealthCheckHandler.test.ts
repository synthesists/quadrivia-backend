import { onHealthCheckHandler } from '../../src';

describe('onHealthCheckHandler', () => {
  it('should return 200 and "OK"', async () => {
    const response = await onHealthCheckHandler();
    expect(response).toEqual({ body: JSON.stringify({ message: 'OK' }), statusCode: 200 });
  });
});
