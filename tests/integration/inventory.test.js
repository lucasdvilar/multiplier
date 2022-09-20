/* eslint-disable max-lines-per-function */
const request = require('supertest');
const app = require('../../src/app');
const { inventory1, patchInventory } = require('./mocks');

describe('Inventory test', () => {
  describe('GET /produtos/:id/estoque', () => {
    it('ok', async () => {
      const res = await request(app).get('/produtos/1/estoque');
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual(inventory1);
    });

    it('not found error', async () => {
      const res = await request(app).get('/produtos/10/estoque');
      expect(res.statusCode).toBe(404);
      expect(res.body).toEqual({ message: 'Not found.' });
    });
  });

  describe('PATCH /produtos/:id/estoque', () => {
    it('ok', async () => {
      const res = await request(app).patch('/produtos/1/estoque').send(patchInventory);
      expect(res.statusCode).toBe(204);
    });

    it('not found error', async () => {
      const res = await request(app).patch('/produtos/10/estoque').send(patchInventory);
      expect(res.statusCode).toBe(404);
      expect(res.body).toEqual({ message: 'Not found.' });
    });
  });

  it('DELETE /produtos/:id/estoque', async () => {
    const res = await request(app).delete('/produtos/1/estoque');
    expect(res.statusCode).toBe(501);
  });
});