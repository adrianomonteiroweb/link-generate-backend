const frisby = require("frisby");

const PORT = process.env.PORT || 3000;

const data = require("../data/link-generate");

const URL =
  PORT !== 3000
    ? "https://link-generate-backend.herokuapp.com/"
    : "http://localhost:3000/";

describe("Link generate test.", () => {
  it("should return a link to whatsapp.", async () => {
    await frisby
      .post(URL, {
        number: "85989587554",
        message: "Olá",
      })
      .expect("status", 200)
      .then((response) => {
        const { body } = response;

        const content = JSON.parse(body);
        expect(data.whatsapp).toEqual(content.whatsapp);
      });
  });
});
