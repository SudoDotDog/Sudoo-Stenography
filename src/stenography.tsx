/**
 * @author WMXPY
 * @namespace Stenography
 * @description Stenography
 */

import * as React from "react";
import { StenographyConfig } from "./config/config";
import { Listener } from "./config/listener";

export type StenographyProps = {

    readonly config: StenographyConfig;
};

export class Stenography extends React.Component<StenographyProps> {

    private _listener: Listener | null = null;

    public componentDidMount() {

        this._listener = Listener.create(this.props.config);
    }

    public componentWillUnmount() {

        if (this._listener) {
            this._listener.unmount();
        }
    }

    public render() {

        return this.props.children;
    }
}
