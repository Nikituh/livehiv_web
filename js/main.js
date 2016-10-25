
var Content;
var Language;

$(document).ready(function() {

	$(".hiv_button").click(hivButtonClicked);
	
	$(".language").click(languageButtonClicked2);

	loadLanguage();

	$(".video_container").click(function() {
		console.log("jsdhhgsg");
	});

	if (window.location.href.indexOf("result") != -1) {
		var result = window.location.href.split("=")[1];

		if (result == "success") {
			if (CurrentLanguage == "et") {
				alert("Aitäh. Informatsiooni edastatud");
			} else if (CurrentLanguage == "en") {
				alert("Great success, sent email to LiveHIV");
			} else {
				alert("TODO");
			}
		} else {
			if (CurrentLanguage == "et") {
				alert("Oih. Miskit läks nihu. Ole hea, proovi uuesti");
			} else if (CurrentLanguage == "en") {
				alert("Oops! Something went terribly wrong. Please try again");
			} else {
				alert("TODO");
			}
		}
	}

});

function hivButtonClicked() {
	updateChoice($(this));
	loadContent();
}

function updateChoice(button) {
	$(".hiv_button").removeClass("hiv_button_active");
	
	var classes = button.attr("class").split(' ');
	var choice = classes[classes.length - 1];
	setChoice(choice);
	
	button.addClass("hiv_button_active");
}

function setChoice(choice) {
	$(".hiv_buttons_wrapper").attr("choice", choice);
}

function getChoice() {
	return $(".hiv_buttons_wrapper").attr("choice");
}

function languageButtonClicked2() {
	loadLanguage();
}

function loadLanguage() {

	var url = "../content/main_content_" + CurrentLanguage + ".json";

	$.get(url, function(data) {

		var isOk = (data.error == "none");
		
		if (!isOk) {
			alert(data.error);
			return;
		}

		Content = data;
		loadContent(data);
	});
}

function loadContent(data) {

	/* HEADER */
	$(".initial_slogan_1").html(data.header.header);
	$(".initial_slogan_2").html(data.header.paragraph_1);
	$(".initial_slogan_3").html(data.header.paragraph_2);

	/* HEADER 2 */
	$(".text_top_large").html(data.header_2.text);

	/* CALL TO ACTION */
	$(".text_button_call_to_action_order_test").html(data.call_to_action.order_test.title);
	$(".text_button_call_to_action_clinic").html(data.call_to_action.visit_clinic.title);

	$(".description_button_call_to_action_order_test").html(data.call_to_action.order_test.description);
	$(".description_button_call_to_action_clinic").html(data.call_to_action.visit_clinic.description);

	/* CALL TO ACTION BUTTON SIZING*/
	// $(".button_call_to_action_clinic").css("height", "auto");
	// $(".button_call_to_action_order_test").css("height", "auto");
	
	// if ($(".button_call_to_action_clinic").height() > $(".button_call_to_action_order_test").height()) {
	// 	$(".button_call_to_action_order_test").height($(".button_call_to_action_clinic").height())
	// } else {

	// }

	/* VIDEO */
	var parsedUrl = "https://www.youtube.com/watch?v=" + data.video_url.not_sure.split("/embed/")[1];
	$(".video_hiv_unsure").attr("href", parsedUrl);
	// $(".video_hiv_unsure").attr("href", data.video_url.not_sure);
	parsedUrl = "https://www.youtube.com/watch?v=" + data.video_url.positive.split("/embed/")[1];
	$(".video_hiv_positive").attr("href", parsedUrl);
	// $(".video_hiv_positive").attr("href", data.video_url.positive);
	parsedUrl = "https://www.youtube.com/watch?v=" + data.video_url.home_test.split("/embed/")[1];
	$(".video_hiv_home_test").attr("href", parsedUrl);
	// $(".video_hiv_home_test").attr("href", data.video_url.home_test);

	$(".content_video_text_unsure").html(data.video_text.not_sure);
	$(".content_video_text_positive").html(data.video_text.positive);
	$(".content_video_text_home_test").html(data.video_text.home_test);
	
	/* GET TESTED */
	$(".get_tested_top_label").html(data.get_tested.text);
	$(".get_tested_bottom_link").html(data.get_tested.link);
	
	/* NEWS */
	$(".news_header").html(data.news.header);

	/* LEARN MORE */
	$(".learn_more_top_label").html(data.learn_more.text);
	$(".learn_more_bottom_link").html(data.learn_more.link);
}

function updateVideoSource(source) {

	var current = $(".content_video").attr("src");

	if (current != source) {
		$(".content_video").attr("src", source);
	}
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
















