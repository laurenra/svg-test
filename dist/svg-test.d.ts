declare enum Lodge {
    Aspen = "Aspen Lodge",
    Beckham = "Beckham Lodge",
    Family = "Family Lodge"
}
declare enum Wing {
    East = "East",
    West = "West"
}
declare enum Floor {
    Main = "Main Floor",
    Upper = "Upper Floor",
    Floor1 = "Floor 1",
    Floor2 = "Floor 2",
    Floor3 = "Floor 3"
}
interface SvgState {
    id: string;
    color: string;
}
declare class SvgTest {
    private isShowSvg;
    private fileLocation;
    private circleFillAttrRGB;
    private circleFillStyleRGB;
    private svgCountryStyleRGB;
    private svgRoomStyleRGB;
    private svgBeckhamRoomStyleRGB;
    private allSvgState;
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
    svgArea(objectId: string): void;
    svgBeckhamMouseOver(objectId: string): void;
    svgBeckhamMouseOut(objectId: string): void;
}
declare const svgtest: SvgTest;
