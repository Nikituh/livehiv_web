
var base = "../content/";

$(document).ready(function() {

	$(".language").click(loadLanguage2);

	loadLanguage2();
});


function loadLanguage2() {

	$.get(base + "news_" + CurrentLanguage + ".json", function(data) {
		loadArticle(data);
	});
}

function loadArticle(data) {

	var container = $(".news_items_wrapper");

	container.html("");
	
	var id = window.location.href.split("id=")[1];
	var article = getArticle(data, id);
	
	container.append(UI_getArticle(article));
}

function getArticle(data, id) {
	
	for (var i = 0; i < data.articles.length; i++) {

		var article = data.articles[i];
		
		if (article.id == id) {
			return article;
		}
	}

	return null;
}