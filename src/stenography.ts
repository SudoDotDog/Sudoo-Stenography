/**
 * @author WMXPY
 * @namespace Stenography
 * @description Stenography
 */

import { Interceptor } from "./declare";
import { Matcher } from "./match";
import { isPureLetter, parseEvent } from "./util";

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
        if (expression === 'ctrl+control'
            || expression === 'ctrl+control'
            || expression === 'ctrl+control') {
            return false;
        }
        this._buffer = [...this._buffer, expression];
        return true;
    }
}
