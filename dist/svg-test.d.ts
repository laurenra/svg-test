declare class SvgTest {
    private isShowSvg;
    private fileLocation;
    constructor();
    setDefaults(): void;
    svgCircle(): void;
    svgTriangle(): void;
    svgHexagon(objectId: string): void;
    svgStar(): void;
    svgCountry(countryId: string): void;
}
declare const svgtest: SvgTest;
