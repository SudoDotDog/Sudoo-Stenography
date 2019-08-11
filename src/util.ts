/**
 * @author WMXPY
 * @namespace Stenography
 * @description Util
 */

import { altKeyText, arrowDownKeyText, arrowLeftKeyText, arrowRightKeyText, arrowUpKeyText, backspaceKeyText, capsLockKeyText, commandKeyText, controlKeyText, enterKeyText, shiftKeyText, spaceKeyText, tabKeyText, escapeKeyText } from "./config/declare";

const keyMap: Record<string, string> = {

    ArrowUp: arrowUpKeyText,
    ArrowDown: arrowDownKeyText,
    ArrowLeft: arrowLeftKeyText,
    ArrowRight: arrowRightKeyText,
    CapsLock: capsLockKeyText,
    Tab: tabKeyText,
    Enter: enterKeyText,
    Backspace: backspaceKeyText,
    Escape: escapeKeyText,

    ' ': spaceKeyText,
};

export const compareArray = <T>(first: T[], second: T[]): boolean => {

    if (first.length !== second.length) {
        return false;
    }

    return first.every((each: T, index: number) => each === second[index]);
};

export const isLetter = (key: string): boolean => {

    if (keyMap[key]) {
        return false;
    }
    return true;
};

export const parseLetter = (key: string): string => {

    const newKey: string | undefined = keyMap[key];
    if (newKey) {
        return newKey;
    }
    return key.toLowerCase();
};

export const isPureLetter = (event: KeyboardEvent): boolean => {

    if (!isLetter(event.key)) {
        return false;
    }

    if (event.ctrlKey) {
        return false;
    }

    if (event.altKey) {
        return false;
    }

    if (event.shiftKey) {
        return false;
    }

    return true;
};

export const parseEvent = (event: KeyboardEvent, mix: string = '+'): string => {

    const result: string[] = [];

    if (event.ctrlKey) {
        if (event.key === 'control') {
            return event.key;
        }
        result.push(controlKeyText);
    }

    if (event.altKey) {
        if (event.key === 'alt') {
            return event.key;
        }
        result.push(altKeyText);
    }

    if (event.shiftKey) {
        if (event.key === 'shift') {
            return event.key;
        }
        result.push(shiftKeyText);
    }

    const key: string = parseLetter(event.key);

    result.push(key);
    return result.join(mix);
};

export const parseKey = (key: string): string => {

    switch (key) {
        case arrowUpKeyText: return '↑';
        case arrowDownKeyText: return '↓';
        case arrowLeftKeyText: return '←';
        case arrowRightKeyText: return '→';

        case controlKeyText: return '⌃ Ctrl';
        case altKeyText: return '⌥ Alt';
        case shiftKeyText: return '⇧ Shift';
        case commandKeyText: return '⌘ Cmd';
        case capsLockKeyText: return '⇪ Caps Lock';
        case tabKeyText: return '↹ Tab';
        case enterKeyText: return '⏎ Enter';
        case backspaceKeyText: return '⌫ Backspace';
        case escapeKeyText: return '⎋ Escape';

        default: return key;
    }
};
