import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());

app.post("/api/search", async (req, res) => {
  const query = req.body.query;
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/comments?postId=3"
  );
  const data = await response.json();
  const results = data.filter((item) => item.name.includes(query));
  res.json(results);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
