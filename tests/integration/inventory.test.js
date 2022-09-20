/* eslint-disable max-lines-per-function */
const request = require('supertest');
const app = require('../../src/app');
const { inventory1, patchInventory } = require('./mocks');

describe('Inventory test', () => {
  it('GET /produtos/:id/estoque', async () => {
    const res = await request(app).get('/produtos/1/estoque');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(inventory1);
  });

  it('PATCH /produtos/:id/estoque', async () => {
    const res = await request(app).patch('/produtos/3/estoque').send(patchInventory);
    expect(res.statusCode).toBe(204);
  });

  it('DELETE /produtos/:id/estoque', async () => {
    const res = await request(app).delete('/produtos/3/estoque');
    expect(res.statusCode).toBe(501);
  });
});