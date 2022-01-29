import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { LeadModule } from "./../src/lead/lead.module";

describe("Lead endpoint (e2e)", () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [LeadModule]
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it("/lead (GET)", () => {
    return request(app.getHttpServer())
      .get("/lead")
      .expect(200)
      .expect("lead");
  });
});
