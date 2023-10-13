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

	menu.style.transform = 'scaleY(0)';
	menuIcon.style.display = 'block';
	closeIcon.style.display = 'none';
}

	/*******************************************************************TO SORT */
    /**
     * Filters fixtures table based on given team name input 
     */
     function searchFixtures(){
		var input, filter, table, tr, td, text_value;
		input = document.getElementById("fixtures-search-bar");
		filter = input.value.toUpperCase();
		table = document.getElementById("fixtures-table");
		tr = table.getElementsByTagName("tr");

		for (var index_position = 0; index_position < tr.length; index_position++){
			td = tr[index_position].getElementsByTagName("td")[0];
			
			if (td){
				text_value = td.textContent || td.innerText;

				if (text_value.toUpperCase().indexOf(filter) > -1){
					tr[index_position].style.display = "";
				} 
				else{
					tr[index_position].style.display = "none";
				}
			}
		}
	}

	/**
	 * Posts an inputted message to the message board
	 */
	function postMessage(){
		let inputted_message = document.getElementById("input-message-field");
		let message_board = document.getElementById("message-board");

		let posted_message = document.createElement("DIV");
			posted_message.innerText = inputted_message.innerText;

		message_board.appendChild("posted-message");

		console.log(message_board.childNodes);
	}
