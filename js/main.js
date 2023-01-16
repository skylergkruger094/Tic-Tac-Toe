	/*----- constants -----*/


	/*----- state variables -----*/

    let board;  // array of 3 column arrays
    let turn; // 1 or -1
    let winner; // null = no winner, 1 || -1 = winner, 'T' = tie game

	/*----- cached elements  -----*/


	/*----- event listeners -----*/


	/*----- functions -----*/

    // Initialize all state variables and call render()

    function init() {
        board = [
            [0, 0, 0], // column 0
            [0, 0, 0], // column 1
            [0, 0, 0], // column 2
        ];
    }