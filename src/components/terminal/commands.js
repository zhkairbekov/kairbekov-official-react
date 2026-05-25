export const COMMANDS = {
  help: `Available commands:

  help          show all commands
  about         information about me
  whoami        short bio
  skills        my stack
  stack         full tech stack
  projects      featured projects
  journey       career timeline
  contacts      social links
  status        current availability
  clear         clear terminal
  date          current date & time
  weather       show weather for a city
  joke          dev joke

  Games:
  snake         play Snake
  tetris        play Tetris
  minesweeper   play Minesweeper
  2048          play 2048
  breakout      play Breakout
`,

  about: `Zhanat Kairbekov
Frontend Developer & Graphic Designer
Astana, Kazakhstan

Student at Alem School (Astana Hub)
Graduate of OmAEiP — Information Systems & Programming

Building modern interfaces with React, Laravel and motion-driven UX.
`,

  whoami: `Frontend developer focused on performant UI,
animations and scalable frontend architecture.
`,

  skills: `HTML / CSS / SCSS
JavaScript / TypeScript
React / Vite
Tailwind / Framer Motion
PHP / Laravel / MySQL
REST API / Go
Three.js / Canvas API
Docker / Git / Figma
`,

  stack: `Frontend:
  React, Vite, Tailwind, Framer Motion

Backend:
  PHP, Laravel, MySQL, Go

Tools:
  Git, Figma, Docker
`,

  projects: `1. Portfolio Website
2. Downtown Astana
3. Saukele Online Shop
4. Velobike Clone
5. Maze Escape BFS Visualizer
6. Product Catalog App
`,

  journey: `2020 → started web & design
2023 → first Laravel projects
2025 → Alem School
2025 → commercial development
2026 → open for opportunities
`,

  contacts: `Telegram:    t.me/kairbekoff
GitHub:      github.com/zhkairbekov
Portfolio:   kairbekov-official.netlify.app
`,

  status: `🟢 AVAILABLE FOR FREELANCE
🟢 OPEN TO REMOTE WORK
🟢 OPEN TO COLLABORATION
`,

  date: () => {
    const now = new Date();
    return `${now.toLocaleDateString("ru-RU", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })}
${now.toLocaleTimeString("ru-RU")}
Timezone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}
`;
  },

  weather: `Usage: weather [city]
Example: weather London
Example: weather Tokyo
`,

  quote: () => {
    const quotes = [
      '"Any fool can write code that a computer can understand.\n Good programmers write code that humans can understand."\n — Martin Fowler',
      '"First, solve the problem.\n Then, write the code."\n — John Johnson',
      '"Code is like humor.\n When you have to explain it, it\'s bad."\n — Cory House',
      '"The best code is no code at all."\n — Jeff Atwood',
      '"Make it work, make it right, make it fast."\n — Kent Beck',
      '"Programming is the art of telling\n another human what one wants\n the computer to do."\n — Donald Knuth',
      '"Simplicity is the soul of efficiency."\n — Austin Freeman',
    ];
    return quotes[Math.floor(Math.random() * quotes.length)] + "\n";
  },

  ascii: `
 ______  _   _    _    _   _    _  _____ 
|__  / || | / \\  | \\ | |  / \\  |_   _|
  / /| __ |/ _ \\ |  \\| | / _ \\   | |  
 / /_| || / ___ \\| |\\  |/ ___ \\  | |  
/____|_||_/_/   \\_\\_| \\_/_/   \\_\\ |_|  
`,

  matrix: `MATRIX`,

  coffee: () => {
    return `Brewing coffee...

[          ] 0%
[██        ] 20%
[████      ] 40%
[██████    ] 60%
[████████  ] 80%
[██████████] 100%

☕ Perfect cup ready. Enjoy.
`;
  },

  hack: `HACK`,

  disco: `DISCO`,

  fibonacci: () => {
    const fib = [0, 1];
    for (let i = 2; i < 15; i++) fib.push(fib[i - 1] + fib[i - 2]);
    return `Fibonacci sequence (first 15):
${fib.join(", ")}
`;
  },

  joke: () => {
    const jokes = [
      "Why do programmers prefer dark mode?\nBecause light attracts bugs.",
      "A QA engineer walks into a bar.\nOrders 1 beer. Orders 0 beers.\nOrders 99999999 beers. Orders -1 beers.\nOrders null beers. Orders asdfjkl; beers.\nFirst real customer walks in and asks where the bathroom is.\nThe bar bursts into flames.",
      "There are only 10 types of people in the world:\nThose who understand binary and those who don't.",
      "How many programmers does it take to change a light bulb?\nNone. That's a hardware problem.",
      "Why did the developer go broke?\nBecause he used up all his cache.",
      "How do you tell an introverted from an extroverted programmer?\nAn extroverted programmer looks at YOUR shoes while talking to you.",
      "Why do Java developers wear glasses?\nBecause they don't C#.",
      "Why do programmers always mix up Halloween and Christmas?\nBecause Oct 31 equals Dec 25.",
      "What's a programmer's favorite hangout place?\nFoo Bar.",
      "Why was the developer going broke?\nHe kept throwing byte-sized pieces of money away.",
      "How many programmers does it take to change a light bulb?\nNone, that's a DevOps problem.",
      "A SQL query walks into a bar, walks up to two tables and asks...\n'Can I join you?'",
      "Why do programmers prefer iOS development?\nBecause the user interface is always superior.",
      "Why did the programmer quit his job?\nBecause he didn't get arrays.",
      "Why do programmers always confuse Halloween and Christmas?\nBecause DEC 25 = OCT 31.",
      "What do you call a programmer from Finland?\nNcode.",
      "Why did the developer go to the beach?\nHe wanted to see the C.",
      "How many programmers does it take to change a light bulb?\n1: None, that's a hardware problem.\n2: That's more than one, silly.",
      "Why did the programmer get stuck in the shower?\nHe was reading the shampoo bottle instructions: Lather. Rinse. Repeat.",
      "Why do programmers always get Christmas and Halloween mixed up?\nBecause DEC 25 = OCT 31",
      "How do you know if someone is a real programmer?\nThey wear socks with sandals.",
      "Why don't programmers like nature?\nIt has too many bugs.",
      "How do you find a web developer in a crowd?\nYou don't, they'll find you and ask if you want them to optimize your website.",
      "Why do programmers prefer working at night?\nBecause that's when the code talks back.",
      "What's the object-oriented way to become wealthy?\nInheritance.",
      "Why do programmers make good lovers?\nBecause they have very soft hands.",
      "The best thing about a Boolean is even if you are wrong, you are only off by a bit.",
      "How many MySQL DBAs does it take to change a light bulb?\nOne to hold the bulb and three to rewrite the database from scratch.",
      "Why did the programmer quit his job at the shoe company?\nBecause he was tired of array of problems.",
      "A programmer is told to go to the store and buy a loaf of bread. If they see eggs, buy a dozen.\nThey never come back.",
      "How did the programmer die in the shower?\nHe read a bottle of shampoo that said 'Lather, rinse, repeat' so he never got out.",
      "Why do Java programmers wear glasses?\nBecause they can't C#.",
      "If you put a million programmers at a million keyboards for a million years, they would eventually write a Java program to calculate pi.",
      "Why did the developer go broke?\nHe was down to his last byte.",
      "You know you're a programmer when you think of genitals as you do packets.",
      "Why is it that programmers always mix up the current year with the years at the beginning of the millennium?\nBecause 1998 = 2015 in hexadecimal.",
      "What's a programmer's favorite pre-exercise drink?\nCodeine.",
      "Why did the programmer create a calendar app?\nHe had issues with dates.",
      "Why do programmers always confuse relationships?\nThey think commit means forever.",
      "How many programmers does it take to change a light bulb?\nZero. That's what the janitor is for.",
      "Why did the programmer go to the gym?\nTo get some core strength.",
      "What's a programmer's favorite song?\n'Let it Go' by Elsa (because she has no control over anything).",
      "Why did the programmer start a band?\nBecause he wanted to master the art of debugging.",
      "What's the difference between a programmer and a normal person?\nA programmer thinks that any advice from an expert is just their opinion.",
      "Why do programmers think they're so smart?\nBecause they're not allowed to say 'I don't know.'",
      "What does a programmer do when he's tired?\nNothing. He just crashes.",
      "Why did the developer always carry a pencil and paper?\nBecause programmers are always writing code in their mind.",
      "What's a programmer's favorite type of music?\nAlgorithmic. It has a good beat and you can code to it.",
      "Why do programmers make bad drivers?\nBecause they keep looking for the Escape key.",
      "How does a programmer eat cereal?\nHe uses Internet Explorer because it takes a long time to download.",
      "Why did the programmer quit his job at Microsoft?\nBecause he kept getting Windows error messages.",
      "What time is it when you have to go to the dentist?\nTooth-hurty.",
      "Why don't programmers like outdoor activities?\nToo many bugs.",
      "How do you know if a programmer is extroverted?\nHe looks at YOUR shoes when he's talking to you.",
      "Why did the programmer eat the snail?\nBecause he wanted to get a bit of shell.",
      "What's a programmer's favorite tool?\nA rubber duck.",
      "Why do programmers get lonely?\nBecause they just want someone to accept their pull request.",
      "What's a programmer's favorite hangout place?\nFoo bar.",
      "Why did the programmer run out of money?\nHe used up all his cache.",
      "How do you know if there's a programmer at the party?\nDon't worry, he'll tell you.",
      "Why did the developer go to the beach?\nTo see the sea.",
      "What's a programmer's favorite type of dog?\nA German Shepherd. No wait, a Dachshund. Actually, they prefer German Shorthaired Pointers, but that's a data type joke.",
      "Why do programmers prefer working with arrays?\nThey have a certain index appeal.",
      "How many programmers does it take to change a light bulb?\nZero. That's what version 2.0 is for.",
      "Why did the programmer get stuck on the toilet?\nBecause he was looking for the Exit button.",
      "What did the programmer say to his girlfriend?\nI love your face, but your backend is even better.",
      "Why did the developer lose his job?\nHe didn't get arrays.",
      "How do you comfort a JavaScript developer?\nDon't worry, your callback will be called eventually.",
      "What's a programmer's favorite exercise?\nSquats. Because that's what happens to his code under load.",
      "Why did the programmer become a baker?\nBecause he kneaded the dough.",
      "How does a programmer kill a cockroach?\nHe says 'You're terminated' and closes all the windows.",
      "What do you call a programmer that's been with you for 10 years?\nA legacy system.",
      "Why do programmers make good parents?\nThey know how to handle children with proper error handling.",
      "How many programmers does it take to change a light bulb?\nNone, that's a frontend problem.",
      "Why did the programmer go to the bank?\nTo get his cache balance.",
      "What's a programmer's favorite drink at a rave?\nJava. It keeps them up all night.",
      "Why did the programmer get kicked out of math class?\nBecause he tried to evaluate an NaN.",
      "How do you know if a website was built by a programmer?\nIt's not responsive.",
      "Why did the developer go to the grammar check website?\nBecause he wanted to avoid runtime errors.",
      "What do you call a programmer who doesn't code?\nUnemployed.",
      "Why did the Python programmer get in trouble?\nHe had an indentation problem.",
      "How many programmers does it take to screw in a light bulb?\nThree. One to screw it in, and two to discuss how much better the old one was.",
      "Why do programmers prefer static websites?\nBecause they're always changing.",
      "What's a programmer's favorite type of meditation?\nDebugging.",
      "Why did the programmer break up with his girlfriend?\nShe had too many bugs.",
      "How do you tell if a programmer is sad?\nThey have a case of the Mondays.",
      "What's the difference between a programmer and a normal person at a concert?\nThe programmer wonders why they're not doing synchronized swimming.",
      "Why did the CSS developer move out of his house?\nHe was tired of floating elements.",
      "How many programmers does it take to change a light bulb?\nOne to change it and two to discuss why the old one was better.",
      "Why did the programmer refuse to go to the beach?\nHe was afraid of the byte-sized waves.",
      "What do you call a programmer from Poland?\nA cache.",
      "Why did the developer refuse to go to the doctor?\nHe was afraid of getting a syntax error.",
      "How many database administrators does it take to change a light bulb?\nThree: one to change it, and two to discuss how the old one was better.",
      "Why did the programmer always carry a ladder?\nBecause he was trying to get to the next level.",
      "What's a programmer's favorite type of jokes?\nReferenced ones.",
      "Why did the JavaScript developer go to therapy?\nHe had too many callbacks.",
      "How do you know if a programmer is in your house?\nYou can't find the remote.",
      "Why did the developer break his phone?\nHe wanted to test it under pressure.",
      "What do you call a programmer's autobiography?\nA stack overflow.",
      "Why do programmers make terrible comedians?\nTheir jokes are not object-oriented.",
      "What's a programmer's idea of a lazy day?\nWhen the code compiles on the first try.",
      "Why did the programmer bring a pencil to a gunfight?\nHe wanted to draw his own conclusions.",
    ];
    return jokes[Math.floor(Math.random() * jokes.length)] + "\n";
  },

  calc: `calc <expression>
Examples:
  calc 2+2
  calc 10*5-3
  calc Math.PI*2
`,

  color: () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const hex =
      `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`.toUpperCase();
    return `Random color:
HEX: ${hex}
RGB: rgb(${r}, ${g}, ${b})
HSL: Check with a color picker
`;
  },

  countdown: `Usage: countdown <seconds>
Example: countdown 10
`,

  flip: () => {
    const result = Math.random() > 0.5 ? "HEADS 🪙" : "TAILS 🔄";
    return `Flipping coin...\n\nResult: ${result}\n`;
  },

  shuffle: () => {
    const suits = ["♠", "♥", "♦", "♣"];
    const values = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];
    const deck = [];
    suits.forEach((s) => values.forEach((v) => deck.push(`${v}${s}`)));
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return `Shuffled deck (top 10):
${deck.slice(0, 10).join("  ")}
...and 42 more cards
`;
  },

  encode: `Usage: encode <text>
Example: encode Hello World
`,

  decode: `Usage: decode <base64>
Example: decode SGVsbG8gV29ybGQ=
`,

  uptime: () => {
    const start = performance.now();
    const seconds = Math.floor(start / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    return `System uptime:
${hours}h ${minutes % 60}m ${seconds % 60}s

Processes: React, Vite, Tailwind
Memory: Sufficient for creativity
CPU: Overclocked by passion
`;
  },

  // Easter eggs
  "sudo hire-me": `ACCESS GRANTED 🚀

Welcome aboard, Zhanat.
Redirecting to HR onboarding...
`,

  "rm -rf bugs": `Permission denied.
Bugs are protected species under the
Geneva Convention of Code.
`,

  "go run main.go": `Compiling portfolio...

✔ React initialized
✔ Tailwind loaded
✔ Framer Motion enabled
✔ Deploying to Netlify...

Build successful in 1.2s 🚀
`,

  "php artisan inspire": `"Code is poetry."
— Laravel Terminal
`,

  42: `The answer to life, the universe, and everything.

But what was the question?
`,
};

export const GAME_COMMANDS = [
  "snake",
  "tetris",
  "minesweeper",
  "2048",
  "breakout",
];

export const ALL_COMMAND_KEYS = [...Object.keys(COMMANDS), ...GAME_COMMANDS];
