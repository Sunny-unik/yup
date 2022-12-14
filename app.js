const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const productRoutes = require("./routes/productRoute");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"));

mongoose.connection.on("error", (err) =>
  console.log(`Error on connection: `, err)
);

app.use(express.json());
app.use("/", productRoutes);

const port = process.env.Port || 4000;
app.listen(port, () => console.log(`App is live on: http://localhost:${port}`));
