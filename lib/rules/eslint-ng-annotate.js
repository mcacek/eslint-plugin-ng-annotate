/**
* @fileoverview Verify that ng-annotations are in place.
* @author michael.cacek@gmail.com
* @copyright 2015 michael.cacek@gmail.com. All rights reserved.
* See LICENSE file in root directory for full license.
*/
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {
  function isBlockAnnotated(node) {
    var comments = context.getAllComments(node);
    var comment;
    var notFound = true;
    var commentsCount = comments.length;
    var count = 0;

    if (commentsCount > 0) {
      while (notFound && count < commentsCount) {
        comment = comments[count];

        if (comment.type === 'Block' && comment.value.indexOf('ngAnnotate') > -1) {
          notFound = false;
        }

        count++;
      }
    }

    return !notFound;
  }

  function isFunctionExport(node) {
    return node.left.object.name === 'module' &&
           node.left.property.name === 'exports' &&
           node.right.type === 'FunctionExpression';
  }

  function checkFunction(node) {
    if (isFunctionExport(node) && node.right.params.length > 0) {
      if (!isBlockAnnotated(node)) {
        context.report(node, "module.exports requires ng-annotation.");
      }
    }
  }

  //--------------------------------------------------------------------------
  // Public
  //--------------------------------------------------------------------------

  return {
    // give me methods
    "AssignmentExpression": checkFunction,
  };

};

module.exports.schema = [
  // fill in your schema
];
