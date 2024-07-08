const request = require('supertest');
const app = require('../App');

describe('GET /api/search', () => {
  test('should respond with a 200 status code', async () => {
    const response = await request(app).get('/api/search?term=test&media=music');
    expect(response.statusCode).toBe(200);
  });

  test('should return a list of results', async () => {
    const response = await request(app).get('/api/search?term=test&media=music');
    expect(response.body.results).toBeInstanceOf(Array);
  });
});
