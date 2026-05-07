# Korpa2

Malo naprednija jednostranična šoping-korpa u odnosu na raniju verziju — **klase, zajedničko stanje (stanje na lageru / količine) i metode**, bez Reacta ili build alata.

## Šta aplikacija uključuje

- Prikaz proizvoda u gridu iz lokalnog objekta „kataloga” (`PROIZVODI`).
- **Korpa**: dodavanje, +/- količina, uklanjanje stavke, ukupna cena, broj komada pored ikone.
- **Filteri** po tipu proizvoda (Sweatshirt, Jacket, Shirt) pomoću čekboksova.
- **Modal** „View more details” sa galerijom (Splide + thumbnails).

## Tehnologije

- HTML5, CSS3 (grid/flexbox)
- JavaScript (ES klase, publisher–subscriber preko `Cart.subscribe` / `Cart.notify`)
- [Splide](https://splidejs.com/) 4.1.4 — uključeno preko CDN-a

## Pokretanje

1. Kloniraj repozitorijum.
2. Otvori [`index.html`](index.html) u pregledaču **ili** pokreni lokalni server u korenu projekta (npr. `npx serve` ili Live Server u editoru).

Nije potrebno `npm install` — projekt nema `package.json`.

## Struktura

```
├── index.html
├── README.md
├── css/
│   ├── Korpa1.css      # globalni layout, header/footer, modal
│   └── korpaFinal1.css # proizvodi, korpa, Splide
├── js/
│   └── korpaFinal1.js  # podaci + klase + događaji
└── Images/
    └── shopping_cart_*.svg
```

### Slike proizvoda

U [`js/korpaFinal1.js`](js/korpaFinal1.js) putanje su oblika `./images/Naziv.png`. Dodaj folder **`images/`** u koren projekta sa traženim PNG fajlovima (ili prilagodi putanje ako koristiš `Images/`; na Unix sistemima obrati pažnju na velika i mala slova u nazivima putanja).

## Za učenje / demonstracije

Projekat je namenjen **vežbi JavaScript obrasca**: nasleđivanje (`ProductInfo` → `Product` / `CartItem`), kolekcije pretplatnika na događaje (`add_to_cart`, `increase`, `decrease`), sinhronizacija **lage** na kartici proizvoda i u korpi.

---

© Edukativna stranica — vidi tekst u podnožju strane.
