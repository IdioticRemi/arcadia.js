# Non-Official module for the ArcadiaAPI!

## Installation:
```js
npm install arcadia-api --save
```

## Example GET:

### Way 1: ArcadiaAPI#GET

```js
const ArcadiaAPI = require("arcadia-api");
const Arcadia = new ArcadiaAPI("YOUR TOKEN HERE");

Arcadia.GET("endpoint", "url", { /*OPTIONS GOES HERE (e.g: type, hype, urlbis, ...)*/ }).then(res => console.log(res));
// Hint: use "res.image" or "res.buffer" in order to get the returned image's buffer

// Returns a Promise<new Endpoint Class>
```

### Way 2: ArcadiaAPI#generator

```js
const ArcadiaAPI = require("arcadia-api");
const Arcadia = new ArcadiaAPI("YOUR TOKEN HERE");

Arcadia.generator("endpoint", "url", type /*Integer (default to 0, valids are: 0 and 1)*/).then(res => console.log(res));
// Hint: use "res.image" or "res.buffer" in order to get the returned image's buffer

// Returns a Promise<new Endpoint Class>
```

### Way 3: ArcadiaAPI#filter

```js
const ArcadiaAPI = require("arcadia-api");
const Arcadia = new ArcadiaAPI("YOUR TOKEN HERE");

Arcadia.filter("endpoint", "url").then(res => console.log(res));
// Hint: use "res.image" or "res.buffer" in order to get the returned image's buffer

// Returns a Promise<new Endpoint Class>
```

### Way 4: ArcadiaAPI#texts

```js
const ArcadiaAPI = require("arcadia-api");
const Arcadia = new ArcadiaAPI("YOUR TOKEN HERE");

Arcadia.text("endpoint", "url" /*default: null*/, { /*OPTIONS GOES HERE (e.g: text, ...)*/ }).then(res => console.log(res));
// Hint: use "res.image" or "res.buffer" in order to get the returned image's buffer

// Returns a Promise<new Endpoint Class>
```

### Way 5: ArcadiaAPI#others

```js
const ArcadiaAPI = require("arcadia-api");
const Arcadia = new ArcadiaAPI("YOUR TOKEN HERE");

Arcadia.other("endpoint", "url", "background-url", "text", "font-style").then(res => console.log(res));
// Hint: use "res.image" or "res.buffer" in order to get the returned image's buffer

// Returns a Promise<new Endpoint Class>
```

## How do I get all the aviable endpoints?

### Way 1: ArcadiaAPI#fetchEndpoints

```js
const ArcadiaAPI = require("arcadia-api");
const Arcadia = new ArcadiaAPI("YOUR TOKEN HERE");

Arcadia.fetchEndpoints().then(res => console.log(res));

// Returns an Array of Strings
```

## How can I check an endpoint's category?

### Way 1: ArcadiaAPI#fetchEndpointCategory

```js
const ArcadiaAPI = require("arcadia-api");
const Arcadia = new ArcadiaAPI("YOUR TOKEN HERE");

Arcadia.fetchEndpointCategory("name").then(res => console.log(res));

// Returns a String
```

### Way 1: ArcadiaAPI#fetchEndpoint => Endpoint#category

```js
const ArcadiaAPI = require("arcadia-api");
const Arcadia = new ArcadiaAPI("YOUR TOKEN HERE");

Arcadia.fetchEndpoint("name").then(res => console.log(res.category));

// Returns a String
```

## How can I get an endpoint's infos without any checks?

### Way 1: ArcadiaAPI#fetchEndpoint

```js
const ArcadiaAPI = require("arcadia-api");
const Arcadia = new ArcadiaAPI("YOUR TOKEN HERE");

Arcadia.fetchEndpoint("name").then(res => console.log(res));

// Returns a new Endpoint Class
```

## How can I see what's a catergory's endpoints?

### Way 1: ArcadiaAPI#fetchCategory

```js
const ArcadiaAPI = require("arcadia-api");
const Arcadia = new ArcadiaAPI("YOUR TOKEN HERE");

Arcadia.fetchCategory("name").then(res => console.log(res));

// Returns an Array of Strings
```
