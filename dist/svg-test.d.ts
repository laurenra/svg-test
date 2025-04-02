declare class SvgTest {
    private isShowSvg;
    private fileLocation;
    private circleFillAttrRGB;
    private circleFillStyleRGB;
    private svgCountryStyleRGB;
    private svgRoomStyleRGB;
    private svgBeckhamRoomStyleRGB;
    constructor();
    setDefaults(): void;
    svgCircleFillAttr(objectId: string): void;
    svgCircleFillStyle(objectId: string): void;
    svgTriangle(): void;
    svgHexagon(objectId: string): void;
    svgStar(): void;
    svgCountryStyle(objectId: string): void;
    svgRoom(objectId: string): void;
    svgBeckhamRoom(objectId: string): void;
    svgBeckhamMouseOver(objectId: string): void;
    svgBeckhamMouseOut(objectId: string): void;
}
declare const svgtest: SvgTest;
