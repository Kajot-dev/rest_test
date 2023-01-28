


export default class Film {
    pozytywneRecenzje = 0;
    negatywneRecenzje = 0;


    constructor(tytul, rezyser) {
        this.tytul = tytul;
        this.rezyser = rezyser;
    }

    get id() {
        return this.tytul.toLowerCase().replaceAll(" ", "");
    }

    recordPositiveSentiment() {
        this.pozytywneRecenzje++;
    }

    recordNegativeSentiment() {
        this.negatywneRecenzje++;
    }


    toJSON() {
        return {
            tytul: this.tytul,
            rezyser: this.rezyser,
            pozytywneRecenzje: this.pozytywneRecenzje,
            negatywneRecenzje: this.negatywneRecenzje
        }
    }

    static fromJSON(json) {
        const film = new Film(json.tytul, json.rezyser);
        return film;
    }
}