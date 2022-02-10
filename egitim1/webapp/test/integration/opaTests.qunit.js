/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"com/nuwency/egitim1/egitim1/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});