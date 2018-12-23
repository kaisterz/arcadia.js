# arcadia.js
[![Discord](https://discordapp.com/api/guilds/503501966811332638/widget.png)](https://discord.gg/XdZ8JCz)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/23d516033fe04e2fb1046e00ac93b91c)](https://github.com/Sworder71/arcadia.js)
[![Vulnerabilities Badge](https://snyk.io/test/github/Sworder71/arcadia.js/badge.svg?targetFile=package.json)](https://github.com/Sworder71/arcadia.js)

Here's the official module of **Arcadia** API.
#### Installation:
`$ npm i arcadia.js`

#### Features:
>- Get image of an endpoint
>- Get All endpoints

#### Examples:

- Get Image
```JS
const ARCAPI = require("arcadia.js");
const arcapi = new ARCAPI("xxx"); //Replace xxx to your arcadia's token

let endpoint = "beautiful"; //Name of an endpoint
let parameter = "url"; //First parameter of the endpoint (URL/TEXT)
let url = "https://cdn.discordapp.com/avatars/240508683455299584/c00652df31c98a1e79f536135fb88e76.png?size=2048"; //URL of the image

arcapi.getImage(endpoint, parameter, url).then((buffer) => {
    console.log(buffer); //Buffer
});
```

- Get Endpoints
```JS
const ARCAPI = require("arcadia.js");
const arcapi = new ARCAPI();

arcapi.getEndpoints().then((endpoints) => {
    console.log(endpoints) //Endpoints Array
});
```
