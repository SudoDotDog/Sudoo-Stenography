/**
 * @author WMXPY
 * @namespace Style
 * @description Recipe
 */

import { JSSStyle, StyleManager } from "@sudoo/jss";

const RecipeStyleBase: JSSStyle = {

    wrapper: {
        display: 'grid',
        gridAutoFlow: 'column',
        gridTemplateColumns: 'repeat(2, 1fr)',
    },
};

export const RecipeStyle: StyleManager = StyleManager.create(RecipeStyleBase, 'Recipe').setPrefix('BWNL-Stenography-');
