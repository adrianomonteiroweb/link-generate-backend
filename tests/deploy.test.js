const frisby = require("frisby");

const PORT = process.env.PORT || 3338;

const data = require("../data/link-generate");

const URL =
  PORT !== 3000
    ? "https://link-generate-backend.herokuapp.com/"
    : "http://localhost:3000/";

describe("Deploy verify.", () => {
  it("the get request returns a message.", async () => {
    await frisby
      .get(URL)
      .expect("status", 200)
      .then((response) => {
        const { body } = response;

        const content = JSON.parse(body);
        expect(data.message).toEqual(content.message);
      });
  });
});
