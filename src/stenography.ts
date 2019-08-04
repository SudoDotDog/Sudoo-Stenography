/**
 * @author WMXPY
 * @namespace Stenography
 * @description Stenography
 */

import { Interceptor } from "./declare";
import { Matcher } from "./match";
import { parseEvent } from "./util";

export class Stenography {

    public static register(): Stenography {

        const instance: Stenography = this._getInstance();
        instance.mount();
        return instance;
    }

    public static get instance(): Stenography {

        return this._getInstance();
    }

    private static _instance: Stenography | null;

    private static _getInstance(): Stenography {

        if (!this._instance) {
            this._instance = new Stenography();
        }

        return this._instance;
    }

    private readonly _matcher: Matcher;
    private _buffer: string[];
    private _active: boolean;

    private constructor() {

        this._matcher = Matcher.create();
        this._buffer = [];
        this._active = true;

        this._listener = this._listener.bind(this);
    }

    public get matcher(): Matcher {

        return this._matcher;
    }

    public mount(): this {

        document.addEventListener('keydown', this._listener);
        return this;
    }

    public unmount(): this {

        document.removeEventListener('keydown', this._listener);
        return this;
    }

    public pause(): this {

        this._active = false;
        return this;
    }

    public resume(): this {

        this._active = true;
        return this;
    }

    private _resetBuffer(): this {

        this._buffer = [];
        return this;
    }

    private _listener(event: KeyboardEvent): void {

        if (!this._active) {
            return;
        }

        const expression: string = parseEvent(event);
        this._buffer = [...this._buffer, expression];

        const matched: Interceptor | null = this._matcher.match(this._buffer);

        if (matched) {

            event.preventDefault();
            event.stopPropagation();
            console.log(event);
        }

        this._resetBuffer();
        return;
    }
}
