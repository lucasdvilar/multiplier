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

  describe('GET /categorias/:id', () => {
    it('ok', async () => {
      const res = await request(app).get('/categorias/1');
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual(categories[0]);
    });

    it('not found error', async () => {
      const res = await request(app).get('/categorias/10');
      expect(res.statusCode).toBe(404);
      expect(res.body).toEqual({ message: 'Not found.' });
    });
  });

  it('POST /categorias', async () => {
    const res = await request(app).post('/categorias').send(postCategory);
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual(postCategoryWithId);
  });

  describe('PATCH /categorias/:id', () => {
    it('ok', async () => {
      const res = await request(app).patch('/categorias/3').send(patchCategory);
      expect(res.statusCode).toBe(204);
    });

    it('not found error', async () => {
      const res = await request(app).patch('/categorias/10').send(patchCategory);
      expect(res.statusCode).toBe(404);
      expect(res.body).toEqual({ message: 'Not found.' });
    });
  });

  describe('DELETE /categorias/:id', () => {
    it('ok', async () => {
      const res = await request(app).delete('/categorias/3');
      expect(res.statusCode).toBe(204);
    });

    it('not found error', async () => {
      const res = await request(app).delete('/categorias/10');
      expect(res.statusCode).toBe(404);
      expect(res.body).toEqual({ message: 'Not found.' });
    });
  });
});