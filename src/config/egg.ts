/**
 * @author WMXPY
 * @namespace Stenography
 * @description Egg
 */

export enum EASTER_EGG_NAME {

    CONTRA = "CONTRA",
}

export const stenographyEasterEgg: Record<EASTER_EGG_NAME, string[]> = Object.freeze({

    [EASTER_EGG_NAME.CONTRA]: ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'],
});
