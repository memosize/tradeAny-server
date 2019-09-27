import app from "./app";

const PORT = 9093;

app.listen(PORT, () => {
  console.log("Express server listening on port " + PORT);
});