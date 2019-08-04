/**
 * @author WMXPY
 * @namespace Stenography
 * @description Stenography
 */

import * as React from "react";
import { Interceptor } from "./declare";
import { Listener } from "./listener";

export type StenographyProps = {

    readonly interceptors: Interceptor[];
};

export class Stenography extends React.Component<StenographyProps> {

    private _listener: Listener | null = null;

    public componentDidMount() {

        this._listener = Listener.create();
        this._listener.matcher.listenList(this.props.interceptors);
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
