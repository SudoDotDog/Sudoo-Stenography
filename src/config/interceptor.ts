/**
 * @author WMXPY
 * @namespace Config
 * @description Interceptor
 */

import { InterceptorCallback } from "./declare";
import { EASTER_EGG_NAME, stenographyEasterEgg } from "./egg";

export class StenographyInterceptor {

    public static when(...combo: string[]): StenographyInterceptor {

        return new StenographyInterceptor(combo);
    }

    public static whenEasterEgg(name: EASTER_EGG_NAME) {

        return new StenographyInterceptor(stenographyEasterEgg[name]);
    }

    private readonly _combo: string[];

    private _callback: InterceptorCallback | null = null;

    private constructor(combo: string[]) {

        this._combo = combo;
    }

    public get combo(): string[] {

        return this._combo;
    }

    public execute(combo?: string[]): void {

        if (this._callback && typeof this._callback === 'function') {
            this._callback(combo || this._combo);
        }
    }

    public then(callback: InterceptorCallback): this {

        this._callback = callback;
        return this;
    }
}
