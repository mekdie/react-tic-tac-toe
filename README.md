# Tic-Tac-Toe Game built with React (with Extensions!)

This project was based on Official React Tutorial by [Reactjs.org](https://reactjs.org/tutorial/tutorial.html). However what make this Mekdie's tic-tac-toe React game unique is that, this project only takes the original tutorial as a mere reference but all code are re-written with functional based components and hooks in 2022 instead of the original using class based components. At least this way I could practice my new React skills. Also as a challenge, all extra functionalities and features are added here too including from the official and personal.

\*Additional features/ideas (Extensions) [reference](https://reactjs.org/tutorial/tutorial.html#wrapping-up)

Access the game [here](https://mekdie.github.io/react-tic-tac-toe) built with Github Pages and gh-pages module.

If I have time to improve and increase this project's value, I will build MekdieAI as a computer opponent in this project (TicTacToe game). Wish me luck ^^

Have a good day.

## Version Changelog

\*Note: bold texts are the customized version of my implementation differing from the original tutorial.

### Version 0.1:

-   First release with basic game functionality
-   **Custom styling on the game board**
-   **Changed the file structure into separate components and folder/files(not in one JS file)**
-   **Rewritten the tutorial from class based components into functional based component**

### Version 0.2:

-   Lifting the state up to the main component (App.js) to show the past moves

### Version 0.3:

-   Current version:

    -   Play 2 players tic-tac-toe
    -   Player won indicator (no draw yet)
    -   Storing game moves' history as game progresses
    -   Allowing players to review game's history moves and see previous game's board

-   Implement Time Travel to undo / travel previous moves
-   **_\*Bug found: the board is moving around when the next player indicator changes_**
-   If have extra time to practice React skills, in the next versions (0.4 onwards) the game will be updated with these ideas (From [here](https://reactjs.org/tutorial/tutorial.html#wrapping-up)to improve game systems that could be made which are listed in order of increasing difficulty:

    1.  :white_check_mark: Display the location for each move in the format (col, row) in the move history list.
    2.  :white_check_mark: Bold the currently selected item in the move list.
    3.  :white_check_mark: Rewrite Board to use two loops to make the squares instead of hardcoding them.
    4.  Add a toggle button that lets you sort the moves in either ascending or descending order.
    5.  When someone wins, highlight the three squares that caused the win.
    6.  When no one wins, display a message about the result being a draw.

### Version 0.4:

-   Display the location for each move in the format (col, row) in the move history list

### Version 0.5:

-   Bold the currently selected item in the move list.

### Version 0.6:

-   Rewrite Board to use two loops to make the squares instead of hardcoding them.
-   Dynamically render a board with custom row and cols

### Version 0.7:

-
