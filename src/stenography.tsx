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
    readonly ref?: (ref: Listener) => void;
};

export class Stenography extends React.Component<StenographyProps> {

    private _listener: Listener | null = null;

    public constructor(props: StenographyProps) {

        super(props);

        this._listener = Listener.create(this.props.config);
        if (props.ref && typeof props.ref === 'function') {
            props.ref(this._listener as Listener);
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
