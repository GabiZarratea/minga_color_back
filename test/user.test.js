import { expect } from "chai";
import request from "supertest";
import app from "../app.js";

describe("Test on /register path", () => {
  let api = null;
  let server = null;

  before(async () => {
    server = await app.listen(8000);
    api = request(app);
  });
  after((done) => {
    server.close(done);
  });

  describe("POST/users", () => {
    const user = {
      email: "adrsi12an.rga11g1s@ymail.com",
      password: "hola1234",
    };

    it('Should create a new user, and success should return status 201, an object with message: "User created successfully", an object with success: "true"', async () => {
      const response = await api.post(`/api/auth/register`).send(user);

      console.log(response.body);
      console.log(response.statusCode);

      expect(response.statusCode).to.equal(201);
      expect(response.body).to.have.property("success");
      expect(response.body.success).to.equal(true);
    });
  });
});
