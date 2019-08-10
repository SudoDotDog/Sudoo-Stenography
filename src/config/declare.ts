/**
 * @author WMXPY
 * @namespace Stenography
 * @description Declare
 */

export const controlKeyText: string = 'ctrl';
export const altKeyText: string = 'alt';
export const shiftKeyText: string = 'shift';

export const arrowUpKeyText: string = 'up';
export const arrowDownKeyText: string = 'down';
export const arrowLeftKeyText: string = 'left';
export const arrowRightKeyText: string = 'right';

export type InterceptorCallback = (combos: string[]) => void;

export type InterceptorStructure = {

    readonly name?: string;
    readonly description?: string;
    readonly hidden?: boolean;
    readonly combos: string[];
    readonly callback: InterceptorCallback;
};
