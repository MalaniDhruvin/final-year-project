require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

require("./utils/db");

app.use(express.json());
app.use(
    cors({
        origin: "*",
    })
);

app.use("/api", require("./routes/index"))

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});