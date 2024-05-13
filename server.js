const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());
//upoload code for project github
const path=require('path');
app.get("/",(req,res)=>{
  app.use(express.static(path.resolve(__dirname, "netflix-ui", "build")));
  res.sendFile(path.resolve(__dirname, "netflix-ui", "build", "index.html"));

})

mongoose
  .connect("mongodb+srv://ravendrayadav933:kh66RUAIF9F0Pl7g@cluster0.qu7vpq6.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,

  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);

app.listen(5000, () => {
  console.log("server started on port 5000");
});