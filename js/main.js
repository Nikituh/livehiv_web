
var Content;
var Language;

$(document).ready(function() {

	$(".overlay_box_positive").click(positiveButtonClicked);
	$(".overlay_box_unsure").click(unsureButtonClicked);

	$(".language").click(languageButtonClicked);

	var cookie = readCookie();

	if (cookie != null) {
		loadLanguage(cookie);
	} else {
		loadLanguage("et");
	}


	// TODO languages, load together etc
	$.get("../content/" + "testing_office.json", function(data) {
		loadOfficeData(data);
	})

});

function positiveButtonClicked() {
	hideOverlay();
	$(".introduction_overlay").attr("choice", "positive");
	loadContent();
}

function unsureButtonClicked () {
	hideOverlay();
	$(".introduction_overlay").attr("choice", "not_sure");
	loadContent();
}

function hideOverlay () {
	$(".introduction_overlay").fadeTo("slow", 0, function() { 
		$(".introduction_overlay").css("display", "none"); 
	});
}

function languageButtonClicked() {

	var language = $(this).attr("language");

	createCookie(language);
	loadLanguage(language);
}

function loadLanguage(language) {

	Language = language;

	var base = "../content/";
	var url = base + language + ".json";

	$.get(url, function(data) {

		var isOk = (data.error == "none");
		
		if (!isOk) {
			alert(data.error);
			return;
		}

		Content = data;
		loadContent();
	});
}

function loadContent() {

	var choice = $(".introduction_overlay").attr("choice");

	$(".overlay_box_positive").html(Content.overlay.positive);
	$(".overlay_box_unsure").html(Content.overlay.not_sure);

	var sections = [];

	if (choice == "positive") {
		sections = Content.content.positive;
		updateVideoSource(Content.video_url.positive);
	} else {
		sections = Content.content.not_sure;
		updateVideoSource(Content.video_url.not_sure);
		
	}

	updateIndexText(Content.title);

	$(".content_wrapper").html("");

	for (var i = 0; i < sections.sections.length; i++) {
		var section = sections.sections[i];
		$(".content_wrapper").append(UI_getSection(section));
	}

	for (var i = 0; i < Content.content.general.sections.length; i++) {
		var section = Content.content.general.sections[i];
		$(".content_wrapper").append(UI_getSection(section));	
	}
}

function updateVideoSource(source) {

	var current = $(".content_video").attr("src");

	if (current != source) {
		$(".content_video").attr("src", source);
	}
}

function updateIndexText(title) {
	var html = "<span class='bold'> Live HIV </span> – " + title;
	$(".index_button").html(html);
}

function loadOfficeData(data) {

	var container = $(".testing_offices_wrapper");

	for (var i = 0; i < data.length; i++) {
		var item = data[i];
		container.append(UI_getOffice(item));
	}
}
















