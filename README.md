# Non-Official module for the ArcadiaAPI!

Installation:
```js
npm install arcadia-api --save
```

## Example GET:

### Way 1: ArcadiaAPI#GET

```js
const ArcadiaAPI = require("arcadia-api");
const Arcadia = new ArcadiaAPI("YOUR TOKEN HERE");

Arcadia.GET("endpoint", "url", { /*OPTIONS GOES HERE (e.g: type, hype, urlbis, ...)*/ }).then(res => console.log(res));
```

### Way 2: ArcadiaAPI#generator

```js
const ArcadiaAPI = require("arcadia-api");
const Arcadia = new ArcadiaAPI("YOUR TOKEN HERE");

Arcadia.generator("endpoint", "url", type /*Integer (default to 0, valids are: 0 and 1)*/).then(res => console.log(res));
```

### Way 3: ArcadiaAPI#filter

```js
const ArcadiaAPI = require("arcadia-api");
const Arcadia = new ArcadiaAPI("YOUR TOKEN HERE");

Arcadia.filter("endpoint", "url").then(res => console.log(res));
```

### Way 4: ArcadiaAPI#texts

```js
const ArcadiaAPI = require("arcadia-api");
const Arcadia = new ArcadiaAPI("YOUR TOKEN HERE");

Arcadia.text("endpoint", "url", { /*OPTIONS GOES HERE (e.g: text, ...)*/ }).then(res => console.log(res));
```

### Way 5: ArcadiaAPI#others

```js
const ArcadiaAPI = require("arcadia-api");
const Arcadia = new ArcadiaAPI("YOUR TOKEN HERE");

Arcadia.other("endpoint", "url", "background-url", "text", "font-style").then(res => console.log(res));
```
