//* TITLE ActiviPretty **//
//* VERSION 1.0.0 **//
//* DESCRIPTION	Adds some aesthetics and allows css changes to the activity page**//
//* DEVELOPER Quillot **//
//* FRAME false **//
//* BETA false **//

XKit.extensions.ActiviPretty = new Object({
	running: false,

	preferences: {
		sep1: {
			text: "Set the background color of blogs you follow",
			type: "separator"
		},

		backgroundColor: {
			text: "Hexcode",
			value: "#f0f5fa",
			default: "#f0f5fa",
			type: "text"
		}
	},

	run: function() {
		this.running = true;
		XKit.tools.add_css(".is_friend { background: " + XKit.extensions.ActiviPretty.preferences.backgroundColor.value + "; }");
		console.log("[ActiviPretty] Changed mutuals background color to " + XKit.extensions.ActiviPretty.preferences.backgroundColor.value);
		console.log("[ActiviPretty] Done with changes!");
	},

	destroy: function() {
		this.running = false;
		XKit.tools.remove_css(".is_friend");

	}

});