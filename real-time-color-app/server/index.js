const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Merhaba...");
});

let lastColor = "#282c34";

io.on("connection", (socket) => {
  console.log("Bir kullanıcı bağlandı!");

  socket.emit("receive", lastColor);

  socket.on("newColor", (color) => {
    console.log(color);

    lastColor = color;
    io.emit("receive", color);
  });

  socket.on("disconnect", () => {
    console.log("Bir kullanıcı ayrıldı.");
  });
});

http.listen(3001, () => console.log("Server is up 🚀 🚀"));