# updater-contributors [![NPM version](https://img.shields.io/npm/v/updater-contributors.svg?style=flat)](https://www.npmjs.com/package/updater-contributors) [![NPM downloads](https://img.shields.io/npm/dm/updater-contributors.svg?style=flat)](https://npmjs.org/package/updater-contributors)

> Update the contributors array in package.json with the contributors returned by the GitHub API.

## Install

Install globally with [npm](https://www.npmjs.com/)

```sh
$ npm install --global updater-contributors
```

## Usage

```sh
$ update contributors
```

## Help

Common [update](https://github.com/update/update) commands.

```console
Usage: update <command> [options]

Command: updater or tasks to run

Options:

  --config, -c      Save a configuration value to the `update` object in package.json
  --cwd             Set or display the current working directory
  --help, -h        Display this help menu
  --init, -i        Prompts you to specify default updaters to run
  --run             Force updaters/tasks to run regardless of other flags used
  --silent, -S      Silence all tasks and updaters in the terminal
  --version, -V     Display the current version of update
  --verbose, -v     Display all verbose logging messages
```

If this is the first time you've used [update](https://github.com/update/update), run the following command to add this updater to your default updaters:

```sh
$ update init
```

## About

### Related projects

* [updater-eslint](https://www.npmjs.com/package/updater-eslint): Update a `.eslintrc.json` file based on a template and preferences. This updater can be used… [more](https://github.com/update/updater-eslint) | [homepage](https://github.com/update/updater-eslint "Update a `.eslintrc.json` file based on a template and preferences. This updater can be used from the command line when installed globally, or as a plugin in other updaters.")
* [updater-gitignore](https://www.npmjs.com/package/updater-gitignore): Update a .gitignore file with default patterns. | [homepage](https://github.com/update/updater-gitignore "Update a .gitignore file with default patterns.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Building docs

_(This document was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme) (a [verb](https://github.com/verbose/verb) generator), please don't edit the readme directly. Any changes to the readme must be made in [.verb.md](.verb.md).)_

To generate the readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install -g verb verb-generate-readme && verb
```

### Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

### License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](https://github.com/update/updater-contributors/blob/master/LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.1.30, on September 10, 2016._