import express from 'express'
import cors from 'cors'
import multer from 'multer'

const PORT = 9999
const app = express()

// Middleware die uns unser Bild in die gegebene Destination speichert
const upload = multer({ dest: './public' })

// Hier speichern wir unsere Post, bei jedem Server Neustart sind alle Weg
const posts = []

// Um Zugriffe von ausserhalb zu erlauben benötigen wir CORS
// Cors setzt die richtigen Header auf die default werte damit von überall auf unseren Server zugegriffen werden kann. Das kann man natürlich auch beschränken
app.use(cors())

// Wir wollen statische Daten/ unsere Bilder/ ausgeben ohne extra routen definition
// Wenn ein Request mit der Route /public ankommt, schaue bitte in den Ordner public ob du die angefragte ressource findest
// Wenn ja dann liefer sie in eine response aus
app.use('/public', express.static('./public'))

// Wir haben den 1. Punkt hiermit erledigt -> fetch auf diese Route ermöglicht
app.get('/api/posts', (_, res) => {
    res.json(posts)
})

// get route die einen bestimmten post liefert
app.get('/api/posts/:id', (req, res) => {
    res.json(posts[req.params.id])
})
/**
 * 2.
 */
// WICHTIG postpic muss auch im frontend als name für das bild stehen
app.post('/api/posts', upload.single('postpic'), (req, res) => {
    const post = {
        title: req.body.title,
        date: new Date(),
        text: req.body.text,
        path: req.file.path
    }
    posts.push(post)
    console.log(req.body, posts);

    // res.json(posts)
    res.status(200).end()
})

app.delete('/api/posts/:id', (req, res) => {
    // const length = posts.length
    // for (let i = 0; i < length; i++) {
    //     posts.shift()
    // }
    const key = req.params.id
    posts.splice(key, 1);
    res.json(posts);
    // posts.slice(0, posts.length)
    // res.status(200).end()
})

/**
 * POST     Create
 * GET      Read
 * PUT      Update
 * DELETE   Delete
 */

/**
 * Autos
 * /api/car
 * GET
 * POST
 * PUT
 * DELETE
 */
// *******************************************************************************************+
// MovieDB API Beispiel
// app.get('/trending/all/day',(req,res) =>{
//     // hole alle trend filme von den letzten 24h aus der datenbank
//     const alleFilme = []
//     res.json(alleFilme)
// }
// )

/**
 * Frontend Example
 */
// fetch('http://localhost:9999/api/posts) // Default Methode GET
// .then(response => response.json() )
// .then(data => ) -> ab hier ist data wieder ein richtiges Array
/**
 * 
 */


app.listen(PORT, () => console.log('Läuft auf', PORT))