# Tic-Tac-Toe Game built with React (with additional features / ideas!)

This project was based on Official React Tutorial by [Reactjs.org](https://reactjs.org/tutorial/tutorial.html).

Additional features/ideas reference

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
-   If have extra time to practice React skills, in the next versions (0.4 onwards) the game will be updated with these ideas to improve game systems that could be made which are listed in order of increasing difficulty:

1.  :white_check_mark: Display the location for each move in the format (col, row) in the move history list.
2.  Bold the currently selected item in the move list.
3.  Rewrite Board to use two loops to make the squares instead of hardcoding them.
4.  Add a toggle button that lets you sort the moves in either ascending or descending order.
5.  When someone wins, highlight the three squares that caused the win.
6.  When no one wins, display a message about the result being a draw.

### Version 0.4:

-   Display the location for each move in the format (col, row) in the move history list

### Version 0.5:
