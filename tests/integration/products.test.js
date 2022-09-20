/* eslint-disable max-lines-per-function */
const request = require('supertest');
const app = require('../../src/app');
const { products, postProduct, postProductWithId, patchProduct } = require('./mocks');

describe('Products test', () => {
  it('GET /produtos', async () => {
    const res = await request(app).get('/produtos');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(products);
  });

  it('GET /produtos/:id', async () => {
    const res = await request(app).get('/produtos/1');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(products[0]);
  });

  it('POST /produtos', async () => {
    const res = await request(app).post('/produtos').send(postProduct);
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual(postProductWithId);
  });

  it('PATCH /produtos/:id', async () => {
    const res = await request(app).patch('/produtos/3').send(patchProduct);
    expect(res.statusCode).toBe(204);
  });

  it('DELETE /produtos/:id', async () => {
    const res = await request(app).delete('/produtos/3');
    expect(res.statusCode).toBe(204);
  });
});