# Non-Official module for the ArcadiaAPI!

Installation:
```js
npm install arcadia-api --save
```

## Example GET:

### Way 1: ArcadiaAPI#GET

```
const ArcadiaAPI = require("arcadia-api");
const Arcadia = new ArcadiaAPI("YOUR TOKEN HERE");

Arcadia.GET("endpoint", "url", { /*options: type (triggered/invert) and text (texts endpoints)*/ }).then(res => console.log(get));
```

### Way 2: ArcadiaAPI#generator

```
const ArcadiaAPI = require("arcadia-api");
const Arcadia = new ArcadiaAPI("YOUR TOKEN HERE");

Arcadia.generator("endpoint", "url", type /*Integer (default to 0, valids are: 0 and 1)*/).then(res => console.log(get));
```

### Way 3: ArcadiaAPI#filter

```
const ArcadiaAPI = require("arcadia-api");
const Arcadia = new ArcadiaAPI("YOUR TOKEN HERE");

Arcadia.filter("endpoint", "url").then(res => console.log(get));
```

### Way 4: ArcadiaAPI#texts

```
const ArcadiaAPI = require("arcadia-api");
const Arcadia = new ArcadiaAPI("YOUR TOKEN HERE");

Arcadia.texts("endpoint", "text").then(res => console.log(get));
```