module.exports = [
"# The Homebrewery",
"Welcome traveler from an antique land. Please sit and tell us of what you have seen. The unheard of monsters, who slither and bite.",
"",
"Tell us of the wonderous items and and artifacts you have found, their mysteries yet to be unlocked. Of the vexing vocations and surprising skills you have seen.",
"",
"### Homebrew made easy",
"The Homebrewery allows for the creation and sharing of authentic looking Fifth-Edition homebrews, with just text editing. It accomplishes this by using [Markdown](https://help.github.com/articles/markdown-basics/) along with some custom CSS-stlying.",
"",
"**Try it! **Simply edit the text on the left and watch it *update live* on the right.",
"",
"#### Features",
"* Monster Stat Blocks",
"* Full class tables",
"* Notes and Tables",
"* Images",
"* Vertical spacing, column breaks, and mutliple Pages",
"",
"",
"#### Snippets",
"If you aren't used the Markdown-style syntax, don't worry! I've provided several **snippets** at the top of the editor. When clicked, these will *inject* text wherever your text cursor was.",
"",
"Each snippet is a common format from the Player's Handbook or is a feature of The Homebrewery. You'll never have to memorize eactly how a Monster Stat Block is suppose to be formatted.",
"",
"### Editing and Sharing",
"When you create your own homebrew you will be given a *edit url* and a *share url*.  Any changes you make will be automatically saved to the database within a few seconds. Anyone with the edit url will be able to make edits to your homebrew. So be careful about who you share it with.",
"",
"Anyone with the *share url* will be able to access a read-only version of your homebrew.",
"",
"",
"> ##### Be Careful: Concurrent Editing",
"> The Homebrewery **does not** support concurrent user editing. It's best one user at a time makes edits to avoid overwriting eachother.",
"",
"",
"",
"### Images",
"Images can be included 'inline' with the text using Markdown-style images. However for background images more control is needed.",
"",
"Background images should be included as HTML-style img tags. Using inline CSS you can precisely position your image where you'd like it to be. The image **snippet** provides an example of doing this.",
"",
"```",
"```",
"",
"### Not quite Markdown",
"Although the Homebrewery uses Markdown, to get all the stlying features from the PHB, we had to get a little creative. Some base HTML elements are not used as expected and I've had to include a few new keywords.",
"",
"___",
"* **Horizontal Rules** are generally used to *modify* existing elements into a different style. For example, a horizontal rule before a blockquote will give it the style of a Monster Stat Block.",
"* **New Pages** are controlled by the author. It's impossible for the site to detect when the end of a page is reached, so indicate you'd like to start a new page with **`/page`** on it's own line .",
"* **Code Blocks** are used only to indicate column breaks. Since they don't allow for styling within them, they weren't that useful to use.",
"* **HTML** can be used to get *just* the right look for your homebrew. I've included some examples in the snippet icons above the editor.",
"",
"",
"## Planned Features",
"Here are a few features I'm planning on next",
"* Convert to PDF",
"* Switch between DMG-style and Monster Manual-Style",
"* Download as images",
].join('\n');