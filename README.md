# ReadSettings [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/readsettings/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/readsettings)

Easily manage a configuration file for your application.

[![NPM Badge](https://nodei.co/npm/readsettings.png)](https://npmjs.com/package/readsettings)

## Install

```sh
npm install readsettings
```

## Usage

```js
const ReadSettings = require("readsettings");

const config = new ReadSettings("myConfig.json");

config.data;
//=> {}

config.data.someKey = "Hello World!";

config.data;
//=> {somekey: "Hello World!"}
```

## API

### `class` ReadSettings(dir, options?)

#### dir

Type: `string`

The directory to store the settings file.

#### options

Type: `Conf.Options<any>`

Custom options to pass to [conf](https://github.com/sindresorhus/conf).

### `instance` ReadSettings extends [Conf](https://github.com/sindresorhus/conf)

#### data

Type: `object`

The currently stored data.
