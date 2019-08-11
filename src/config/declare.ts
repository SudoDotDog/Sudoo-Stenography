/**
 * @author WMXPY
 * @namespace Stenography
 * @description Declare
 */

export const controlKeyText: string = 'ctrl';
export const altKeyText: string = 'alt';
export const shiftKeyText: string = 'shift';
export const capsLockKeyText: string = 'capslock';
export const commandKeyText: string = 'cmd';
export const tabKeyText: string = 'tab';
export const enterKeyText: string = 'enter';
export const backspaceKeyText: string = 'backspace';
export const escapeKeyText: string = 'escape';

export const arrowUpKeyText: string = 'up';
export const arrowDownKeyText: string = 'down';
export const arrowLeftKeyText: string = 'left';
export const arrowRightKeyText: string = 'right';

export const spaceKeyText: string = 'space';

export const plusKeyText: string = 'plus';
export const minusKeyText: string = 'minus';
export const timesKeyText: string = 'times';
export const divideKeyText: string = 'divide';

export type InterceptorCallback = (combos: string[]) => void;

export type InterceptorStructure = {

    readonly name?: string;
    readonly description?: string;
    readonly hidden?: boolean;
    readonly combos: string[];
    readonly callback: InterceptorCallback;
};
