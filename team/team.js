
var base = "../content/";

$(document).ready(function() {

	$(".language").click(loadLanguage2);

	loadLanguage2();

});

function loadLanguage2() {
	$.get(base + "team_" + CurrentLanguage + ".json", function(data) {
		loadPositions(data);
	});
}

function loadPositions(data) {

	$(".team_header").html(data.header);

	var members = $(".team_member_name");

	$(members[0]).html(data.position.development.name);
	$(members[1]).html(data.position.animation.name);
	$(members[2]).html(data.position.lead.name);
	$(members[3]).html(data.position.marketing.name);
	$(members[4]).html(data.position.editing.name);

	$(".position_development").html(data.position.development.label);
	$(".position_animation").html(data.position.animation.label);
	$(".position_lead").html(data.position.lead.label);
	$(".position_marketing").html(data.position.marketing.label);
	$(".position_editing").html(data.position.editing.label);
}
