/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"customer/SAMPLE1/test/integration/PhoneJourneys"
	], function() {
		QUnit.start();
	});
});