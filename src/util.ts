/**
 * @author WMXPY
 * @namespace Stenography
 * @description Util
 */

export const compareArray = <T>(first: T[], second: T[]): boolean => {

    if (first.length !== second.length) {
        return false;
    }

    return first.every((each: T, index: number) => each === second[index]);
};
