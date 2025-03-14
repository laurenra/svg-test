# svg-test

Show different SVGs that respond to clicks inside each one.

## Usage

### In a Browser
Open **index.html** in a browser. Click on the different SVG images to see 
what they do (change color).

You only need these files in the /dist directory to run this:

```shell
css/style.css
index.html
main.js
```

### Mendix investigation

This was built as an investigation to see if we could use SVGs as clickable 
areas in a Mendix application. There is a lot to do to make this work in 
Mendix and do it in a way that doesn't require a lot of hand-coding for each 
individual polygon. We want to show a simple floorplan of, for example, a block 
of apartments, with each unit depicted by an SVG polygon that can be clicked to 
show information about the unit, like if it's available.

There is a Mendix widget that looks like it sort of does this.

[React Image Mapper](https://marketplace.mendix.com/link/component/235635).

There is a video on Twitch from some Mendix developers showing how they built 
an interactive floorplant.

[Using Interactive Floorplans to Improve Customer Experience](https://www.twitch.tv/videos/1302068683)


## Customize and Build project

If you make changes to the **src/ts/svg-test.ts** TypeScript file, 
they must be compiled into the **js/svg-test.js** JavaScript file, 
which is the code that **index.html** uses. To be able to compile, you'll need 
[Node.js and NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) 
installed first to run the following in the project root directory to install 
the dependencies.

```sh
npm install
```

Then compile the modified **svg-test.ts** TypeScript file into the 
JavaScript file, **/dist/main.js** that's used by index.html with 
**'npm run build'**.

```sh
npm run build
```

Changes to **index.html** and **css/style.css** take effect immediately. You don't 
need to compile anything.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production
This compiles files in /src and copies them to /dist. View the compiled 
/dist/index.html in a browser.

```sh
npm run build
```

## Troubleshooting

### Webpack
See also:

[What is a tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

[Webpack - Getting Started](https://webpack.js.org/guides/getting-started/#basic-setup)

[Webpack - Typescript](https://webpack.js.org/guides/typescript/)

[Webpack - HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/)

[Webpack - CopyWebpackPlugin](https://webpack.js.org/plugins/copy-webpack-plugin/)

[How to set up Webpack + TypeScript + SCSS to create a simple front-end in a modern way](https://medium.com/@coder_in_austria/how-to-set-up-webpack-typescript-scss-to-create-a-simple-front-end-in-a-modern-way-86850ee3f1c6)

[How to Use the Copy Webpack Plugin](https://www.squash.io/how-to-use-the-copy-webpack-plugin/)

#### Webpack doesn't create global variables
You can't directly access functions or class methods in the generated 
Javascript, main.js, directly from index.html, for example, in an onclick 
event, because it's not defined with global scope. Webpack doesn't generate 
variables with global scope. To use the functions or class methods as 
onclick event handlers, add event listeners to the elements. For example:

```javascript
document.getElementById('triangle1')?.addEventListener('click', svgtest.svgTriangle);
document.getElementById('hexagon1')?.addEventListener('click', function() {
  svgtest.svgHexagon('hexagon1')
});
```

#### Versions
`npx webpack --version`

#### Help
`npx webpack --help`
