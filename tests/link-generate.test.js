const frisby = require("frisby");

const PORT = process.env.PORT || 3000;

const data = require("../data/link-generate");

const URL =
  PORT !== 3000
    ? "https://link-generate-backend.herokuapp.com/"
    : "http://localhost:3000/";

describe("Link generate test.", () => {
  it("should return a link to whatsapp for desktop.", async () => {
    await frisby
      .post(URL, {
        whatsapp: "85989587554",
        message: "Olá",
        type: "web",
      })
      .expect("status", 200)
      .then((response) => {
        const { body } = response;

        const content = JSON.parse(body);

        expect(data.whatsapp_web).toEqual(content.whatsapp);
      });
  });

  it("should return a link to whatsapp for mobile.", async () => {
    await frisby
      .post(URL, {
        whatsapp: "85989587554",
        message: "Olá",
        type: "api",
      })
      .expect("status", 200)
      .then((response) => {
        const { body } = response;

        const content = JSON.parse(body);

        expect(data.whatsapp_api).toEqual(content.whatsapp);
      });
  });
});
