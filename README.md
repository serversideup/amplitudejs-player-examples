# AmplitudeJS Player Examples

This repo is dedicated to showing off the power of [AmplitudeJS](https://github.com/serversideup/amplitudejs). All players are designed to be re-usable, built on [TailwindCSS](https://tailwindcss.com/) and ready for your application. If you are interested in creating your own player for submission, follow the instructions below.

## TODO:
- [ ] Update links to examples on CodePen
- [ ] Upload links in 521 documentation
- [ ] Update CodePen CSS to be compiled TailwindCSS
- [ ] Make a template that can be copy and pasted (This will take care of 9/10 steps below 👇)
- [ ] Write in main AmplitudeJS repo on where to find the templates

## How to Contribute an Example Player
To ensure all example players are running the same base software, follow the instructions below:

### Step 1: Create a Root Directory
For the player create, a root directory. This should be all lowercase and have `hyphen` to separate the words.

### Step 2: Initialize NPM
In your new directory, run `npm init` and initialize the NPM package for the player. Make sure to include your name.

### Step 3: Add .gitignore File
Add the `.gitignore` file so we don't push up all of the `node_modules` and other files we don't need as follows:

```
/node_modules
```

### Step 3: Install PostCSS & TailwindCSS
Run the following command:
```
npm install tailwindcss@latest postcss@latest autoprefixer postcss-cli postcss-import --save-dev
```

This will initialize the latest version of TailwindCSS so you can use it with your player.

### Step 4: Intialize TailwindCSS
This allows us to extend TailwindCSS and add custom features:
```
npx tailwindcss init
```

### Step 5: Create SRC Container Directories
Within your newly created directory, create the following directories:

1. `/src/`
2. `/src/css`
3. `/src/js`

These directories will contain the source code that has not been compiled for the player.
In the `/src/css` directory add a `base.css` file with the following code:

```
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
``` 

We now have everything set up for our launching point with TailwindCSS!

### Step 6: Create Compiled Container Directories
Within your newly created directory, create the following directories:

1. `/dist`
2. `/dist/css`
3. `/dist/js`

These are where the output of your source files will live. These are the files that will be included in your `index.html` file to use with the players.

### Step 7: Create index.html File
This file will house our player. All markup for the player will live in this file. A good base is:
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>AmplitudeJS - {Player Title Here}</title>
        
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/amplitudejs@{{version-number}}/dist/amplitude.js"></script>
        <link type="text/css" rel="stylesheet" href="./dist/css/styles.css"/>
        <link rel="icon" href="../resources/img/favicon.ico">
    </head>

    <body>
        
        
    </body>

    <script type="text/javascript" src="./dist/js/app.js"></script>
</html>
```

### Step 8: Set Up PostCSS Config
Create the `postcss.config.js` file in the root of your directory to instruct PostCSS on how to compile the styles:

```js
module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer')
    ],
}
```

### Step 9: Add CSS Build Script to package.json
Now in the `scripts` section of your package.json, add the following script:

```js
"scripts": {
    "build:css": "postcss src/css/base.css -o dist/css/styles.css"
},
```

To compile your CSS simply run: `npm run build:css`.

### Other notes
* If you are using other JS, configure the build to export the compiled JS to `/dist/js/app.js`

### Sources
- https://garrettbland.com/blog/setting-up-tailwindcss-with-webpack-and-purgecss/
- https://dev.to/thefierycoder/setting-up-tailwind-css-v2-0-with-create-react-app-44h9
