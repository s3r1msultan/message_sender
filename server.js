import express from "express";
import "dotenv/config";
import emailRoutes from "./routes/emailRoutes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("./views"));

app.use("/send_email", emailRoutes);
app.use("/", (req, res) => {
  res.sendFile("./index.html", { root: "./views" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
