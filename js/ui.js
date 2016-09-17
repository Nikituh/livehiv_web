
function UI_getSection(section) {

	if (section.type == "list") {
		return UI_getListSection(section);
	} else if (section.type == "text_col_50") {
		return UI_getTextSection(section);
	}

	return "";
}

function UI_getListSection(section)
{
	var html = "<div class='content_container'>";
          
    html += "<div class='col_100 content_header'>" + section.header + "</div>";
    
    html += "</div>";

    html += "<div class='content_container'>";
    html += "<div class='content_text'>";
    html += "<ul style='margin-left: 15px; list-style-type: disc;'>";

    for (var i = 0; i < section.items.length; i++) {
        var text = section.items[i];
        html += "<li style='display: list-item;'>" + text + "</li>";
    }

    html += "</ul>";
    html += "</div>";
	html += "</div>";
    
    return html;
}

function UI_getTextSection(section) {
	
	var html = "<div class='content_container'>";          
    	html += "<div class='col_100 content_header'>" + section.header + "</div>";
    html += "</div>";

	html += "<div class='content_container'>";
		html += "<div class='content_text'>" + section.paragraphs[0] + "</div>";	
	html += "</div>";


    return html;
}

function UI_getOffice(office) {
	var html = "<div class='content_container testing_office_city'>" + office.city + "</div>";

	html += "<div class='content_container'>";

	for (var i = 0; i < office.offices.length; i++) {

		var item = office.offices[i];

		html += "<div class='col_33 office'>";

			html += "<div class='col_100 office_data'>" + item.name + "</div>";
			html += "<div class='col_100 office_data'>" + item.address + "</div>";
			html += "<div class='col_100 office_data'>" + item.phone + "</div>";
			html += "<div class='col_100 office_data'>" + item.open_hours + "</div>";

		html += "</div>";
	}

	html += "</div>";

	return html;
}