/**
 * @author WMXPY
 * @namespace Stenography
 * @description Recipe
 */

import { Classes } from "jss";
import * as React from "react";
import { Interceptor } from "./declare";
import { RecipeStyle } from "./style/recipe";

export type RecipeProps = {

    readonly interceptors: Interceptor[];
};

export class Recipe extends React.Component<RecipeProps> {

    private readonly _style: Classes = RecipeStyle.use();

    public constructor(props: RecipeProps) {

        super(props);

        this._renderInterceptor = this._renderInterceptor.bind(this);
    }

    public render() {

        return (<div
            style={{
                gridTemplateRows: `repeat(${this._getColumns()},1fr)`,
            }}
            className={this._style.wrapper}
        >
            {this.props.interceptors.map(this._renderInterceptor)}
        </div>);
    }

    private _renderInterceptor(interceptor: Interceptor, index: number) {

        return (<div>
            <div>{interceptor.combo.toString()}</div>
        </div>);
    }

    private _getColumns(): number {

        return Math.ceil(this.props.interceptors.length / 2);
    }
}
