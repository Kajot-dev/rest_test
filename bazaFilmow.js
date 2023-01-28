import Film from "./film.js";

export default class BazaFilmow {
    static filmy = new Map();

    static pozytywneSlowa = ["dobry", "ciekawy"];
    static negatywneSlowa = ["zły", "nudny"];

    static dodajFilm(film) {
        BazaFilmow.filmy.set(film.id, film);
    }

    static getFilm(id) {
        return BazaFilmow.filmy.get(id);
    }

    static recenzuj(id, recenzja) {

        let film = BazaFilmow.getFilm(id);

        if (!film) return null;

        let slowa = recenzja.toLowerCase().replaceAll("\n", " ").split(" ");

        let pozytywne = 0;
        let negatywne = 0;

        for (let slowo of slowa) {
            if (BazaFilmow.pozytywneSlowa.includes(slowo)) {
                pozytywne++;
            } else if (BazaFilmow.negatywneSlowa.includes(slowo)) {
                negatywne++;
            }
        }
         
        if (pozytywne > negatywne) {
            film.recordPositiveSentiment();
            return "POSITIVE";
        } else if (negatywne > pozytywne) {
            film.recordNegativeSentiment();
            return "NEGATIVE";
        }
        return "NEUTRAL/UNKNOWN";

    }
}

BazaFilmow.dodajFilm(new Film("Pulp Fiction", "Quentin Tarantino"));
BazaFilmow.dodajFilm(new Film("Kill Bill", "Quentin Tarantino"));
BazaFilmow.dodajFilm(new Film("Inglourious Basterds", "Quentin Tarantino"));
BazaFilmow.dodajFilm(new Film("Shrek", "Adam Adamowski"));
BazaFilmow.dodajFilm(new Film("Star Wars", "George Lucas"));