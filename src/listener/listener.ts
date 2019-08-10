/**
 * @author WMXPY
 * @namespace Stenography
 * @description Listener
 */

import { Interceptor } from "../declare";
import { isPureLetter, parseEvent } from "../util";
import { Matcher } from "./match";

export class Listener {

    public static create(): Listener {

        const instance: Listener = new Listener();
        instance.mount();
        return instance;
    }

    private readonly _matcher: Matcher;
    private _timer: any = undefined;
    private _buffer: string[];
    private _active: boolean;

    private constructor() {

        this._matcher = Matcher.create();
        this._buffer = [];
        this._active = true;

        this._resetBuffer = this._resetBuffer.bind(this);
        this._listener = this._listener.bind(this);
    }

    public get matcher(): Matcher {

        return this._matcher;
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

            const matched: Interceptor | null = this._matcher.match(this._buffer);

            if (matched) {


                event.preventDefault();
                event.stopPropagation();

                matched.callback(this._buffer);
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
