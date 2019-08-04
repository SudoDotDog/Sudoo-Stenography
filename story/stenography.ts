/**
 * @author WMXPY
 * @namespace Story
 * @description Stenography
 */

import { Stenography } from "../src";

export const mount = (): string => {

    Stenography.register().matcher.listen(['s'], () => undefined);
    return 'Mounted';
};
