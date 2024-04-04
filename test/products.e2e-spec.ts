import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('ProductsController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/products (GET)', () => {
    return request(app.getHttpServer()).get('/products').expect(200);
    // .expect(({ body }) => {
    //   expect(body).toBeDefined();
    //   expect(body).toBeInstanceOf(Array);
    //   expect(body.length).toBe(0);
    // });
  });
});
