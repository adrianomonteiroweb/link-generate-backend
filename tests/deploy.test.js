const frisby = require("frisby");

const data = require("../data/response-content");

const URL = "https://link-generate-backend.herokuapp.com/";

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
