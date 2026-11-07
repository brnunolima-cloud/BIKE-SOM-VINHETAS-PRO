
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/status", (req, res) => {
  res.json({
    sistema: "BIKE SOM STUDIO",
    status: "online"
  });
});

app.listen(PORT, () => {
  console.log(`BIKE SOM STUDIO rodando na porta ${PORT}`);
});
