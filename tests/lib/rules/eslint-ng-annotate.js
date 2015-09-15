/**
* @fileoverview Verify that ng-annotations are in place.
* @author michael.cacek@gmail.com
* @copyright 2015 michael.cacek@gmail.com. All rights reserved.
* See LICENSE file in root directory for full license.
*/
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/eslint-ng-annotate"),

RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("eslint-ng-annotate", rule, {

  valid: [
    "module.exports = /* ngAnnotate */ function($log) {}", // properly annotated
    "module.exports = /* ngAnnotate */ function() {}", // unnecessary annotation, no parameters
    "module.exports = function() {}", // no parameters
    "module.exports = blah" // not a function expression
  ],

  invalid: [
    {
      code: "module.exports = function($log) {}",
      errors: [{
        message: "module.exports requires ng-annotation.",
      }]
    }
  ]
});
