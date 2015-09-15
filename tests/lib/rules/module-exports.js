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

var rule = require("../../../lib/rules/module-exports"),

RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("ng-annotate", rule, {

  valid: [
    "module.exports = /* @ngInject */ function($log) {}", // properly annotated
    "module.exports = /* @ngInject */ function() {}", // unnecessary annotation, no parameters
    "module.exports = function() {}", // no parameters
    "module.exports = blah" // not a function expression
  ],

  invalid: [
    {
      code: "module.exports = function($log) {}",
      errors: [{
        message: "module.exports requires ngInject annotation.",
      }]
    }
  ]
});
