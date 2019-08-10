/**
 * @author WMXPY
 * @namespace Style
 * @description Recipe
 */

import { GRAY } from "@bwnl/shiny-inline";
import { JSSStyle, StyleManager } from "@sudoo/jss";

const RecipeStyleBase: JSSStyle = {

    wrapper: {
        display: 'grid',
        gridGap: '8px',
        gridAutoFlow: 'column',
        gridTemplateColumns: 'repeat(2, 1fr)',
    },
    insertion: {
        marginLeft: '1px',
        marginRight: '1px',
    },
    name: {
        fontWeight: 'bold',
    },
    description: {
        fontSize: '15px',
        color: GRAY,
    },
};

export const RecipeStyle: StyleManager = StyleManager.create(RecipeStyleBase, 'Recipe').setPrefix('BWNL-Stenography-');
