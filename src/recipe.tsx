/**
 * @author WMXPY
 * @namespace Stenography
 * @description Recipe
 */

import { Classes } from "jss";
import * as React from "react";
import { KeyboardKey } from "./components/keyboard";
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
        const interceptors: StenographyInterceptor[] = config.getVisibleInterceptors();

        return (<div
            style={{
                gridTemplateRows: `repeat(${this._getColumns(interceptors.length)},auto)`,
            }}
            className={this._style.wrapper}
        >
            {interceptors.map(this._renderInterceptor)}
        </div>);
    }

    private _renderInterceptor(interceptor: StenographyInterceptor, index: number) {

        const combos: string[] = interceptor.combos;
        const name: string | undefined = interceptor.name;
        const description: string | undefined = interceptor.description;

        return (<div key={index}>
            <div>
                {name && <span className={this._style.name}>{name}: </span>}
                {combos.map((combo: string, comboIndex: number) => {
                    if (comboIndex === combos.length - 1) {
                        return (<React.Fragment key={comboIndex}>
                            {this._renderKeyCombo(combo)}
                        </React.Fragment>);
                    }
                    return (<React.Fragment key={comboIndex}>
                        {this._renderKeyCombo(combo)}
                        {this._renderInsertion('then')}
                    </React.Fragment>);
                })}</div>
            {description && <div className={this._style.description}>{description}</div>}
        </div>);
    }

    private _renderKeyCombo(combo: string) {

        const splited: string[] = combo.split('+');
        return splited
            .map((element: string, index: number) => {
                if (index === splited.length - 1) {
                    return (<KeyboardKey key={index}>
                        {element}
                    </KeyboardKey>);
                }
                return (<React.Fragment key={index}>
                    <KeyboardKey key={index}>{element}</KeyboardKey>
                    {this._renderInsertion('+')}
                </React.Fragment>);
            });
    }

    private _renderInsertion(text: string) {

        return (<span className={this._style.insertion}> {text} </span>);
    }

    private _getColumns(length: number): number {

        return Math.ceil(length / 2);
    }
}
