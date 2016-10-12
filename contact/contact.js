
var base = "../content/";

$(document).ready(function() {

	$(".language").click(loadLanguage2);

	loadLanguage2();

});

function loadLanguage2() {
	$.get(base + "contact_" + CurrentLanguage + ".json", function(data) {
		loadFormFieldLabels(data);

		var result = window.location.href.split("result=")[1];

		if (result != undefined) {
			loadMessage(result, data);
		}

	});
}

function loadFormFieldLabels(data) {

	$(".contact_header").html(data.header);

	$(".form_label_name").html(data.form_items.name);
	$(".form_label_email").html(data.form_items.email);
	$(".form_label_message").html(data.form_items.message);

	$(".form_button_submit").prop("value", data.button_submit);
}

function loadMessage(result, data) {
	if (result == "success") {
		alert(data.result.success);
	} else {
		alert(data.result.error);
	}

	window.location.href = "/contact/";
}
