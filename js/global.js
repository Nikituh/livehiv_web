
var AnalyticsScript = 
	"<script>" + 
	  "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function() {" +
	  "(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o)," + 
	  "m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)" + 
	  "})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');" + 

	  "ga('create', 'UA-84336759-1', 'auto');" + 
	  "ga('send', 'pageview');" + 

	"</script>";

var cookie = readCookie();
var CurrentLanguage;

$(document).ready(function() {

	$("body").append(AnalyticsScript);

	$(".language").click(languageButtonClicked);

	if (cookie != null) {
		CurrentLanguage = cookie;
	} else {
		CurrentLanguage = "et";
	}

	loadNavigationContent();
});

function languageButtonClicked() {
	CurrentLanguage = $(this).attr("language");
	createCookie(CurrentLanguage);
	loadNavigationContent();
}

function loadNavigationContent() {
	
	$.get("../content/global_" + CurrentLanguage + ".json", function(data) {
		updateIndexText(data.title);
		updateButtons(data);
	});
}

function updateIndexText(title) {
	var html = "<span class='bold'> Live HIV </span> – " + title;
	$(".index_button").html(html);
}

function updateButtons(data) {

	$(".footer_supported_by").html(data.footer_label_supporter);
	$(".footer_link_team").html(data.footer_link.team);

	if (data.footer_link.about_url != "") {
		$(".footer_link_about_hiv").html(data.footer_link.about);
		$(".footer_link_about_hiv").attr("href", data.footer_link.about_url);
		$(".footer_link_about_hiv").css("visibility", "visible");
	} else {
		$(".footer_link_about_hiv").css("visibility", "hidden");
	}

	if (data.footer_link.stats != "") {
		$(".footer_link_hiv_stats").html(data.footer_link.stats);
		$(".footer_link_hiv_stats").attr("href", data.footer_link.stats_url);
		$(".footer_link_hiv_stats").css("visibility", "visible");
	} else {
		$(".footer_link_hiv_stats").css("visibility", "hidden");
	}
}

function setMinContentHeight(elementClass) {

	var content = $(elementClass);

	var height = $(window).height();

	if (height < $("body").height()) {
		return;
	}
	
	height -= $(".navigation_bar").height();
	height -= $(".footer").height();
	height -= $(".footer_supported_by_wrapper").height();

	content.css("min-height", height);
}






