const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const path = require("path");

dotenv.config({ path: "./config/config.env" });
connectDB();

const app = express();

app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/user"));
app.use("/api/products", require("./routes/product"));
app.use("/api/cart", require("./routes/cart"));
app.use("/api/orders", require("./routes/order"));
app.use("/api/address", require("./routes/address"));
app.use("", require("./routes/stripe"));

const allowedOrigin =
  process.env.NODE_ENV === "production"
    ? "https://eventwave-client.onrender.com"
    : "http://localhost:3000";

app.use(
  cors({
    credentials: true,
    origin: allowedOrigin,
  })
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
  });
}

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
