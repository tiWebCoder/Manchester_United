/**
 * Displays the disclaimer when clicking the button inside the footer
 */
function viewDisclaimer(){
	alert("This site has been constructed as coursework for module U08054 Web Technology, at Oxford Brookes University. It is not a working website and is not connected with any site or individual referenced. The views and opinions expressed within these pages are personal and should not be construed as reflecting the views and opinions of Oxford Brookes University.");
}

/**
 * Displays a maintenance alert when clicking the appropraite content
 */
function viewMaintenanceAlert(){
	alert("This content is currently undergoing maintenance and will be fully functioning / available soon.");
}

/**
 * Opens the menu when the menu icon is clicked
 * @var menu - menu with links to other pages
 * @var menuIcon - icon which displays the menu when clicked
 * @var closeIcon - cross icon which closes the menu when clicked
 */
function openMenu(){
	var menu = document.getElementById('menu'),
		menuIcon = document.getElementById('menu-icon'),
		closeIcon = document.getElementById('close-icon');

	menu.style.height = '100%';
	menu.style.overflow = 'visible';
	menu.style.transform = 'scaleY(1)';
	menuIcon.style.display = 'none';
	closeIcon.style.display = 'block';
}

/**
 * Closes the menu when the close icon is clicked
 * @var menu - menu with links which will become hidden when closed
 * @var menuIcon - icon which displays the menu will become visible
 * @var closeIcon - cross icon which becomes hidden and closes the menu
 */
function closeMenu(){
	var menu = document.getElementById('menu'),
		menuIcon = document.getElementById('menu-icon'),
		closeIcon = document.getElementById('close-icon');

	menu.style.height = '0';
	menu.style.overflow = 'hidden';
	menu.style.transform = 'scaleY(0)';
	menuIcon.style.display = 'block';
	closeIcon.style.display = 'none';
}

/**
 * Filters all fixtures based on given input value
 * @var input - #fixtures-search-bar
 * @var table - #fixtures-table
 * @var table_row - table rows within #fixtures-table
 * @var table_column - table columns within #fixtures-table
 */
function searchFixtures(){
	var input = document.getElementById('fixtures-search-bar'),
		table = document.getElementById("fixtures-all"),
		filter = input.value.toUpperCase(),
		table_row = table.getElementsByTagName('tr'),
		text_value;

	for(var value_position = 0; value_position < table_row.length; value_position++){
		var table_column = table_row[value_position].getElementsByTagName("td")[0];

		if(table_column){
			text_value = table_column.textContent || table_column.innerText;

			if(text_value.toUpperCase().indexOf(filter) > -1){
				table_row[value_position].style.display = '';
			}
			else{
				table_row[value_position].style.display = 'none';
			}
		}
	}
}

/**
 * Displays tab content when the appropriate button is clicked
 * @param event - pointer to tab content to be opened
 * @param toOpen - tab content to be opened
 * @var tabIndex - index position of tab content to be opened
 * @var tabContent - containers with tab content to open when button is clicked
 * @var tablinks - buttons to open tab content when clicked
 */
function openTab(event, toOpen) {
	var tabIndex, 
		tabContent = document.getElementsByClassName("container-tab-content"),
		tablinks = document.getElementById('history-content').getElementsByTagName('BUTTON');

	for (tabIndex = 0; tabIndex < tabContent.length; tabIndex++) {
		tabContent[tabIndex].style.display = "none";
	}

	for (tabIndex = 0; tabIndex < tablinks.length; tabIndex++) {
		tablinks[tabIndex].className = tablinks[tabIndex].className.replace(" active", "");
	}

	document.getElementById(toOpen).style.display = "grid";
	event.currentTarget.className += " active";
}