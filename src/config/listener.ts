/**
 * @author WMXPY
 * @namespace Stenography
 * @description Listener
 */

import { isPureLetter, parseEvent } from "../util";
import { StenographyConfig } from "./config";
import { StenographyInterceptor } from "./interceptor";

export class Listener {

    public static create(config: StenographyConfig): Listener {

        const instance: Listener = new Listener(config);
        instance.mount();
        return instance;
    }

    private readonly _config: StenographyConfig;

    private _timer: any = undefined;
    private _buffer: string[];
    private _active: boolean;

    private constructor(config: StenographyConfig) {

        this._config = config;

        this._buffer = [];
        this._active = true;

        this._resetBuffer = this._resetBuffer.bind(this);
        this._listener = this._listener.bind(this);
    }

    public mount(): this {

        this.unmount();
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

        if (!this._checkTarget(event)) {
            return;
        }

        const expression: string = parseEvent(event);
        const shouldContinue: boolean = this._buff(expression);
        if (shouldContinue) {

            const matched: StenographyInterceptor | null = this._config.match(this._buffer);

            if (matched) {


                event.preventDefault();
                event.stopPropagation();

                matched.execute(this._buffer);
                clearTimeout(this._timer);
                this._resetBuffer();
            }
        }
        return;
    }

    private _checkTarget(event: KeyboardEvent): boolean {

        if (!isPureLetter(event)) {
            return true;
        }

        const target: any = event.target;
        if (target.nodeName === 'INPUT') {
            return false;
        }
        return true;
    }

    private _buff(expression: string): boolean {

        clearTimeout(this._timer);
        this._timer = setTimeout(this._resetBuffer, 1000);
        if (expression === 'control'
            || expression === 'alt'
            || expression === 'shift') {
            return false;
        }
        this._buffer = [...this._buffer, expression];
        return true;
    }
}
