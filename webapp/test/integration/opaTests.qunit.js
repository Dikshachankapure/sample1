/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"customer/SAMPLE1/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});