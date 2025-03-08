/*global QUnit*/

sap.ui.define([
	"andreaworkspace/invoices-2/controller/MainVier.controller"
], function (Controller) {
	"use strict";

	QUnit.module("MainVier Controller");

	QUnit.test("I should test the MainVier controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
