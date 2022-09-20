/* eslint-disable max-lines-per-function */
const request = require('supertest');
const app = require('../../src/app');
const {
  categories,
  postCategory,
  postCategoryWithId,
  patchCategory,
} = require('./mocks');

describe('Categories test', () => {
  it('GET /categorias', async () => {
    const res = await request(app).get('/categorias');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(categories);
  });

  it('GET /categorias/:id', async () => {
    const res = await request(app).get('/categorias/1');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(categories[0]);
  });

  it('POST /categorias', async () => {
    const res = await request(app).post('/categorias').send(postCategory);
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual(postCategoryWithId);
  });

  it('PATCH /categorias/:id', async () => {
    const res = await request(app).patch('/categorias/3').send(patchCategory);
    expect(res.statusCode).toBe(204);
  });

  it('DELETE /categorias/:id', async () => {
    const res = await request(app).delete('/categorias/3');
    expect(res.statusCode).toBe(204);
  });
});