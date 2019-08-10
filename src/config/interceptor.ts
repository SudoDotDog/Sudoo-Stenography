/**
 * @author WMXPY
 * @namespace Config
 * @description Interceptor
 */

import { InterceptorCallback } from "./declare";
import { EASTER_EGG_NAME, stenographyEasterEgg } from "./egg";

export class StenographyInterceptor {

    public static when(...combo: string[]): StenographyInterceptor {

        return new StenographyInterceptor(combo, false);
    }

    public static whenEasterEgg(name: EASTER_EGG_NAME) {

        return new StenographyInterceptor(stenographyEasterEgg[name], true);
    }

    private readonly _combo: string[];

    private _description?: string;
    private _hidden: boolean;

    private _callback: InterceptorCallback | null = null;

    private constructor(combo: string[], hidden: boolean) {

        this._combo = combo;

        this._hidden = hidden;
    }

    public get combo(): string[] {

        return this._combo;
    }

    public get description(): string | undefined {

        return this._description;
    }

    public get isHidden(): boolean {

        return this._hidden;
    }

    public show(): this {

        this._hidden = false;
        return this;
    }

    public hide(): this {

        this._hidden = true;
        return this;
    }

    public setDescription(description: string): this {

        this._description = description;
        return this;
    }

    public then(callback: InterceptorCallback): this {

        this._callback = callback;
        return this;
    }

    public execute(combo?: string[]): void {

        if (this._callback && typeof this._callback === 'function') {
            this._callback(combo || this._combo);
        }
    }
}
