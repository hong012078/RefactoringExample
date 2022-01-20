/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

var statement = require('./refactoring/statement');
var plays = require('./refactoring/plays.json');
var invoices = require('./refactoring/invoices.json');

let result = statement.statement(invoices[0], plays);
console.log(result);