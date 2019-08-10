/**
 * @author WMXPY
 * @namespace Style
 * @description Recipe
 */

import { JSSStyle, StyleManager } from "@sudoo/jss";

const RecipeStyleBase: JSSStyle = {

    grid: {
        display: 'grid',
        gridAutoRows: 'column',
        backgroundColor: 'red',
    },
};

export const RecipeStyle: StyleManager = StyleManager.create(RecipeStyleBase, 'Recipe').setPrefix('BWNL-Stenography-');
