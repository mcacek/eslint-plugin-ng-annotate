# eslint-plugin-ng-annotate

Verify that ng-annotations are in place.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-ng-annotate`:

```
$ npm install eslint-plugin-ng-annotate --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-ng-annotate` globally.

## Usage

Add `ng-annotate` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "ng-annotate"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "ng-annotate/module-export": 2
    }
}
```

## Supported Rules

* Fill in provided rules here
