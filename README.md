# AmplitudeJS Player Examples

This repo is dedicated to showing off the power of [AmplitudeJS](https://github.com/serversideup/amplitudejs). All players are designed to be re-usable, built on [TailwindCSS](https://tailwindcss.com/) and ready for your application. If you are interested in creating your own player for submission, follow the instructions below.

## TODO:
🔲 Update links to examples on CodePen  
🔲 Upload links in 521 documentation  
🔲 Update CodePen CSS to be compiled TailwindCSS  
✅ Make a template that can be copy and pasted (This will take care of 9/10 steps below 👇)  
🔲 Write in main AmplitudeJS repo on where to find the templates

## How to Contribute an Example Player
To ensure similar structure across all player examples, I built a small template to follow. All you have to do is follow the instructions below 👇 and you get a nice shell for an AmplitudeJS player and TailwindCSS build tools! 

_If you are NOT using TailwindCSS, make sure to adjust your `package.json` file to include the necessary CSS libraries and remove the TailwindCSS packages!_

### Step 1: Copy and Rename _template Directory
The first step is to initialize a directory for the player. To do this, copy the `_template` directory and rename it to the name of your player. The name of your player should be all lowercase and use a `hyphen` to separate the words (I.E Vibrant Player should be `vibrant-player`).

_Make sure you copy the ENTIRE `_template` directory and not just the files in the directory! There are hidden files such as `.gitignore` that need to be copied over!_

### Step 2: Set Up Your Package Information
Once you are in the new directory for your player, open the `package.json` and adjust the following fields:
* name - Should be the name of your player with a hyphen.
* description - Describe your player so it's easy to find.
* author - Give yourself some credit! This should be your name.

### Step 3: Install NPM Packages
Now that you have everything set up, you just need to run `npm install`! All of the packages should be pulled down and ready to go!

### Step 4: Compile CSS
To do the initial compilation of CSS simply run: `npx tailwindcss -i ./src/css/base.css -o ./dist/css/styles.css --watch`. This will build your CSS and you will be ready to start creating your player.

### Other notes
* If you are using other JS, configure the build to export the compiled JS to `/dist/js/app.js`

### Sources
- https://garrettbland.com/blog/setting-up-tailwindcss-with-webpack-and-purgecss/
- https://dev.to/thefierycoder/setting-up-tailwind-css-v2-0-with-create-react-app-44h9