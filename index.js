import express from 'express';
import BazaFilmow from './bazaFilmow.js';
import Film from './film.js';

const app = express();

app.use(express.static("public"));

app.use(express.text());

app.get("/api/filmy/:id", (req, res) => {
    let id = req.params.id;

    let film = BazaFilmow.getFilm(id);

    if (!film) {
        res.status(404).json({
            error: "Nie ma takiego filmu"
        });
        return;
    }

    res.json(film);
});

app.post("/api/filmy/:id/review", (req, res) => {
    let id = req.params.id;
    let recenzja = req.body;


    if (typeof recenzja != "string") {
        res.sendStatus(400);
        return;
    }

    let typ = BazaFilmow.recenzuj(id, recenzja);

    if (!typ) {
        res.status(404).send("Nie ma takiego filmu");
        return;
    }

    res.send(typ);
});

const port = process.env.PORT || 8080

app.listen(port);
console.log("Serwer działa na porcie " + port);