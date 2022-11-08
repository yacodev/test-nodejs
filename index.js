const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors({ origin: true }));

app.get("/tokenizeOrder", (req, res) => {
  console.log("procesando...");
  res.status(200).send({
    body: "exito",
  });
});

app.listen(3000, () => {
  console.log("Node server listening on the port:", 3000);
});
