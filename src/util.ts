/**
 * @author WMXPY
 * @namespace Stenography
 * @description Util
 */

import { altKeyText, controlKeyText, shiftKeyText } from "./declare";

export const compareArray = <T>(first: T[], second: T[]): boolean => {

    if (first.length !== second.length) {
        return false;
    }

    return first.every((each: T, index: number) => each === second[index]);
};

export const parseEvent = (event: KeyboardEvent): string => {

    const result: string[] = [];

    if (event.ctrlKey) {
        result.push(controlKeyText);
    }

    if (event.altKey) {
        result.push(altKeyText);
    }

    if (event.shiftKey) {
        result.push(shiftKeyText);
    }

    result.push(event.key.toLowerCase());
    return result.join('+');
};
