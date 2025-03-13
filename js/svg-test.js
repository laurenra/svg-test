"use strict";
/**
 * Event flow:
 * 1. Select file (<input> id=fileSelected handler method named handleEvent)
 * dispatches "click" event to trigger <button> id=startBtn onclick method
 * named initLyricsToPreview. There may be a better way to do this.
 *
 * Because the handleEvent context is the calling element's context (the
 * targetElement of the <input> element), it doesn't have the context of the
 * Lyrics object, and I don't know any way to get it to access the variables
 * and methods in it, like this.LyricsText. To use these methods, the text
 * from the file is copied into <textarea id=lyricsEditor>, then the file
 * input handler dispatches a "click" event to <button id=startBtn>. The
 * startBtn onClick event handler does have the context of the Lyrics object
 * and its methods, because a Lyrics object was created at the beginning of
 * the page load (see the end of this file), so it reads the lyrics text in
 * <textarea id=lyricsEditor> and populates the variables in the Lyrics object.
 *
 * TODO: Fix edit text with odd numbered lines.
 * TODO: Fix displaying 3 lines (or 4 or 1), when it loads from file, it cuts off the last rows instead of padding with blank lines
 * TODO: what happens if someone enters number out of range? Does it reset to max or min? Or do I have to do that?
 * TODO: Up down arrow keys move to previous and next lines
 */
class Lyrics {
    constructor() {
        this.isShowLyrics = false;
        this.fileLocation = "";
    }
    setDefaults() {
        this.isShowLyrics = false;
    }
    svgCircle() {
        const thisSvg = document.getElementById("circle1");
        if (thisSvg) {
            const styleFillColor = getComputedStyle(thisSvg).fill;
            let fillColor = thisSvg.getAttribute('fill');
            if (fillColor == 'red') {
                thisSvg.setAttribute('fill', 'green');
            }
            else {
                thisSvg.setAttribute('fill', 'red');
            }
        }
        // alert("You clicked the circle");
    }
    svgTriangle() {
        const thisSvg = document.getElementById("triangle1");
        if (thisSvg) {
            const styleFillColor = getComputedStyle(thisSvg).fill;
            let fillColor = thisSvg.getAttribute('fill');
            if (fillColor == 'lime') {
                thisSvg.setAttribute('fill', 'lightskyblue');
            }
            else {
                thisSvg.setAttribute('fill', 'lime');
            }
        }
        // alert("You clicked the triangle");
    }
    svgHexagon(objectId) {
        const thisSvg = document.getElementById(objectId);
        if (thisSvg) {
            const styleFillColor = getComputedStyle(thisSvg).fill;
            let fillColor = thisSvg.getAttribute('fill');
            if (fillColor == 'orchid') {
                thisSvg.setAttribute('fill', 'aqua');
            }
            else {
                thisSvg.setAttribute('fill', 'orchid');
            }
        }
        // alert("You clicked the hexagon");
    }
    svgStar() {
        const thisSvg = document.getElementById("star1");
        if (thisSvg) {
            const styleFillColor = getComputedStyle(thisSvg).fill;
            let fillColor = thisSvg.getAttribute('fill');
            if (fillColor == 'coral') {
                thisSvg.setAttribute('fill', 'yellow');
            }
            else {
                thisSvg.setAttribute('fill', 'coral');
            }
        }
        // alert("You clicked the star");
    }
}
/**
 * Begin Program
 */
const myLyrics = new Lyrics();
console.info("Instianted myLyrics object of Lyrics class...");
