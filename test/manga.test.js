import { expect } from "chai";
import request from "supertest";
import app from "../app.js";

describe("Test on /mangas path", () => {
  let api = null;
  let server = null;

  before(async () => {
    server = await app.listen(8000); //inicia el servidor en el puerto 8000
    api = request(app); //function de supertest returns agente usado para realizar una req HTTP sin iniciar un servidor
  });

  describe("POST/mangas", () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVyaWNAbWguY29tLmFyIiwiaWF0IjoxNjkwNTg0MTU5LCJleHAiOjE2OTExODg5NTl9.CI4Hbm7dlp7SJN3HTPcmExrnKzBs5b81s-BiSAGxn7A";
    const manga = {
      author_id: "649f3b538eb9937b444e896b",
      title: "mangaTest11",
      cover_photo: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg",
      description: "sadasdaadsasdasdsdsadasdasdsadasdasdsadasdasdsadasdasdsadasdasdsadasdasdvsadasdasdsadasdasdsadasdasd",
      category_id: "6499e88747d6f0d7187dff89",
    };

    //test case IT mocha
    it('Should create a new manga and return status 201, an object with success:"ok", an object with id: _id', async () => {
      const response = await api.post(`/api/mangas`).set("Authorization", `Bearer ${token}`).send(manga);

      const _id = response.body.id;
      console.log(response.body);
      console.log(response.statusCode);

      expect(response.statusCode).to.equal(201);
      expect(response.body.success).to.equal("ok");
      expect(response.body.id).to.equal(_id);
    });
  });
  after((done) => {
    server.close(done);
  });
});
