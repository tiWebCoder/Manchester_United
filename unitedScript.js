

	/**
	 * Opens the menu
	 */
	function openMenu(){
		document.getElementById('menu').style.top = "0%";
	}

	/**
	 * Closes a content window when the white close icon is clicked
	 */
	function closeContent(){
		document.getElementById('close-button').parentElement.parentElement.style.top = "-100%";
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