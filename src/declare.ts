/**
 * @author WMXPY
 * @namespace Stenography
 * @description Declare
 */

export const controlKeyText: string = 'ctrl';
export const altKeyText: string = 'alt';
export const shiftKeyText: string = 'shift';

export type Interceptor = {

    readonly combo: string[];
    readonly callback: (combo: string[]) => void;
};
