/**
 * SVG click handlers
 */

class SvgTest {

  private isShowSvg: boolean;
  private fileLocation: string;
  private circleFillAttrRGB: { originalColor: string, isSaved: boolean };
  private circleFillStyleRGB: { originalColor: string, isSaved: boolean };
  private svgCountryStyleRGB: { originalColor: string, isSaved: boolean };
  private svgRoomStyleRGB: { originalColor: string, isSaved: boolean };
  private svgBeckhamRoomStyleRGB: { originalColor: string, isSaved: boolean };

  constructor() {
    this.isShowSvg = false;
    this.fileLocation = "";
    this.circleFillAttrRGB = { originalColor: '', isSaved: false };
    this.circleFillStyleRGB = { originalColor: '', isSaved: false };
    this.svgCountryStyleRGB = { originalColor: '', isSaved: false };
    this.svgRoomStyleRGB = { originalColor: '', isSaved: false };
    this.svgBeckhamRoomStyleRGB = { originalColor: '', isSaved: false };
  }

  setDefaults() {
    this.isShowSvg = false;
  }

  /**
   * When fill color is set as a fill attribute (rather than a fill style),
   * 1. element.getAttribute('fill') will return the value set in the element's
   *    fill= attribute, which can be fill='red' or fill='#ff0000' or
   *    fill='rgb(255, 0, 0)'
   * 2. getComputedStle(element).fill will return the resolved (computed)
   *    rgb() or rgba() value. If fill='red' this is resolved to rgb(255, 0, 0).
   * @param objectId
   */
  svgCircleFillAttr(objectId: string) {
    const thisSvg = document.getElementById(objectId);
    if (thisSvg) {
      const styleFillColor = getComputedStyle(thisSvg).fill;
      let fillColor = thisSvg.getAttribute('fill');
      // Get original color and save it.
      if (!this.circleFillAttrRGB.isSaved) {
        this.circleFillAttrRGB = {
          originalColor: fillColor ?? '',
          isSaved: true
        };
      }
      if (fillColor == this.circleFillAttrRGB.originalColor) {
        thisSvg.setAttribute('fill', 'green');
      } else {
        thisSvg.setAttribute('fill', this.circleFillAttrRGB.originalColor);
      }
    }
    // alert("You clicked the circle");
  }

  /**
   * When an element fill attribute and fill style are both set, which is
   * actually used? What is the specificity?
   */

  /**
   * When fill color is set as a fill style (rather than a fill attribute),
   * 1. element.getAttribute('fill') will return a null.
   * 2. getComputedStle(element).fill will return the resolved (computed)
   *    rgb() or rgba() value. If fill: red or fill: #ff0000 or
   *    fill: rgb(255, 0, 0), this is always resolved to rgb(255, 0, 0).
   * 3. You can set the style with a named color (red), hex color (#ff0000),
   *    or an rgb() or rgba() color like rgb(255, 0, 0) or rgba(255, 0, 0, 1)
   *    using element.style.fill.
   * 4. When both a fill style and a fill attribute are defined for an
   *    element, the fill style is used because it has greater specificity.
   * 5. When a fill style is defined in the element and in a CSS file for
   *    that element ID, the fill style in the element is used because it has
   *    greater specificity than the one in the CSS file.
   * @param objectId
   */
  svgCircleFillStyle(objectId: string) {
    const thisSvg = document.getElementById(objectId);
    if (thisSvg) {
      const styleFillColor = getComputedStyle(thisSvg).fill;
      let fillColor = thisSvg.getAttribute('fill');
      // Get original color and save it.
      if (!this.circleFillStyleRGB.isSaved) {
        this.circleFillStyleRGB = {
          originalColor: styleFillColor ?? '',
          isSaved: true
        };
      }
      if (styleFillColor == this.circleFillStyleRGB.originalColor) {
        // thisSvg.setAttribute('fill', 'blue');
        thisSvg.style.fill = 'blue';
      } else {
        // thisSvg.setAttribute('fill', 'orange');
        thisSvg.style.fill = this.circleFillStyleRGB.originalColor;
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
      } else {
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
      } else {
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
      } else {
        thisSvg.setAttribute('fill', 'coral');
      }
    }
    // alert("You clicked the star");
  }

  /**
   *
   * @param countryId
   */
  svgCountryStyle(objectId: string) {
    const thisSvg = document.getElementById(objectId);
    if (thisSvg) {
      const styleFillColor = getComputedStyle(thisSvg).fill;
      let fillColor = thisSvg.getAttribute('fill');
      // Get original color and save it.
      if (!this.svgCountryStyleRGB.isSaved) {
        this.svgCountryStyleRGB = {
          originalColor: styleFillColor ?? '',
          isSaved: true
        };
      }
      if (styleFillColor == this.svgCountryStyleRGB.originalColor) {
        // thisSvg.setAttribute('fill', 'blue');
        thisSvg.style.fill = 'blue';
      } else {
        // thisSvg.setAttribute('fill', 'orange');
        thisSvg.style.fill = this.svgCountryStyleRGB.originalColor;
      }
    }
    // alert("You clicked the circle");
  }

  svgRoom(objectId: string) {
    const thisSvg = document.getElementById(objectId);
    if (thisSvg) {
      const fillPoly = thisSvg.querySelector('.room-fill');
      if (fillPoly) {
        const styleFillColor = getComputedStyle(fillPoly).fill;
        let fillColor = fillPoly.getAttribute('fill');
        // Get original color and save it.
        if (!this.svgRoomStyleRGB.isSaved) {
          this.svgRoomStyleRGB = {
            originalColor: styleFillColor ?? '',
            isSaved: true
          };
        }
        if (styleFillColor == this.svgRoomStyleRGB.originalColor) {
          // fillPoly.style.fill = 'blue';
          fillPoly.setAttribute('fill', 'blue');
        } else {
          // fillPoly.style.fill = this.svgRoomStyleRGB.originalColor;
          thisSvg.setAttribute('fill', this.svgRoomStyleRGB.originalColor);
        }
      }
    }
    // alert("You clicked the circle");
  }

  svgBeckhamRoom(objectId: string) {
    const thisSvg = document.getElementById(objectId);
    if (thisSvg) {
      const styleFillColor = getComputedStyle(thisSvg).fill;
      let fillColor = thisSvg.getAttribute('fill');
      // Get original color and save it.
      if (!this.svgBeckhamRoomStyleRGB.isSaved) {
        this.svgBeckhamRoomStyleRGB = {
          originalColor: styleFillColor ?? '',
          isSaved: true
        };
      }
      if (styleFillColor == this.svgBeckhamRoomStyleRGB.originalColor) {
        thisSvg.style.fill = 'rgb(204, 255, 204)'; // lighter than pale green
        // thisSvg.setAttribute('fill', 'blue');
      } else {
        thisSvg.style.fill = this.svgBeckhamRoomStyleRGB.originalColor;
        // thisSvg.setAttribute('fill', this.svgBeckhamRoomStyleRGB.originalColor);
      }
    }
    // alert("You clicked the circle");
  }

  svgBeckhamMouseOver(objectId: string) {
    const thisSvg = document.getElementById(objectId);
    if (thisSvg) {
      const thisPopup = document.getElementById("name-large-1-popup");
      if (thisPopup) {
        thisPopup.style.display = "block"
      }
    }
    // alert("You clicked the circle");
  }

  svgBeckhamMouseOut(objectId: string) {
    const thisSvg = document.getElementById(objectId);
    if (thisSvg) {
      const thisPopup = document.getElementById("name-large-1-popup");
      if (thisPopup) {
        thisPopup.style.display = "none"
      }
    }
    // alert("You clicked the circle");
  }

}

  /**
 * Begin Program
 */

const svgtest = new SvgTest();
// document.getElementById('circle1')?.addEventListener('click', svgtest.svgCircle);
document.getElementById('circleFillAttr')?.addEventListener('click', function () {
  svgtest.svgCircleFillAttr('circleFillAttr')
});
document.getElementById('circleFillStyle')?.addEventListener('click', function () {
  svgtest.svgCircleFillStyle('circleFillStyle')
});
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

// Room layout
document.getElementById('Room1')?.addEventListener('click', function() {
  svgtest.svgRoom('Room1')
});

// Beckham lodge layout
document.getElementById('room-large-1')?.addEventListener('click', function() {
  svgtest.svgBeckhamRoom('room-large-1')
});
document.getElementById('room-large-2')?.addEventListener('click', function() {
  svgtest.svgBeckhamRoom('room-large-2')
});

document.getElementById('room-large-1')?.addEventListener('mouseover', function() {
  svgtest.svgBeckhamMouseOver('room-large-1')
});
document.getElementById('room-large-1')?.addEventListener('mouseout', function() {
  svgtest.svgBeckhamMouseOut('room-large-1')
});


// Map of Africa
document.getElementById('Marokko')?.addEventListener('click', function() {
  svgtest.svgCountryStyle('Marokko')
});
console.info("svg-test page is loaded...");

