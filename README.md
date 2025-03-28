# svg-test

Show different SVGs that respond to clicks inside each one.

[See a demo here](https://laurenra.github.io/svg-test/).

## How to run it

The simplest way to run this is to download **svg-test.zip** from the latest 
release (to the right) and open **index.html** in a browser. Click on the SVG 
images to toggle a color change.

The file, **svg-test.zip**, is just a copy of the **/dist** directory in the 
project. It has all the files needed to run it, including icons and other fluff, 
but the essential files are just these:

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
an interactive floorplan.

[Using Interactive Floorplans to Improve Customer Experience](https://www.twitch.tv/videos/1302068683)


## Customize and Build project

If you clone the project and make changes to the **src/ts/svg-test.ts** 
TypeScript file, they must be compiled into the **main.js** JavaScript file, 
which is the code that **index.html** uses in the **/dist** directory. To be 
able to compile, you'll need 
[Node.js and NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) 
installed first.

Run the following in the project root directory to install the dependencies 
to be able to compile.

```sh
npm install
```

Compiled files are in the **/dist** directory. To compile **svg-test.ts** into 
the JavaScript file, **main.js**, used by **index.html**: 

```sh
npm run build
```

This also copies other files to /dist for test, like **index.html** and 
**css/style.css**.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development
TODO: get this to work so it watches for changes to the CSS (or SASS), TypeScript 
source, or index.html and recompiles and redeploys on port 9000.

```sh
npm run dev
```

### Compile and Minify for Production
This compiles files in /src and copies them to /dist. View the compiled 
/dist/index.html in a browser.

```sh
npm run build
```

### Publish demo on GitHub Pages 
This compiles the files and publishes the ones in /dist to GitHub Pages to see 
a demo. You can [see the demo page here](https://laurenra.github.io/svg-test/).

```sh
npm run deploy
```

When you run the **deploy** script, it automatically runs the **predeploy** 
script first.

The **predeploy** script in package.json compiles the files in /src and copies 
them to /dist.

The **deploy** script copies the files in /dist to the root of the **gh-pages** branch 
and pushes the branch to GitHub.

[GitHub Pages](https://docs.github.com/en/pages) is 
[configured](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) 
to use the files in the root of the gh-pages branch.

Tutorial: [Deploying to GitHub Pages using gh-pages](https://dev.to/scc33/deploying-to-github-pages-using-gh-pages-2d95)


## Troubleshooting

### Fill style versus fill attribute

**Fill style**

```javascript
<circle id="circleFillStyle" cx="60" cy="60" r="50" style="fill:lime;" />
```
or

```javascript
<circle id="circleFillStyle" cx="60" cy="60" r="50" />
```
with this in the CSS style file:
```javascript

main.css
#circleFillStyle {
    fill: lime;
}
```
**Fill attribute**

```javascript
<circle id="circleFillStyle" cx="60" cy="60" r="50" fill="lime" />
```

**Color**

Color can be set several ways. For example, all of the following generate the 
same green color:

```javascript
<circle id="circleFillStyle" cx="60" cy="60" r="50" fill="lime" />
<circle id="circleFillStyle" cx="60" cy="60" r="50" fill="#00ff00" />
<circle id="circleFillStyle" cx="60" cy="60" r="50" fill="rgb(0, 255, 0)" />
<circle id="circleFillStyle" cx="60" cy="60" r="50" fill="rgba(0, 255, 0, 1)" />

```

See [CSS color names](https://www.w3schools.com/cssref/css_colors.php) for all 
the named CSS colors.

When fill color is set as a fill style (rather than a fill attribute):
1. element.getAttribute('fill') will return a null.
2. getComputedStle(element).fill will return the resolved (computed)
   rgb() or rgba() value. If fill: red or fill: #ff0000 or
   fill: rgb(255, 0, 0), this is always resolved to rgb(255, 0, 0).
3. You can set the style with a named color (red), hex color (#ff0000),
   or an rgb() or rgba() color like rgb(255, 0, 0) or rgba(255, 0, 0, 1)
   using element.style.fill.
4. When both a fill style and a fill attribute are defined for an
   element, the fill style is used because it has greater specificity.
5. When a fill style is defined in the element and in a CSS file for
   that element ID, the fill style in the element is used because it has
   greater specificity than the one in the CSS file.



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
