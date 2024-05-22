class ModelFact {
  constructor() {
    this.facts = [
    "La cacca può avere vari colori a seconda di cosa mangi e della tua salute. Il marrone è il colore più comune a causa della bile, ma può anche essere verde (da verdure o cibi ricchi di ferro), rossa (da barbabietole o sanguinamento intestinale), o nera (da liquirizia o sanguinamento nello stomaco).",
    "Una persona media produce circa 0,9 kg di cacca al giorno. Questo significa che una persona media produce più di 320 kg di cacca all'anno!",
    "La cacca fossilizzata è conosciuta come coprolite. Questi reperti possono dare agli scienziati preziose informazioni sulle diete e sugli ambienti degli antichi animali, inclusi i dinosauri.",
    "I wombat, mammiferi australiani, producono cacca a forma di cubo. Questo particolare adattamento aiuta la loro cacca a non rotolare via, permettendo ai wombat di marcare il loro territorio in modo efficace.",
    "Il record mondiale per la cacca più lunga è di 7,92 metri (26 piedi). È stato stabilito nel 1995 da una donna che seguiva una dieta ricca di fibre.",
    "Gli astronauti devono affrontare sfide uniche con i loro bisogni fisiologici. Nelle prime missioni spaziali, gestire la cacca era un compito complicato. Ora, le astronavi moderne hanno sistemi avanzati per raccogliere e trattare i rifiuti umani.",
    "Alcune culture usano la cacca animale nella medicina tradizionale. Ad esempio, in alcune parti dell'Africa, la cacca di elefante è bruciata per creare fumo che si ritiene aiuti a curare il mal di testa.",
    "I trapianti di microbiota fecale sono una procedura medica in cui la cacca di un donatore sano viene trapiantata nell'intestino di una persona malata per ripristinare i batteri intestinali sani. È usato per trattare infezioni come il Clostridium difficile.",
    "La cacca di alcuni uccelli marini e pipistrelli, conosciuta come guano, è estremamente ricca di azoto, fosforo e potassio, rendendola un fertilizzante naturale molto efficace. Il guano era così prezioso che nel 19° secolo alcuni paesi si contesero le isole ricche di guano.",
    "La cacca ha un suo posto nella cultura popolare e nell'umorismo. Fumetti, libri per bambini, e film spesso includono riferimenti alla cacca per strappare una risata. Uno degli esempi più famosi è il libro per bambini 'Everyone Poops' di Taro Gomi, che insegna ai bambini che fare la cacca è una parte naturale della vita."
];

  }

  addFact(fact) {
    this.facts.push(fact);
  }

  getFact() {
    return this.facts[Math.floor(Math.random() * this.facts.length)];
  }
}

module.exports = ModelFact;