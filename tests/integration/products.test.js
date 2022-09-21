/* eslint-disable max-lines-per-function */
const request = require('supertest');
const app = require('../../src/app');
const { products, postProduct, postProductWithId, patchProduct, inventory3 } = require('./mocks');

describe('Products test', () => {
  it('GET /produtos', async () => {
    const res = await request(app).get('/produtos');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(products);
  });

  describe('GET /produtos/:id', () => {
    it('ok', async () => {
      const res = await request(app).get('/produtos/1');
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual(products[0]);
    });

    it('not found error', async () => {
      const res = await request(app).get('/produtos/10');
      expect(res.statusCode).toBe(404);
      expect(res.body).toEqual({ message: 'Not found.' });
    });
  });

  it('POST /produtos', async () => {
    const res = await request(app).post('/produtos').send(postProduct);
    const inventoryRes = await request(app).get('/produtos/3/estoque');
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual(postProductWithId);
    expect(inventoryRes.body).toEqual(inventory3);
  });

  describe('PATCH /produtos/:id', () => {
    it('ok', async () => {
      const res = await request(app).patch('/produtos/3').send(patchProduct);
      expect(res.statusCode).toBe(204);
    });

    it('not found error', async () => {
      const res = await request(app).patch('/produtos/10').send(patchProduct);
      expect(res.statusCode).toBe(404);
      expect(res.body).toEqual({ message: 'Not found.' });
    });
  });

  describe('DELETE /produtos/:id', () => {
    it('ok', async () => {
      const res = await request(app).delete('/produtos/3');
      expect(res.statusCode).toBe(204);
    });

    it('not found error', async () => {
      const res = await request(app).delete('/produtos/10');
      expect(res.statusCode).toBe(404);
      expect(res.body).toEqual({ message: 'Not found.' });
    });
  });
});