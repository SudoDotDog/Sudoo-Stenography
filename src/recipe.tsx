/**
 * @author WMXPY
 * @namespace Stenography
 * @description Recipe
 */

import { Classes } from "jss";
import * as React from "react";
import { KeyboardKey } from "./components/keyboard";
import { Interceptor } from "./declare";
import { RecipeStyle } from "./style/recipe";

export type RecipeProps = {

    readonly interceptors: Interceptor[];
};

export class Recipe extends React.Component<RecipeProps> {

    private readonly _style: Classes = RecipeStyle.use();

    public render() {

        return (<div
            className={this._style.grid}
            style={{
                gridTemplateRows: `repeat(${this._getColumns},1fr)`,
            }}
        >
            <KeyboardKey>123</KeyboardKey>
            {this.props.interceptors.map((_, index: number) => <div key={index}>{index + '1'}</div>)}
            {this.props.interceptors.map((_, index: number) => <div key={index}>{index + '2'}</div>)}
            {this.props.interceptors.map((_, index: number) => <div key={index}>{index + '3'}</div>)}
        </div>);
    }

    private _getColumns(): number {

        return Math.ceil(this.props.interceptors.length / 3);
    }
}
