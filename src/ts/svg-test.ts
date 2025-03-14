/**
 * SVG click handlers
 */

class SvgTest {

  private isShowSvg: boolean;
  private fileLocation: string;

  constructor() {
    this.isShowSvg = false;
    this.fileLocation = "";
  }

  setDefaults() {
    this.isShowSvg = false;
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

  svgHexagon(objectId: string) {
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

const svgtest = new SvgTest();
document.getElementById('circle1')?.addEventListener('click', svgtest.svgCircle);
document.getElementById('triangle1')?.addEventListener('click', svgtest.svgTriangle);
document.getElementById('hexagon1')?.addEventListener('click', function() {
  svgtest.svgHexagon('hexagon1')
});
document.getElementById('star1')?.addEventListener('click', svgtest.svgStar);
document.getElementById('hexagon2')?.addEventListener('click', function() {
  svgtest.svgHexagon('hexagon2')
});
document.getElementById('hexagon3')?.addEventListener('click', function() {
  svgtest.svgHexagon('hexagon3')
});
console.info("svg-test page is loaded...");

