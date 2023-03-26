# Planning

Before starting work on my game, I searched for similar games online to draw inspiration for the design. Then, I used pencil and paper to sketch out the desired layout and the different elements that would be included in the HTML and what each would do.

# Building

Prior to starting the game's construction, I wrote the pseudocode, breaking down the game into smaller steps and considering how the user would interact with the page and what they would expect to see and when.

# Debugging

While building my game I had several issues:

- Initially, I was unable to get the `user-choice` to update on the HTML. To solve this, I first checked that the `query selector`s were working and that the `addEventListener` for `click` was functioning. Using this process I found there was a typo when selecting the buttons.

-I accidentally declared an `if` statement outside of a `function`, causing it to execute when the page loaded.

-I tried to link images to the buttons instead of the words rock, paper, scissors to make the game more visually interesting but I found it hard to make it work with JS. In the end I found a way around it and used Emojis on the HTML.

- Finally, I found that everything was happening at once and it was not very good for user interaction. I added a delay to the generate the `computer-choice` and `result` a second after the `user` picked their choice.
