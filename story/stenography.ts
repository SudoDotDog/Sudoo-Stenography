/**
 * @author WMXPY
 * @namespace Story
 * @description Stenography
 */

import { Stenography } from "../src";

export const mount = (): string => {

    Stenography.register().matcher.listen(['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'], () => console.log('bitten'));
    return 'Mounted';
};
