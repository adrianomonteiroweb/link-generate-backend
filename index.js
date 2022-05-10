const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  if (process.env.PORT) {
    console.log("Online em https://link-generate-backend.herokuapp.com/");
  } else {
    console.log(`Online em http://localhost:${PORT}`);
  }
});
