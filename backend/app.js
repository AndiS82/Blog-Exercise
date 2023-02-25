import express from "express";
import cors from "cors";
import multer from "multer";

const app = express();
const PORT = 9898;
const posts = [];
const upload = multer({ dest: './public' })

app.use("/public", express.static("./public"))
app.use(cors())

app.get("/api/posts", (_, res) => {
    res.json(posts)
    //frontend kann auf diese route fetchen und daten bekommen
    // daten werden in json umgewandelt und zum client zurückgeschickt
})

app.post("/api/posts", upload.single("pic"), (req, res) => {
    const post = {
        title: req.body.title,
        text: req.body.text,
        path: req.file.path
    }
    console.log(post, posts)
    posts.push(post)
    res.json(posts)
})

app.listen(PORT, () => console.log("Server läuft auf Port: ", PORT))