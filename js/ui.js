
function UI_getSection(section) {

	if (section.type == "list") {
		return UI_getListSection(section);
	} else if (section.type == "text_col_50") {
		return UI_getTextSection(section);
	}

	return "";
}

function UI_getListSection(section) {
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

	return "";
	
	var html = "<div class='content_container'>";          
    	html += "<div class='col_100 content_header'>" + section.header + "</div>";
    html += "</div>";

	html += "<div class='content_container'>";
		html += "<div class='col_100'>";
			
			html += "<div class=col_50 paragraphs_left_block>"
			for (var i = 0; i < section.paragraphs.left.length; i++) {
				html += "<div class='content_text'>" + section.paragraphs.left[i] + "</div>";	
			}

			html += "</div>";
			html += "<div class=col_50 paragraphs_right_block>"

			for (var i = 0; i < section.paragraphs.right.length; i++) {
				html += "<div class='content_text'>" + section.paragraphs.right[i] + "</div>";	
			}

			html += "</div>";

		html += "</div>"
	html += "</div>";


    return html;
}

function UI_getOfficeHeader(header) {
	return "<div class='content_container'> <div class='col_100 content_header normal_test_clinic_header'>" + header + "</div> </div>";
}

function UI_getOffice(office, phoneText, addressText, openHoursText) {
	var html = "<div class='content_container testing_office_city'>" + office.city + "</div>";

	html += "<div class='content_container'>";

	for (var i = 0; i < office.offices.length; i++) {

		var item = office.offices[i];

		html += "<div class='col_33 office'>";

			html += "<a class='col_100 office_data office_name' href='" + item.link + "'>" + item.name + "</a>";
			html += getSpannedOfficeData(addressText, item.address);
			html += getSpannedOfficeData(phoneText, item.phone);
			html += getSpannedOfficeData(openHoursText, item.open_hours);

		html += "</div>";
	}

	html += "</div>";

	return html;
}

function getSpannedOfficeData(boldText, regularText) {
	return "<div class='col_100 office_data'><span style='font-weight: 400;'>" + boldText + "</span>" + regularText + "</div>";
}

/*******************
	ARTICLE SUMMARY
*******************/

function UI_getArticleSummary(readMoreLabel, article) {

	var html = "<div class='article_summary_wrapper'>";

	html += "<div class='col_100 content_header'>" + article.header + "</div>";

		html += "<div class=col_100>"

			var paragraph = article.left_paragraphs[0];
			html += getContentText(paragraph, true);
		
		html += "</div>";

		html += "<div class=col_100>"
			html += "<div class='article_date_button'>" + article.date + "</div>";
			html += "<div class=article_read_more_button_wrapper>"
				html += "<a class='read_more_button_href' href='/article/?id=" + article.id + "'> " + readMoreLabel + "</a>";
			html += "</div>"
		html += "</div>";

	html += "</div>";
	
	return html;
}

/*******************
	ARTICLE
*******************/

function UI_getArticle(article) {

	var html = "<div class='article_wrapper'>";

	html += "<div class='col_100 content_header'>" + article.header + "</div>";

	html += "<div class=col_50>"

	for (var i = 0; i < article.left_paragraphs.length; i++) {
		var paragraph = article.left_paragraphs[i];
		html += getContentText(paragraph, false);
	}

	html += "</div>";
	html += "<div class=col_50>"

	for (var i = 0; i < article.right_paragraphs.length; i++) {
		var paragraph = article.right_paragraphs[i];
		html += getContentText(paragraph, false);
	}

	html += "</div>";
	html += "</div>";
	
	return html;
}

function getContentText(paragraph, ellipsize) {

	if (paragraph.indexOf(".png") >= 0 || paragraph.indexOf(".jpg") >= 0) {
		var html = "<div class='col_100 content_text_wrapper'>";
		html += "<div class='col_100 news_image' style='background-image: url(" + paragraph + "); height: 300px;'></div>";
		html += "</div>";		
		
		return html;
	}

	if (ellipsize) {
		paragraph += "...";
	}

	return "<div class='col_100 content_text_wrapper'> <div class='content_text'>" + paragraph + "</div></div>";
}















