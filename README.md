# eslint-plugin-eslint-ng-annotate

Verify that ng-annotations are in place.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-eslint-ng-annotate`:

```
$ npm install eslint-plugin-eslint-ng-annotate --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-eslint-ng-annotate` globally.

## Usage

Add `eslint-ng-annotate` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "eslint-ng-annotate"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "eslint-ng-annotate/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





