const frisby = require("frisby");

require("dotenv").config();

const PORT = process.env.PORT || 3000;

const data = require("../data/link-generate");

const URL = PORT
  ? "https://link-generate-backend.herokuapp.com/"
  : "https://localhost:3000/";

describe("Deploy verify.", () => {
  it("the get request returns a message.", async () => {
    await frisby
      .get(URL)
      .expect("status", 200)
      .then((response) => {
        const { body } = response;
        JSON.parse(body).forEach((item) => {
          expect(data).toContainEqual(item);
        });
      });
  });
});
