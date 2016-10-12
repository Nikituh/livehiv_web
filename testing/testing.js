
var base = "../content/";

$(document).ready(function() {

	$(".language").click(loadLanguage2);

	loadLanguage2();
});


function loadLanguage2() {

	$.get(base + "testing_offices_" + CurrentLanguage + ".json", function(data) {
		loadOfficeData(data);
	});

	$.get(base + "clinic_" + CurrentLanguage + ".json", function(data) {
		
		var container = $(".quick_testing_container");
		container.html("<div class='col_100 content_header quick_test_clinic_header'>  </div>");

		$(".quick_test_clinic_header").html(data.header);

		for (var i = 0; i < data.clinics.length; i++) {
			var clinic = data.clinics[i];
			var html = UI_getClinicData(clinic);

			container.append(html);
		}
	});
}

function loadOfficeData(data) {

	var container = $(".testing_offices_wrapper");

	container.html(UI_getOfficeHeader(data.header));

	for (var i = 0; i < data.list.length; i++) {
		var item = data.list[i];
		var html = UI_getOffice(item, data.address_text, data.phone_text, data.open_hours_text);
		container.append(html);
	}
}

function UI_getClinicData(clinic) {
	
	var html = "<div class='col_50 clinic_wrapper'>";

	html += "<div class='col_100 clinic_data_container'>";
		html += "<div class='col_100 clinic_name'>" + clinic.name + "</div>";
		html += "<div class='col_100 clinic_bullets_header'>" + clinic.bullets_header + ":</div>";
		html += "<ul class='bullets_container'>";

		for (var i = 0; i < clinic.bullets.length; i++) {
			html += "<li class='clinic_bullet'>" + clinic.bullets[i] + "</li>";
		}

		html += "</ul>";

		html += "<div class='col_100 clinic_description'>" + clinic.description + "</div>";

		html += "<div class='col_100 clinic_contact_container'>";
			html += "<div class='clinic_contact_item clinic_contact_header'>" + clinic.contact.header + ":</div>";
			html += "<div class='clinic_contact_item clinic_contact_address'>" + clinic.contact.address + "</div>";
			html += "<div class='clinic_contact_item clinic_contact_open_hours'>" + clinic.contact.open_hours + "</div>";

			if (clinic.contact.phone_doctor != undefined) {
				html += "<div class='clinic_contact_item clinic_phone_doctor'>" + clinic.contact.phone_doctor + "</div>";
			}

			html += "<div class='clinic_contact_item clinic_contact_phone_support'>" + clinic.contact.phone_support + "</div>";
			
			if (clinic.contact.email != undefined) {
				html += "<div class='clinic_contact_item clinic_contact_email'>" + clinic.contact.email + "</div>";
			}

			if (clinic.contact.facebook != undefined) {
				html += "<div class='clinic_contact_item clinic_contact_facebook'>";
					html += "<a href='" + clinic.contact.facebook + "'>" + clinic.contact.facebook + "</a>";
				html += "</div>";
			}

			if (clinic.contact.homepage != undefined) {
				html += "<div class='clinic_contact_item clinic_contact_homepage'>";
					html += "<a href='" + clinic.contact.homepage + "'>" + clinic.contact.homepage + "</a>";
				html += "</div>";
			}

		html += "</div>";

	html += "</div>";
	html += "</div>";

	return html;
}



