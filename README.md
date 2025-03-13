# svg-test

Show different SVGs that respond to clicks inside each one.

## Usage

### In a Browser
Open **index.html** in a browser. Click on the different SVG images to see 
what they do (change color).

You only need these files to run this:

```shell
index.html
css/style.css
js/svg-test.js
favicon.ico
icon.svg
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
JavaScript file, **js/svg-test.ts** that's used by index.html.

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

```sh
npm run build
```
