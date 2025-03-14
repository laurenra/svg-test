declare class Lyrics {
    private isShowLyrics;
    private fileLocation;
    constructor();
    setDefaults(): void;
    svgCircle(): void;
    svgTriangle(): void;
    svgHexagon(objectId: string): void;
    svgStar(): void;
}
declare const myLyrics: Lyrics;
