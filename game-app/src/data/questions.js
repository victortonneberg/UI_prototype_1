export const categories = [
  { id: 1, name: "Variabler", diceRange: [1, 2], color: "#8B4513" },
  { id: 2, name: "Feilsøking", diceRange: [3, 4], color: "#DC143C" },
  { id: 3, name: "Betinget logikk", diceRange: [5, 6], color: "#FF8C00" },
  { id: 4, name: "Arrayer og objekter", diceRange: [7, 8], color: "#4169E1" },
  { id: 5, name: "Løkker", diceRange: [9, 10], color: "#9370DB" },
  { id: 6, name: "Funksjoner", diceRange: [11, 12], color: "#2E8B57" },
  { id: 7, name: "Brukerinput", diceRange: [13, 14], color: "#20B2AA" },
  { id: 8, name: "Datatyper", diceRange: [15, 16], color: "#FF6B6B" },
  { id: 9, name: "Matematikk", diceRange: [17, 18], color: "#FFD700" },
  { id: 10, name: "Strenger", diceRange: [19, 20], color: "#8A2BE2" }
];

export const questions = {
  1: { // Variabler
    easy: [
      {
        question: "Hvordan deklarerer du en variabel i JavaScript?",
        options: ["let navn;", "variable navn;", "var navn ==;", "string navn;"],
        correctAnswer: 0
      },
      {
        question: "Hvilket nøkkelord brukes for å lage en konstant?",
        options: ["var", "let", "const", "constant"],
        correctAnswer: 2
      }
    ],
    medium: [
      {
        question: "Hva er forskjellen mellom let og var?",
        options: ["Ingen forskjell", "let er block-scoped, var er function-scoped", "var er nyere", "let er raskere"],
        correctAnswer: 1
      },
      {
        question: "Kan du endre verdien til en const variabel?",
        options: ["Ja, alltid", "Nei, aldri", "Bare hvis det er et objekt", "Bare med reassignment"],
        correctAnswer: 1
      }
    ],
    hard: [
      {
        question: "Hva skjer med var i en block scope?",
        options: ["Den er block scoped", "Den er function scoped og lekker ut", "Gir syntaksfeil", "Blir undefined"],
        correctAnswer: 1
      },
      {
        question: "Hva er hoisting i JavaScript?",
        options: ["En feil", "Variabler flyttes til toppen av scope", "En funksjon", "En loop"],
        correctAnswer: 1
      }
    ]
  },
  2: { // Feilsøking
    easy: [
      {
        question: "Hva brukes console.log() til?",
        options: ["Slette kode", "Skrive ut verdier i konsollen", "Lage variabler", "Stoppe programmet"],
        correctAnswer: 1
      },
      {
        question: "Hvor finner du feilmeldinger i nettleseren?",
        options: ["I HTML", "I CSS-filen", "I Developer Console", "I URL-en"],
        correctAnswer: 2
      }
    ],
    medium: [
      {
        question: "Hva betyr 'undefined' i JavaScript?",
        options: ["En feil", "Variabelen er deklarert men har ingen verdi", "Variabelen finnes ikke", "Null verdi"],
        correctAnswer: 1
      },
      {
        question: "Hvilket verktøy brukes for å sette breakpoints?",
        options: ["console.log()", "debugger", "alert()", "prompt()"],
        correctAnswer: 1
      }
    ],
    hard: [
      {
        question: "Hva er en ReferenceError?",
        options: ["Syntaksfeil", "Forsøk på å bruke en udefinert variabel", "Type-konflikt", "Matematisk feil"],
        correctAnswer: 1
      },
      {
        question: "Hvordan fanger du opp feil i JavaScript?",
        options: ["if-else", "try-catch", "for-loop", "switch"],
        correctAnswer: 1
      }
    ]
  },
  3: { // Betinget logikk
    easy: [
      {
        question: "Hvordan skriver du en if-statement?",
        options: ["if (condition) {}", "if condition then {}", "if: condition {}", "condition if {}"],
        correctAnswer: 0
      },
      {
        question: "Hva brukes for å sjekke likhet med type?",
        options: ["=", "==", "===", "equals"],
        correctAnswer: 2
      }
    ],
    medium: [
      {
        question: "Hva er en ternary operator?",
        options: ["if...else", "? :", "switch", "&&"],
        correctAnswer: 1
      },
      {
        question: "Hva returnerer: true && false?",
        options: ["true", "false", "undefined", "null"],
        correctAnswer: 1
      }
    ],
    hard: [
      {
        question: "Hva er forskjellen mellom == og ===?",
        options: ["Ingen", "=== sjekker også datatype", "== er deprecated", "=== er raskere"],
        correctAnswer: 1
      },
      {
        question: "Hva er falsy verdier i JavaScript?",
        options: ["Bare false", "false, 0, '', null, undefined, NaN", "Bare 0", "Bare null"],
        correctAnswer: 1
      }
    ]
  },
  4: { // Arrayer og objekter
    easy: [
      {
        question: "Hvordan lager du et array?",
        options: ["let arr = []", "let arr = {}", "array arr = []", "let arr = ()"],
        correctAnswer: 0
      },
      {
        question: "Hvordan lager du et objekt?",
        options: ["let obj = []", "let obj = {}", "object obj = {}", "let obj = ()"],
        correctAnswer: 1
      }
    ],
    medium: [
      {
        question: "Hvordan får du tilgang til første element i et array?",
        options: ["arr[1]", "arr[0]", "arr.first()", "arr.get(0)"],
        correctAnswer: 1
      },
      {
        question: "Hvordan legger du til en egenskap i et objekt?",
        options: ["obj.newProp = value", "obj->newProp = value", "obj::newProp = value", "obj add newProp"],
        correctAnswer: 0
      }
    ],
    hard: [
      {
        question: "Hva gjør array.map()?",
        options: ["Sorterer array", "Lager nytt array med transformerte verdier", "Sletter elementer", "Finner et element"],
        correctAnswer: 1
      },
      {
        question: "Hvordan kopierer du et objekt (shallow copy)?",
        options: ["obj.copy()", "{...obj}", "Object.copy(obj)", "new Object(obj)"],
        correctAnswer: 1
      }
    ]
  },
  5: { // Løkker
    easy: [
      {
        question: "Hvordan starter du en for-loop?",
        options: ["for (let i = 0; i < 10; i++)", "loop i to 10", "for i in 10", "repeat 10 times"],
        correctAnswer: 0
      },
      {
        question: "Hva gjør 'break' i en loop?",
        options: ["Pauser loopen", "Stopper loopen helt", "Hopper til neste iterasjon", "Ingenting"],
        correctAnswer: 1
      }
    ],
    medium: [
      {
        question: "Hva er forskjellen mellom for og while?",
        options: ["Ingen", "for har innebygd teller, while har betingelse", "while er raskere", "for er deprecated"],
        correctAnswer: 1
      },
      {
        question: "Hva gjør 'continue' i en loop?",
        options: ["Stopper loopen", "Hopper til neste iterasjon", "Restarter loopen", "Pauser loopen"],
        correctAnswer: 1
      }
    ],
    hard: [
      {
        question: "Hva er forskjellen mellom for...of og for...in?",
        options: ["Ingen", "for...of itererer verdier, for...in itererer keys", "for...of er raskere", "for...in er deprecated"],
        correctAnswer: 1
      },
      {
        question: "Hva er en do...while loop?",
        options: ["En for-loop", "En loop som kjører minst én gang", "En while-loop", "En deprecated loop"],
        correctAnswer: 1
      }
    ]
  },
  6: { // Funksjoner
    easy: [
      {
        question: "Hvordan lager du en funksjon?",
        options: ["function minFunc() {}", "func minFunc() {}", "def minFunc() {}", "method minFunc() {}"],
        correctAnswer: 0
      },
      {
        question: "Hvordan kaller du en funksjon som heter 'start'?",
        options: ["start;", "call start;", "start();", "run start();"],
        correctAnswer: 2
      }
    ],
    medium: [
      {
        question: "Hva er en arrow function?",
        options: ["function() => {}", "() => {}", "-> () {}", "=> function() {}"],
        correctAnswer: 1
      },
      {
        question: "Hva returnerer en funksjon uten return?",
        options: ["null", "0", "undefined", "false"],
        correctAnswer: 2
      }
    ],
    hard: [
      {
        question: "Hva er en callback function?",
        options: ["En funksjon som returnerer", "En funksjon sendt som argument", "En arrow function", "En async funksjon"],
        correctAnswer: 1
      },
      {
        question: "Hva er en higher-order function?",
        options: ["En stor funksjon", "En funksjon som tar/returnerer funksjon", "En nested funksjon", "En async funksjon"],
        correctAnswer: 1
      }
    ]
  },
  7: { // Brukerinput
    easy: [
      {
        question: "Hvordan får du brukerinput via popup?",
        options: ["input()", "prompt()", "ask()", "getUserInput()"],
        correctAnswer: 1
      },
      {
        question: "Hvordan viser du en melding til brukeren?",
        options: ["alert()", "message()", "show()", "display()"],
        correctAnswer: 0
      }
    ],
    medium: [
      {
        question: "Hvordan får du verdien fra et input-felt?",
        options: ["input.value", "input.text", "input.getValue()", "input.content"],
        correctAnswer: 0
      },
      {
        question: "Hva returnerer prompt() hvis brukeren trykker Cancel?",
        options: ["undefined", "null", "false", "''"],
        correctAnswer: 1
      }
    ],
    hard: [
      {
        question: "Hvordan validerer du brukerinput?",
        options: ["Automatisk", "Med if-statements og betingelser", "Med alert()", "Med prompt()"],
        correctAnswer: 1
      },
      {
        question: "Hvordan konverterer du string input til nummer?",
        options: ["toNumber()", "parseInt() eller Number()", "convert()", "makeNumber()"],
        correctAnswer: 1
      }
    ]
  },
  8: { // Datatyper
    easy: [
      {
        question: "Hvilken datatype er 42?",
        options: ["String", "Number", "Boolean", "Object"],
        correctAnswer: 1
      },
      {
        question: "Hvilken datatype er 'Hei'?",
        options: ["Number", "String", "Text", "Character"],
        correctAnswer: 1
      }
    ],
    medium: [
      {
        question: "Hva er resultatet av: typeof null?",
        options: ["'null'", "'undefined'", "'object'", "'number'"],
        correctAnswer: 2
      },
      {
        question: "Hvilken datatype er true/false?",
        options: ["Number", "String", "Boolean", "Binary"],
        correctAnswer: 2
      }
    ],
    hard: [
      {
        question: "Hva er primitive datatyper i JavaScript?",
        options: ["Bare number og string", "String, Number, Boolean, Null, Undefined, Symbol, BigInt", "Bare objekter", "Arrays"],
        correctAnswer: 1
      },
      {
        question: "Hva er forskjellen mellom null og undefined?",
        options: ["Ingen", "null er eksplisitt tom, undefined er ikke-tildelt", "undefined er feil", "null er deprecated"],
        correctAnswer: 1
      }
    ]
  },
  9: { // Matematikk
    easy: [
      {
        question: "Hva er resultatet av: 5 + 3?",
        options: ["53", "8", "15", "35"],
        correctAnswer: 1
      },
      {
        question: "Hvilket operator brukes for multiplikasjon?",
        options: ["x", "*", "mult", "×"],
        correctAnswer: 1
      }
    ],
    medium: [
      {
        question: "Hva gjør % operatoren?",
        options: ["Prosent", "Modulo (rest etter divisjon)", "Deling", "Multiplikasjon"],
        correctAnswer: 1
      },
      {
        question: "Hva er resultatet av: 10 % 3?",
        options: ["3", "1", "0.33", "3.33"],
        correctAnswer: 1
      }
    ],
    hard: [
      {
        question: "Hva gjør Math.floor()?",
        options: ["Runder opp", "Runder ned til nærmeste heltall", "Fjerner desimaler", "Returnerer absolutt verdi"],
        correctAnswer: 1
      },
      {
        question: "Hvordan genererer du et tilfeldig tall mellom 0 og 1?",
        options: ["Math.random()", "random()", "Math.rand()", "getRandom()"],
        correctAnswer: 0
      }
    ]
  },
  10: { // Strenger
    easy: [
      {
        question: "Hvordan lager du en string?",
        options: ["let str = 'tekst'", "string str = 'tekst'", "let str = tekst", "text str = 'tekst'"],
        correctAnswer: 0
      },
      {
        question: "Hvordan slår du sammen to strenger?",
        options: ["str1 + str2", "str1.add(str2)", "concat(str1, str2)", "str1 & str2"],
        correctAnswer: 0
      }
    ],
    medium: [
      {
        question: "Hvordan får du lengden på en string?",
        options: ["str.size", "str.length", "str.count", "str.len()"],
        correctAnswer: 1
      },
      {
        question: "Hvordan gjør du en string til store bokstaver?",
        options: ["str.uppercase()", "str.toUpperCase()", "str.upper()", "str.caps()"],
        correctAnswer: 1
      }
    ],
    hard: [
      {
        question: "Hva er en template literal?",
        options: ["'string'", "`string med ${variabel}`", "String()", "new String()"],
        correctAnswer: 1
      },
      {
        question: "Hvordan henter du et substring fra posisjon 0 til 5?",
        options: ["str.substring(0, 5)", "str.sub(0, 5)", "str.slice(0, 5)", "Både A og C"],
        correctAnswer: 3
      }
    ]
  }
};

export const getCategoryFromDice = (diceValue) => {
  return categories.find(cat =>
    diceValue >= cat.diceRange[0] && diceValue <= cat.diceRange[1]
  );
};
