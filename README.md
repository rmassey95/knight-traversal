# knight-traversal

A task from the Odin Project which is a function that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way. 

For example, if you enter `knightMoves([0,0], [3,3])` into the `knightMoves` function, you will receive back coordinates that the knight moves to get from the starting array position (`[0,0]`) to the ending positon (`[3,3]`). 

## Usage 

To use, open up `index.html`. Here you will see two input boxes, one for a start position and one for an end position. Enter a valid starting position in the following format: `0,0` for start positon `[0,0]`. Start position can be any valid positon.

Follow the same format for the end position. When the positons are entered click submit and if you open up dev tools you will see the moves that were made and how many moves it took to get to the end position specified. 

When entering a start and end position, I did not do any validation so it must be entered exactly as specified (for example, `3,3`) for the program to work. The assignement focus was on building logic using binary search tree, less so on the UI/UX portion.
