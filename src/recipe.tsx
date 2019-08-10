/**
 * @author WMXPY
 * @namespace Stenography
 * @description Recipe
 */

import { Classes } from "jss";
import * as React from "react";
import { StenographyConfig } from "./config/config";
import { StenographyInterceptor } from "./config/interceptor";
import { RecipeStyle } from "./style/recipe";

export type RecipeProps = {

    readonly config: StenographyConfig;
};

export class Recipe extends React.Component<RecipeProps> {

    private readonly _style: Classes = RecipeStyle.use();

    public constructor(props: RecipeProps) {

        super(props);

        this._renderInterceptor = this._renderInterceptor.bind(this);
    }

    public render() {

        const config: StenographyConfig = this.props.config;

        return (<div
            style={{
                gridTemplateRows: `repeat(${this._getColumns()},1fr)`,
            }}
            className={this._style.wrapper}
        >
            {config.interceptors.map(this._renderInterceptor)}
        </div>);
    }

    private _renderInterceptor(interceptor: StenographyInterceptor, index: number) {

        return (<div key={index}>
            <div>{interceptor.combo.toString()}</div>
        </div>);
    }

    private _getColumns(): number {

        return Math.ceil(this.props.config.length / 2);
    }
}
