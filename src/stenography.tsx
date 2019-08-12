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
    readonly listenerRef?: (ref: Listener) => any;
};

export class Stenography extends React.Component<StenographyProps> {

    private _listener: Listener | null = null;

    public constructor(props: StenographyProps) {

        super(props);

        this._listener = Listener.create(this.props.config);
        if (props.listenerRef && typeof props.listenerRef === 'function') {
            props.listenerRef(this._listener as Listener);
        }
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
